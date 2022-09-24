import TimeOfDay from "./TimeOfDay";
import { useNavigate, Link } from "react-router-dom";
import { useReferralContext } from "../context/ReferralContext";
import FilterButtons from "./FilterButtons";

function Dashboard() {
	const { filteredReferrals, deleteReferral } = useReferralContext();

	const navigate = useNavigate();
	const referralClients = filteredReferrals.map((data) => {
		return (
			<div
				key={data._id}
				className=' w-80 b-2 flex justify-evenly border-b-2 mb-3 mt-3 '
			>
				<div className='w-9/12 '>
					<p>{data.clientsName}</p>
					<p>Sent To: {data.realtorsName}</p>
					<p>Date Referred: {data.referredDate}</p>
				</div>
				<button
					onClick={() => navigate(`client-information/${data._id}`)}
					className='inline-block px-3 text-sm font-medium text-black  hover:bg-blue-600 hover:text-white active:bg-blue-500 focus:outline-none focus:ring'
				>
					More
				</button>
				<button
					onClick={() => deleteReferral(data._id)}
					className='inline-block px-3 text-sm font-medium text-black  hover:bg-blue-600 hover:text-white active:bg-blue-500 focus:outline-none focus:ring'
				>
					Delete
				</button>
			</div>
		);
	});
	return (
		<section className='flex flex-col items-center bg-gray-50'>
			{<TimeOfDay />}
			<h2 className='text-2xl  sm:text-3xl'>Referals</h2>
			<Link to='/create-referral'>
				<button className="inline-block  border border-black-600 rounded hover:bg-blue-600 hover:text-white active:bg-blue-500 focus:outline-none focus:ring className='inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg'">
					Send A Referral
				</button>
			</Link>
			<div>
				<FilterButtons />
			</div>
			{referralClients}
		</section>
	);
}

export default Dashboard;
