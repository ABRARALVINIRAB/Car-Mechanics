import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Services from './pages/Home/Services/Services';
import Experts from './pages/Home/Experts/Experts';
import Banner from './pages/Home/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Services></Services>
      <Experts></Experts>
    </div>
  );
}

export default App;
