import axios from 'axios';
import { useState, useEffect } from 'react';

const Clubs = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		axios.get('/api/clubs/')
		.then(res => setData(res.data))
		.catch(err => console.log(err));
	}, []);
	
	return (
		<main className='p-4 md:p-8'>
			<h1 className='text-xl md:text-2xl lg:text-4xl mb-2 md:mb-4'>Clubs</h1>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
				{data && 
					data.data.map((club) => (
						<a href={`club/${club.id}`} key={club.id}>
							<div className='flex flex-col justify-center gap-2 border-2 border-black rounded cursor-pointer hover:shadow-[6px_6px_0_0_rgb(0,0,0)] hover:-translate-x-1 hover:-translate-y-1 hover:transition hover:duration-200 hover:ease-in-out'>
								<div className='overflow-hidden'>
									<img src='https://image.freepik.com/free-vector/yellow-orange-gradient-abstract-background_53876-62624.jpg?w=480' alt='club' className='h-full w-full object-cover' />
								</div>
								<div className='p-1 md:p-2 lg:p-4'>
									<h3 className='text-base md:text-lg lg:text-xl'>{club.name !== "" ? club.name : club.club}</h3>
								</div>
							</div>
						</a>
					))
				}
			</div>
		</main>
	);
}

export default Clubs;
