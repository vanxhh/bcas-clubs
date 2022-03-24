import axios from 'axios';
import { useState, useEffect } from 'react';

const Gallery = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		axios.get('/api/photos')
		.then(res => setData(res.data))
		.catch(err => console.log(err));
	}, []);

	return (
		<main className='p-4 md:p-8'>
			<section>
				<h1 className='text-xl md:text-2xl lg:text-4xl mb-2 md:mb-4'>Photo Gallery</h1>
				{data && 
					<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
						{
							data.data.map((photo) =>
								<a about="blank" href={photo.link}>
									<div className='flex flex-col justify-center gap-2 border-2 border-black rounded cursor-pointer hover:shadow-[6px_6px_0_0_rgb(0,0,0)] hover:-translate-x-1 hover:-translate-y-1 hover:transition hover:duration-200 hover:ease-in-out' key={photo._id}>
											<img src={photo.image} alt="" />
										<div className='p-1 md:p-2 lg:p-4'>
											<h3 className='text-base md:text-lg lg:text-xl'>{photo.name}</h3>
										</div>
									</div>
								</a>
							)
						}
					</div>
				}
			</section>
		</main>
	)
}

export default Gallery;
