import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dates from './components/Dates';
import Gallery from './components/Gallery';
import Event from './components/Event';
import Clubs from './components/Clubs';
import Club from './components/Club';
import Events from './components/Events';
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
        <Route path='*' element={<Err404 />} />
      </Routes>
    </>
  );
}

export default App;
