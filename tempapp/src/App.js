
import './App.css';
import Homepage from './Component/homepage/Homepage';
import About from './Component/AboutUs/About';
import Api from './Component/API/Api';
import Sortdata from './Component/table/Sortdata';
import {Routes, Route } from 'react-router-dom';
import Multiselect from './Component/Mutipleselect/Mutipleselect';
import OldLoginfrom from './Component/Mutipleselect/formik/OldLoginFrom';
import LoginFormTemp from './Component/Usecontext/LoginFormTemp';
import Loginfrom from './Component/Mutipleselect/formik/Loginform';
function App() {
  return (
    <div className="App">
     {/* <Multiselect/>
     <OldLoginfrom/> */}
      {/* */}
    {/*<Sortdata/>
    
    
    */}         
        <Routes >
        <Route path='/'  element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/api' element={<Api/>}/>
        <Route path='/table' element={<Sortdata/>}/>
        <Route path='/logIn' element={<OldLoginfrom/>}/>
        {/* <Route path='/logIn' element={<LoginFormTemp/>}/> */}
        {/* <Route path='/logIn' element={<Loginfrom/>}/> */}
      </Routes>
 

       {/* <LoginFormTemp/>  */}

      
      
    
    </div>
  );
}

export default App;
