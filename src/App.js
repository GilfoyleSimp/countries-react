import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/navigation.component';
import Home from './components/Home/home.component';
import About from './components/About/about.component';

function App() {
  return (

    <Routes>
    <Route path='/' element={ <Navigation />}>
      <Route index element={<Home/>}/>
      <Route path = '/about' element={<About/>}/>
      {/* <Route path = '/sign-in' element={<SignIn/>}/>  */}
    </Route>
    </Routes>
    
  );
}

export default App;
