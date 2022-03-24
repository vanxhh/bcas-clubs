import dates from '../data/dates.json';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Dates = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());

	return (
		<main className='p-4 md:p-8'>
			<section className='mb-4 md:mb-8'>
				<h1 className='text-xl md:text-2xl lg:text-4xl mb-2 md:mb-4'>Important Dates</h1>
				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
					{
						dates.data.map(date => (
							<div key={date.id} className='flex flex-col justify-center gap-2 border-2 border-black rounded cursor-pointer hover:shadow-[6px_6px_0_0_rgb(0,0,0)] hover:-translate-x-1 hover:-translate-y-1 hover:transition hover:duration-200 hover:ease-in-out'>
								<p>Date - {date.date} / {date.month}</p>
								<p className='text-xl'>{date.day}</p>
							</div>
						))
					}
				</div>
			</section>
			<section>
				<h1 className='text-xl md:text-2xl lg:text-4xl mb-2 md:mb-4'>Pick a date</h1>
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