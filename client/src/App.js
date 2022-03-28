import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dates from './components/Dates';
import Gallery from './components/Gallery';
import Clubs from './components/Clubs';
import Club from './components/Club';
import Events from './components/Events';
import Event from './components/Event';
import Admin from './components/Admin';
import RegisterEvent from './components/RegisterEvent';
import RegisterFeedback from './components/RegisterFeedback';
import Err404 from './components/Err404';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dates' element={<Dates />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/clubs' element={<Clubs />} />
        <Route path='/club/:clubID' element={<Club />} />
        <Route path='/events' element={<Events />} />
        <Route path='/event/:eventID' element={<Event />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/register' element={<RegisterEvent />} />
        <Route path='/admin/register/feedback' element={<RegisterFeedback />} />
        <Route path='*' element={<Err404 />} />
      </Routes>
    </>
  );
}

export default App;
