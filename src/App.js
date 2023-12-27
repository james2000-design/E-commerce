
import Display from './component/Display/Display';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Hero from './component/Hero/Hero';
import Message from './component/Message/Message';
import Mobile from './component/Mobile/Mobile';
import Pact from './component/Pact/Pact';
import  Section  from './component/Section/Section';
import Young from './component/Young/Young';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import States from './Pages/States';

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    
    
      
  <BrowserRouter>
    
    {/* <States /> */}

      <Routes>
    <Route path='/' element={ <Homepage />} />

  <Route path='/section' element={<Section />} />


      </Routes>
    
    
      </BrowserRouter>
    </div>
  );
}

export default App;
