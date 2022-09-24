function HowItWorks() {
	return (
		<div className='pt-2 flex flex-col items-center bg-gray-50 '>
			<div className='w-64 sm:w-2/4 lg:w-11/12 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 md:max-w-4xl'>
				<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
					How it works
				</h5>

				<ul className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
					<div className='sm:grid sm:grid-cols-2'>
						<div>
							<ul>Log in using 123@gmail.com and 123 as pw.</ul>
							<ul>
								To use note CRUD operations send a referral as a 'received'
							</ul>
						</div>
						<div>
							<ul>
								In the future user will be able to receive referrals as
								notificatoins
							</ul>
						</div>
					</div>
				</ul>
				<a
					href='https://youtu.be/vFMZQ1TmQjg'
					className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
				>
					Watch Youtube Demo
					<svg
						aria-hidden='true'
						className='ml-2 -mr-1 w-4 h-4'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
							clipRule='evenodd'
						></path>
					</svg>
				</a>
			</div>
		</div>
	);
}

export default HowItWorks;
