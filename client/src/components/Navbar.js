import { useState, useEffect } from "react";

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
			const handleResize = () => setWidth(window.innerWidth);
			window.addEventListener('resize', handleResize);
			return () => {
					window.removeEventListener('resize', handleResize);
			};
	}, []);

	const handleHamburg = () => setIsActive(prev => !prev);
	
	return (
		<>
			<nav className='flex justify-between items-center bg-white pl-4 md:pl-8 pr-4 md:pr-0 border-b-2 border-black h-12 md:h-16 lg:h-20'>
				<div>
					<a href='/'><h1 className='text-3xl md:text-4xl lg:text-5xl tracking-[-0.2rem] md:tracking-[-0.3rem]'>bcas-clubs</h1></a>
				</div>
				<div className='flex items-center gap-12 h-full text-base md:text-lg lg:text-xl'>
					<a href='/clubs' className='hidden md:inline'>
						<div className='decoration-none hover:underline underline-offset-2'>Clubs</div>
					</a>
					<a href='/events' className='hidden md:inline'>
						<div className='decoration-none hover:underline underline-offset-2'>Events</div>
					</a>
					<a href='/gallery' className='hidden md:inline'>
						<div className='decoration-none hover:underline underline-offset-2'>Gallery</div>
					</a>
					<a href='/dates' className='hidden md:inline'>
						<div className='decoration-none hover:underline underline-offset-2'>Dates</div>
					</a>
					<a href='/admin' className='hidden md:inline-flex bg-black text-white h-full flex items-center justify-center w-20 hover:text-black hover:bg-white hover:border-2 border-black'>
						<div>Admin</div>
					</a>
					<svg x="0px" y="0px" width="24.75px" height="24.75px" viewBox="0 0 24.75 24.75" className={`md:hidden cursor-pointer transition ${isActive && 'rotate-90 transition'}`} onClick={handleHamburg}>
						<path d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2   c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2   c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z"/>
					</svg>
				</div>
			</nav>
			{(window.innerWidth <= 768 && isActive) &&
				<ul className='flex flex-col items-center justify-around border-2 border-black rounded w-32 h-48 bg-white fixed right-0'>
					<a href='/clubs' className='text-lg'>
						<div className=''>Clubs</div>
					</a>
					<a href='/events' className='text-lg'>
						<div className=''>Events</div>
					</a>
					<a href='/gallery' className='text-lg'>
						<div className=''>Gallery</div>
					</a>
					<a href='/dates' className='text-lg'>
						<div className=''>Dates</div>
					</a>
					<a href='/admin' className='text-lg'>
						<div>Admin</div>
					</a>
				</ul>
			}
		</>
	);
}

export default Navbar;
