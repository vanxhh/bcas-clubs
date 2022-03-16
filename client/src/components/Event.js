import { useParams } from "react-router-dom";

const Event = () => {
	const { eventID } = useParams();

	return ( 	
		<main className='p-4 md:p-8'>
			<section className='flex flex-col gap-4 mb-4 md:mb-8'>
				<div className='h-48 w-48 md:h-64 md:w-64 overflow-hidden border-2 border-black rounded'>
					<img src='https://image.freepik.com/free-vector/yellow-orange-gradient-abstract-background_53876-62624.jpg?w=480' alt='club' className='h-full w-full object-cover' />
				</div>
				<div className='flex flex-col gap-2'>
					<h1 className='text-2xl md:text-3xl'>Event Name</h1>
					<p className='text-base md:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac ut consequat semper viverra. Posuere urna nec tincidunt praesent semper feugiat nibh. Eget gravida cum sociis natoque penatibus. Est ultricies integer quis auctor elit sed. Vitae semper quis lectus nulla at volutpat diam ut. Blandit massa enim nec dui nunc mattis enim ut tellus.</p>
					<p className='text-sm md:text-base'>Hosted by - from db with eventID {eventID}</p>
				</div>
			</section>
			<section className='flex gap-4'>
				<button className='text-sm md:text-base lg:text-lg p-2 border-2 border-black rounded bg-black text-white hover:bg-white hover:text-black'>Register</button>
				<button className='text-sm md:text-base lg:text-lg p-2 border-2 border-black rounded'>Join Club</button>
			</section>
		</main>
	)
}

export default Event;
