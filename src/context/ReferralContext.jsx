import { useState, createContext, useContext } from "react";
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

	// ============== User functions start =================
	// const register

	const registerUser = async (name, email, password) => {
		const res = await registerUserRequest(name, email, password);
		if (res?.response?.status === 400) {
			toast("User already Exists");
		} else if (res?.status === 201) {
			localStorage.setItem("user", JSON.stringify(res.data));
			navigate("/");
			setUser(localStorage.getItem("user"));
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
			setUser(localStorage.getItem("user"));
			navigate("/");
			setAlreadyHaveAccount((prevSignUp) => !prevSignUp);
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

	// ============== User Functions Ends =================

	return (
		<ReferralContext.Provider
			value={{
				alreadyHaveAccount,
				referrals,
				user,
				setUser,
				setAlreadyHaveAccount,
				registerUser,
				logOut,
				logIn,
				forgotPassword,
				updatePassowrd,
			}}
		>
			{children}
		</ReferralContext.Provider>
	);
}

export default ReferalProvider;
