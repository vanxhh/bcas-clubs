import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';

const Club = () => {
	const { clubID } = useParams();
	const [data, setData] = useState(null);

	useEffect(() => {
		axios.get('/api/clubs/')
		.then(res => setData(res.data))
		.catch(err => console.log(err));
	}, []);
	
	let club;

	if (data) {
		const matchingClubs = data?.data.filter(club => club.id === clubID)
		club = matchingClubs[0];
	}

	return (
		<>
		{club ?
			<main className='p-4 md:p-8'>
				<section className='flex flex-col gap-4 mb-4'>
					<div className='h-48 w-48 md:h-64 md:w-64 overflow-hidden border-2 border-black rounded'>
						<img src='https://image.freepik.com/free-vector/yellow-orange-gradient-abstract-background_53876-62624.jpg?w=480' alt='club' className='h-full w-full object-cover' />
					</div>
					<div className='flex flex-col gap-2'>
						<h1 className='text-2xl md:text-3xl'>{club.name !== "" ? club.name : club.club}</h1>
						<p className='text-base md:text-lg'>{club.desc}</p>
						<p className='text-sm md:text-base'> Convenor - {club.convener}</p>
					</div>
				</section>
				<section className='flex gap-4'>
					<button className='text-sm md:text-base lg:text-lg p-2 border-2 border-black rounded bg-black text-white hover:bg-white hover:text-black'>Join Club</button>
				</section>
			</main>
			:
			<main className='p-4 md:p-8 text-lg md:text-xl lg:text-2xl'>
				No Club with that ID found!
			</main>
		}
		</>
	)
}

export default Club;
