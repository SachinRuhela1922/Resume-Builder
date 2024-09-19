
import './App.css';
import {Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <header>
        <Navbar  />
      </header>
     <h1>welcome</h1>
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
     </Routes>
    </div>
  );
}

export default App;
