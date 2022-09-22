import {
	useState,
	createContext,
	useContext,
	useEffect,
	useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import {
	logInUserRequest,
	registerUserRequest,
	getUserRequest,
	forgotPasswordRequest,
	updatePasswordRequest,
} from "../api/userApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	createReferralRequest,
	getAllReferralsRequest,
	getOneReferralRequest,
	editReferralRequest,
	deleteReferralRequest,
} from "../api/referralsApi";
export const ReferralContext = createContext();

export function useReferralContext() {
	const context = useContext(ReferralContext);
	return context;
}

function ReferalProvider({ children }) {
	const navigate = useNavigate();
	// initial state for referrals
	const [referrals, setReferrals] = useState([]);
	// boolean if the client already and account
	const [alreadyHaveAccount, setAlreadyHaveAccount] = useState(false);
	// state to store user from localStorage
	const [user, setUser] = useState("");
	// flag to compare buttons
	const [activeButtons, setActiveButtons] = useState("");
	// filtered referrals (seller and buyers)
	const [filteredReferrals, setFilteredReferrals] = useState([]);

	// ==============Referral manipulation Crud =================
	const getAllReferrals = async () => {
		let token = getToken();
		let res = await getAllReferralsRequest(token);
		setReferrals(res.data);
	};

	const createReferral = async (referral) => {
		let token = getToken();
		const res = await createReferralRequest(referral, token);
		if (res.status === 200) {
			toast("New Referral created");
			setReferrals((prevReferrals) => [...prevReferrals, res.data]);
		}
	};

	const getOneReferral = async (referralId) => {
		let token = getToken();
		return await getOneReferralRequest(referralId, token);
	};

	// edit Referral
	const editReferralInformation = async (referral, referralId) => {
		let token = getToken();
		const res = await editReferralRequest(token, referral, referralId);
		setReferrals(
			referrals.map((clientReferral) =>
				clientReferral._id === referralId ? res.data : clientReferral
			)
		);
		toast("Referral has been updated");
	};

	// delete Referral
	const deleteReferral = async (referralId) => {
		let token = getToken();
		const res = await deleteReferralRequest(token, referralId);
		if (res.status === 200) {
			toast("Referral Deleted");
			let referralClient = referrals.filter((x) => {
				return x._id !== referralId;
			});
			setReferrals(referralClient);
		}
	};
	// ============== Referral manipulation Crud END =================

	// ============== User functions start =================
	// const register

	const registerUser = async (name, email, password) => {
		const res = await registerUserRequest(name, email, password);
		if (res?.response?.status === 400) {
			toast("User already Exists");
		} else if (res?.status === 201) {
			localStorage.setItem("user", JSON.stringify(res.data));
			navigate("/");
			setAlreadyHaveAccount((prevSignUp) => !prevSignUp);
		}
	};

	const logOut = () => {
		localStorage.removeItem("user");
		navigate("/auth");
		window.location.reload(false);
	};

	const logIn = async (email, passowrd) => {
		const res = await logInUserRequest(email, passowrd);
		if (res?.response?.status === 401) {
			toast("Email or Passowrd are incorrect");
		} else if (res.status === 200) {
			localStorage.setItem("user", JSON.stringify(res.data));
			navigate("/");
			setAlreadyHaveAccount((prevSignUp) => !prevSignUp);
			getAllReferrals();
		}
	};

	// forgot password
	const forgotPassword = async (email) => {
		const res = await forgotPasswordRequest(email);
		if (res.status === 200) {
			toast("Please check your email");
		} else if (res.status === 400) {
			toast("Please contact customer support");
		}
	};

	// update passowrd
	const updatePassowrd = async (password, token) => {
		const res = await updatePasswordRequest(password, token);
		if (res.status === 200) {
			toast("Your password has been changed");
			navigate("/auth");
		}
	};

	// const getUser = async (token) => {
	// 	return await getUserRequest(token);
	// };
	const getToken = () => {
		if (localStorage.getItem("user")) {
			return JSON.parse(localStorage.getItem("user")).token;
		}
	};

	// useEffect
	useEffect(() => {
		if (localStorage.getItem("user")) {
			getAllReferrals();
		}
	}, []);

	// ============== User Functions Ends =================
	return (
		<ReferralContext.Provider
			value={{
				alreadyHaveAccount,
				referrals,
				user,
				activeButtons,
				filteredReferrals,
				setReferrals,
				setFilteredReferrals,
				setActiveButtons,
				setUser,
				setAlreadyHaveAccount,
				registerUser,
				logOut,
				logIn,
				forgotPassword,
				updatePassowrd,
				getAllReferrals,
				createReferral,
				getOneReferral,
				editReferralInformation,
				deleteReferral,
				getToken,
			}}
		>
			{children}
		</ReferralContext.Provider>
	);
}

export default ReferalProvider;
