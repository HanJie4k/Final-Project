import { Route, Routes } from 'react-router-dom';
import './elements/Chat.css'
import NavBar from './Navigation/Navbar';
import One from './elements/One'
import Main from './Main/MainPage'
import Two from './elements/Two'
import './App.css'
function App() {
  return (
    <>
    
    <NavBar/>
    <Routes>
      <Route path='/' Component={Main}/> 
      <Route path='/One' Component={One}/>
      <Route path='/Two' Component={Two}/>
    </Routes>
    </> 
     );
}

export default App;
