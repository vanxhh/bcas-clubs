import { useState, useEffect } from 'react';
import axios from 'axios';

const RegisterFeedback = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		axios.get('/api/events/')
		.then(res => setData(res.data))
		.catch(err => console.log(err));
	}, []);

	const [adminKey, setAdminKey] = useState('');
	const [found, setFound] = useState(false);
	const [selected, setSelected] = useState("");
	const [formData, setFormData] = useState({
		eventID: "",
		clubName: "",
		date: "",
		topic: "",
		resource: "",
		qualifications: "",
		valuepoint1: "",
		valuepoint2: "",
		valuepoint3: "",
		numParticipants: ""
	});
	
	const adminSubmit = (event) => {
		axios.get('/api/admins/', { params: { adminID: adminKey }})
		.then(res => res.data.found ? setFound(true) : setFound(false))
		.catch(err => console.error(err));
		event.preventDefault();
	}

	const handleSelect = (eventID) => {
		setSelected(eventID);
		setFormData(prev => {
			return { ...prev,  eventID: eventID}
		})
	}

	const handleChange = (e) => {
		setFormData(prev => {
			e.preventDefault();
			return { ...prev,  [e.target.name]: e.target.value}
		})
	}

	const handleSumbit = (event) => {
		event.preventDefault();
		axios.post('/api/reportpost/', { params: { formData: formData }})
		.then(res => res)
		.catch(err => console.error(err));
	}

	return (
		<main className="p-4 md:p-8">
			<h1 className='text-xl md:text-2xl lg:text-4xl mb-2 md:mb-4'>Admin - Report/Feedback for an Event</h1>
			<form className='flex flex-col gap-8'>
				{!found ?
					<div className='flex flex-col gap-2'>
						<label className='text-base md:text-lg lg:text-xl'>
							Admin Key	
						</label>
						<input
							className='border-2 border-black rounded w-full p-1 md:w-1/2 md:p-2'
							type='text'
							name='adminID'
							value={adminKey}
							onChange={(e) => setAdminKey(e.target.value)}
							placeholder="Enter your ADMIN KEY"
						/>
						<button className='w-48 mt-4 text-sm md:text-base lg:text-lg p-2 border-2 border-black rounded bg-black text-white hover:bg-white hover:text-black' onClick={adminSubmit}>Continue</button>
					</div>
					:
					<>
					{!selected ?
						<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
							{data && 
								data.data.map((event) => (
									<div key={event._id} className='flex flex-col justify-center gap-2 border-2 border-black rounded cursor-pointer hover:shadow-[6px_6px_0_0_rgb(0,0,0)] hover:-translate-x-1 hover:-translate-y-1 hover:transition hover:duration-200 hover:ease-in-out' onClick={() => handleSelect(event._id)}>
										<div className='overflow-hidden'>
											<img src='https://image.freepik.com/free-vector/yellow-orange-gradient-abstract-background_53876-62624.jpg?w=480' alt='club' className='h-full w-full object-cover' />
										</div>
										<div className='p-1 md:p-2 lg:p-4'>
											<h3 className='text-base md:text-lg lg:text-xl'>{event.name}</h3>
										</div>
									</div>
								))
							}
						</div>
						:
						<div className='flex flex-col gap-2'>
							<div className='flex flex-col gap-2'>
								<label className='text-base md:text-lg lg:text-xl'>
									Club Name
								</label>
								<input
									className='border-2 border-black rounded w-full p-1 md:w-1/2 md:p-2'
									type='text'
									name='clubName'
									value={formData.clubName}
									onChange={(e) => handleChange(e)}
									placeholder="Enter name of the club/society which organized the event"
								/>
							</div>
							<div className='flex flex-col gap-2'>
								<label className='text-base md:text-lg lg:text-xl'>
									Date
								</label>
								<input
									className='border-2 border-black rounded w-full p-1 md:w-1/2 md:p-2'
									type='text'
									name='date'
									value={formData.date}
									onChange={(e) => handleChange(e)}
									placeholder="Enter date of the event"
								/>
							</div>
							<div className='flex flex-col gap-2'>
								<label className='text-base md:text-lg lg:text-xl'>
									Topic
								</label>
								<input
									className='border-2 border-black rounded w-full p-1 md:w-1/2 md:p-2'
									type='text'
									name='topic'
									value={formData.topic}
									onChange={(e) => handleChange(e)}
									placeholder="Enter the topic based on which event was organized"
								/>
							</div>
							<div className='flex flex-col gap-2'>
								<label className='text-base md:text-lg lg:text-xl'>
									Resource
								</label>
								<input
									className='border-2 border-black rounded w-full p-1 md:w-1/2 md:p-2'
									type='text'
									name='resource'
									value={formData.resource}
									onChange={(e) => handleChange(e)}
									placeholder="Enter resource person name"
								/>
							</div>
							<div className='flex flex-col gap-2'>
								<label className='text-base md:text-lg lg:text-xl'>
									Qualifications
								</label>
								<input
									className='border-2 border-black rounded w-full p-1 md:w-1/2 md:p-2'
									type='text'
									name='qualifications'
									value={formData.qualifications}
									onChange={(e) => handleChange(e)}
									placeholder="Enter qualifiations of resource person"
								/>
							</div>
							<label className='text-base md:text-lg lg:text-xl'>
								Valuepoints
							</label>
							<div className='flex flex-col gap-2'>
								<input
									className='border-2 border-black rounded w-full p-1 md:w-1/2 md:p-2'
									type='text'
									name='valuepoint1'
									value={formData.valuepoint1}
									onChange={(e) => handleChange(e)}
									placeholder="Enter Valuepoint 1"
								/>
								<input
									className='border-2 border-black rounded w-full p-1 md:w-1/2 md:p-2'
									type='text'
									name='valuepoint2'
									value={formData.valuepoint2}
									onChange={(e) => handleChange(e)}
									placeholder="Enter Valuepoint 2"
								/>
								<input
									className='border-2 border-black rounded w-full p-1 md:w-1/2 md:p-2'
									type='text'
									name='valuepoint3'
									value={formData.valuepoint3}
									onChange={(e) => handleChange(e)}
									placeholder="Enter Valuepoint 3"
								/>
							</div>
							<div className='flex flex-col gap-2'>
								<label className='text-base md:text-lg lg:text-xl'>
									Participants
								</label>
								<input
									className='border-2 border-black rounded w-full p-1 md:w-1/2 md:p-2'
									type='text'
									name='numParticipants'
									value={formData.numParticipants}
									onChange={(e) => handleChange(e)}
									placeholder="Enter number of participants"
								/>
							</div>
							<button className='w-48 mt-4 text-sm md:text-base lg:text-lg p-2 border-2 border-black rounded bg-black text-white hover:bg-white hover:text-black' onClick={handleSumbit}>
								Submit
							</button>
						</div>
					}
					</>
				}
			</form>
		</main>
	)
}

export default RegisterFeedback;
