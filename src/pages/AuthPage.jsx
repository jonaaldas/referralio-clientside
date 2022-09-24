import Auth from "../components/Auth";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import NavigationBar from "../components/NavigationBar";

function AuthPage() {
	return (
		<>
			<NavigationBar />
			<HowItWorks />
			<Auth />
			<Footer />
		</>
	);
}

export default AuthPage;
