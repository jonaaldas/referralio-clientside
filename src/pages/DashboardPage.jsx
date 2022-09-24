import Dashboard from "../components/Dashboard";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
function DashboardPage() {
	return (
		<>
			<NavigationBar />
			<HowItWorks />
			<Dashboard />
			<Footer />
		</>
	);
}

export default DashboardPage;
