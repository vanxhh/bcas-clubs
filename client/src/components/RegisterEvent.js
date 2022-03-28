import { useState } from 'react';
import axios from 'axios';

const RegisterEvent = () => {
	const [adminKey, setAdminKey] = useState('');
	const [found, setFound] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		organizer: "",
		chief_guest: "",
		desc: "",
		timing: "",
		poster: "",
		part_link: "",
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

	const handleChange = (e) => {
		setFormData(prev => {
			e.preventDefault();
			return { ...prev,  [e.target.name]: e.target.value}
		})
	}

	const handleSumbit = (event) => {
		event.preventDefault();
		axios.post('/api/eventpost/', { params: { formData: formData }})
		.then(res => res)
		.catch(err => console.error(err));
	}
	
	return (
		<main className='p-4 md:p-8'>
			<h1 className='text-xl md:text-2xl lg:text-4xl mb-2 md:mb-4'>Admin - Register an Event</h1>
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
					<div className='flex flex-col gap-2'>
						<div className='flex flex-col gap-2'>
							<label className='text-base md:text-lg lg:text-xl'>
								Event Name
							</label>
							<input
								className='border-2 border-black rounded w-full p-1 md:w-1/2 md:p-2'
								type='text'
								name='name'
								value={formData.name}
								onChange={(e) => handleChange(e)}
								placeholder="Enter name of the event"
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<label className='text-base md:text-lg lg:text-xl'>
								Event Organizer
							</label>
							<input
								className='border-2 border-black rounded w-full p-1 md:w-1/2 md:p-2'
								type='text'
								name='organizer'
								value={formData.organizer}
								onChange={(e) => handleChange(e)}
								placeholder="Enter name of event organizer"
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<label className='text-base md:text-lg lg:text-xl'>
								Chief Guest (if any)
							</label>
							<input
								className='border-2 border-black rounded w-full p-1 md:w-1/2 md:p-2'
								type='text'
								name='chief_guest'
								value={formData.chief_guest}
								onChange={(e) => handleChange(e)}
								placeholder="Chief Guest"
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<label className='text-base md:text-lg lg:text-xl'>
								Description
							</label>
							<textarea
								className='border-2 border-black rounded w-full p-1 md:w-1/2 md:p-2'
								type='text'
								name='desc'
								value={formData.desc}
								onChange={(e) => handleChange(e)}
								placeholder="Enter a brief description of event"
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<label className='text-base md:text-lg lg:text-xl'>
								Time
							</label>
							<input
								className='border-2 border-black rounded w-full p-1 md:w-1/2 md:p-2'
								type='text'
								name='timing'
								value={formData.timing}
								onChange={(e) => handleChange(e)}
								placeholder="DD-Month, HR-MN - HR-MN"
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<label className='text-base md:text-lg lg:text-xl'>
								Poster Link
							</label>
							<input
								className='border-2 border-black rounded w-full p-1 md:w-1/2 md:p-2'
								type='text'
								name='poster'
								value={formData.poster}
								onChange={(e) => handleChange(e)}
								placeholder="Enter the link for banner/poster"
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<label className='text-base md:text-lg lg:text-xl'>
								Registration Link
							</label>
							<input
								className='border-2 border-black rounded w-full p-1 md:w-1/2 md:p-2'
								type='text'
								name='part_link'
								value={formData.part_link}
								onChange={(e) => handleChange(e)}
								placeholder="Enter the registration link"
							/>
						</div>
						<button className='w-48 mt-4 text-sm md:text-base lg:text-lg p-2 border-2 border-black rounded bg-black text-white hover:bg-white hover:text-black' onClick={handleSumbit}>
							Submit
						</button>
					</div>
				}
			</form>
		</main>
	)
}

export default RegisterEvent;
