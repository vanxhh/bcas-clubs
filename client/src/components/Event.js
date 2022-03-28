import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';

const Club = () => {
	const { eventID } = useParams();
	const [data, setData] = useState(null);
	const [opened, setOpened] = useState(false);

	useEffect(() => {
		axios.get('/api/events/')
		.then(res => setData(res.data))
		.catch(err => console.log(err));
	}, []);
	
	let event;

	if (data) {
		const matchingEvents = data?.data.filter(event => event._id === eventID)
		event = matchingEvents[0];
	}

	const toggle = () => setOpened(prev => !prev)

	return (
		<>
		{event ?
			<main className='p-4 md:p-8'>
				<section className='flex flex-col gap-4 mb-4'>
					<div className='h-48 w-48 md:h-64 md:w-64 overflow-hidden border-2 border-black rounded'>
						<img src='https://image.freepik.com/free-vector/yellow-orange-gradient-abstract-background_53876-62624.jpg?w=480' alt='club' className='h-full w-full object-cover' />
					</div>
					<div className='flex flex-col gap-2'>
						<h1 className='text-2xl md:text-3xl'>{event.name}</h1>
						<p className='text-base md:text-lg'>{event.desc}</p>
						<p className='text-base md:text-lg'>Timing - {event.timing}</p>
						<p className='text-sm md:text-base'>Organizer - {event.organizer}</p>
						<p className='text-sm md:text-base'>Chief Guest - {event.chief_guest || ""}</p>
					</div>
				</section>
				<section className='flex gap-4'>
					<a href={event.part_link}>
						<button className='text-sm md:text-base lg:text-lg p-2 border-2 border-black rounded bg-black text-white hover:bg-white hover:text-black'>Register</button>
					</a>
					<button className='text-sm md:text-base lg:text-lg p-2 border-2 border-black rounded text-black' onClick={toggle}>{opened ? "Hide Report/Feedback" : "View Report/Feedback"}</button>
				</section>
				{opened &&
					<section className='mt-8'>
						<h1 className='text-2xl md:text-3xl mb-2'>Report / Feedback</h1>
						<div className="text-base md:text-lg">
							The event {event.name}, has been organised by {event.clubName} on {event.date} on the topic {event.topic}. The resource person for the event is {event.resource}, has done their {event.qualifications}. The value points shared by them are as follows:
							<ul>
								<li>{event.valuepoint1}</li>
								<li>{event.valuepoint2}</li>
								<li>{event.valuepoint3}</li>
							</ul>
							The event successfully occurred and {event.numParticipants} people participated with lots of enthusiasm.
						</div>
					</section> 
				}
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
