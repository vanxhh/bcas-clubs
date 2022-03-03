const Navbar = () => {
	return (
		<nav className='navbar'>
			<div>
				<a href='/'><h1 className='navbar--header'>bcas-clubs</h1></a>
			</div>
			<div className='list'>
				<a href='/clubs'>
					<div className='list--nobgitems underline'>Clubs</div>
				</a>
				<a href='/events'>
					<div className='list--nobgitems underline'>Events</div>
				</a>
				<a href='/login' className='list--bgitems'>
					<div>Admin</div>
				</a>
			</div>
		</nav>
	)
}

export default Navbar;
