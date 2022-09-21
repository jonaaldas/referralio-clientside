import "./index.css";
import ReferalContainer from "./context/ReferralContext";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";
import UpdateForgotPasswordPage from "./pages/UpdateForgorPasswordFormPage";
import ProtectedRoutes from "./components/PtotectedRoutes";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<ReferalContainer>
			<Routes>
				<Route exact path='/auth' element={<AuthPage />} />
				<Route
					exact
					path='/forgot-password'
					element={<UpdateForgotPasswordPage />}
				/>
				<Route
					exact
					path='/update-password/:token'
					element={<UpdateForgotPasswordPage />}
				/>
				<Route element={<ProtectedRoutes />}>
					<Route exact path='/' element={<DashboardPage />} />
				</Route>
			</Routes>
			<ToastContainer />
		</ReferalContainer>
	);
}

export default App;
