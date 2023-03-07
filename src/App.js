
import './App.css';
import './HomAboCont/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./HomAboCont/Home";
import Header from './FootHead/Header';
import Footer from './FootHead/Footer';
import About from './HomAboCont/About';
import Contact from './HomAboCont/Contact';
import Image from './Image';


function App () {
  return (
    <div className="App">
     <BrowserRouter> 
     <Header/>
     <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/contact'element={<Contact/>}></Route>
      <Route path='/hagust/:id'element={<Image/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
