import './App.css';
import Navbar from './components/navbar/Navbar';
import Rent from './pages/rent/Rent';


function App() {
  return (
      <div className='bg-[#f8f7fd]'>
        <Navbar />
        <Rent />
      </div>
  );
}

export default App;
