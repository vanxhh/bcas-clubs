import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Dates = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());

	return (
		<main className='p-8'>
			<section className='mb-8'>
				<div className='text-2xl pb-4'>Important Dates</div>
				<div className='grid gap-4'>
					<div className='h-24 border-2 border-black rounded card pointer p-2 flex flex-col'>
						<p>Date - 04/04/2022</p>
						<p className='text-xl'>Some dummy day</p>
					</div>
					<div className='h-24 border-2 border-black rounded card pointer p-2 flex flex-col'>
						<p>Date - 04/04/2022</p>
						<p className='text-xl'>Some dummy day</p>
					</div>
					<div className='h-24 border-2 border-black rounded card pointer p-2 flex flex-col'>
						<p>Date - 04/04/2022</p>
						<p className='text-xl'>Some dummy day</p>
					</div>
					<div className='h-24 border-2 border-black rounded card pointer p-2 flex flex-col'>
						<p>Date - 04/04/2022</p>
						<p className='text-xl'>Some dummy day</p>
					</div>
					<div className='h-24 border-2 border-black rounded card pointer p-2 flex flex-col'>
						<p>Date - 04/04/2022</p>
						<p className='text-xl'>Some dummy day</p>
					</div>
					<div className='h-24 border-2 border-black rounded card pointer p-2 flex flex-col'>
						<p>Date - 04/04/2022</p>
						<p className='text-xl'>Some dummy day</p>
					</div>
					<div className='h-24 border-2 border-black rounded card pointer p-2 flex flex-col'>
						<p>Date - 04/04/2022</p>
						<p className='text-xl'>Some dummy day</p>
					</div>
				</div>
			</section>
			<section className=''>
				<div className='text-2xl pb-4'>Pick a date</div>
				<div className='border-2 border-black rounded inline-block mb-4 p-1'>
					<DatePicker
						selected={selectedDate}
						onChange={date => setSelectedDate(date)}
					/>
				</div>
				{selectedDate && <p>hey</p>}
			</section>
		</main>
	)
}

export default Dates;