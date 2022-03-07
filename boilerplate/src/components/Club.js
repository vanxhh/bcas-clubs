import { useParams } from "react-router-dom";

const Club = () => {
	const { clubID } = useParams();

	return (
		<main className='p-8'>
			<section className='flex gap-4 items-center mb-8'>
				<div className='h-96 w-96 border-2 border-black rounded'></div>
				<div className='flex flex-col gap-2'>
					<h1 className='text-4xl'>Club Name</h1>
					<p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac ut consequat semper viverra. Posuere urna nec tincidunt praesent semper feugiat nibh. Eget gravida cum sociis natoque penatibus. Est ultricies integer quis auctor elit sed. Vitae semper quis lectus nulla at volutpat diam ut. Blandit massa enim nec dui nunc mattis enim ut tellus.</p>
				</div>
			</section>
			<section className='flex gap-4'>
				<button className='text-lg p-2 border-2 border-black rounded bg-black text-white hover:bg-white hover:text-black'>Join Club</button>
			</section>
		</main>
	)
}

export default Club;
