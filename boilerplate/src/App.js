import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dates from './components/Dates';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dates' element={<Dates />} />
      </Routes>
    </>
  );
}

export default App;
