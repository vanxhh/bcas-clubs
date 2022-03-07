import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dates from './components/Dates';
import Gallery from './components/Gallery';
import Event from './components/Event';
import Club from './components/Club';
import Err404 from './components/Err404';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dates' element={<Dates />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/event/:eventID' element={<Event />} />
        <Route path='/club/:clubID' element={<Club />} />
        <Route path='*' element={<Err404 />} />
      </Routes>
    </>
  );
}

export default App;
