const Admin = () => {
	return (
		<main className='p-4 md:p-8'>
			<h1 className='text-xl md:text-2xl lg:text-4xl mb-2 md:mb-4'>Admin</h1>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
				<a href='/admin/register'>
					<div className='p-2 border-2 border-black rounded cursor-pointer hover:shadow-[6px_6px_0_0_rgb(0,0,0)] hover:-translate-x-1 hover:-translate-y-1 hover:transition hover:duration-200 hover:ease-in-out'>
						<p className='text-base md:text-lg lg:text-xl'>Register an Event</p>
					</div>
				</a>
				<a href='/admin/delete'>
					<div className='p-2 border-2 border-black rounded cursor-pointer hover:shadow-[6px_6px_0_0_rgb(0,0,0)] hover:-translate-x-1 hover:-translate-y-1 hover:transition hover:duration-200 hover:ease-in-out'>
						<p className='text-base md:text-lg lg:text-xl'>Delete an Event</p>
					</div>
				</a>
			</div>
		</main>
	)
}

export default Admin;
