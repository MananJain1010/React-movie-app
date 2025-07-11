import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourite from './Components/Favourite';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Movies />} render={(props)=>(
             <>
             <Banner {...props}/>
             <Movies {...props}/>
             </>
         )}/>
          <Route path='/favourites' element={<Favourite />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

