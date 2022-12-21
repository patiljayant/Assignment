import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rent from './pages/rent/Rent';


function App() {
  return (
    
    <Router>
      <div className='bg-[#f8f7fd]'>
        <Navbar />
          <Routes>
            <Route path={'/rent'} element={<Rent /> } />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
