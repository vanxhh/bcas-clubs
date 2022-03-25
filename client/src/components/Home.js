import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		axios.get('/api/clubs/')
		.then(res => setData(res.data))
		.catch(err => console.log(err));
	}, []);

	return (
		<main className=''>
      <section className='flex flex-col md:flex-row border-b-2 border-black'>
        <div className='bg-[#ff90e8] text-center border-b-2 border-black md:border-b-0 md:border-r-2 md:border-black p-2 md:p-4'>
          <h2 className='pb-2 md:pb-4 text-xl md:text-3xl lg:text-4xl'>Clubs</h2>
          <p className='text-base md:text-lg lg:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac ut consequat semper viverra.</p>
        </div>
        <div className='bg-[#ffc900] text-center p-2 md:p-4'>
          <h2 className='pb-2 md:pb-4 text-xl md:text-3xl lg:text-4xl'>Events</h2>
          <p className='text-base md:text-lg lg:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac ut consequat semper viverra.</p>
        </div>
      </section>

      <section className='mt-8 p-4 md:p-8'>
        <div className='flex items-center justify-between mb-4'>
          <legend className='text-xl md:text-3xl lg:text-4xl'>Clubs</legend>
          <a href='/clubs'><div className='text-sm underline underline-offset-2'>See All</div></a>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {data &&
            data.data.slice(0, 4).map((club) => (
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
      </section>
    </main>
	)
}

export default Home;
