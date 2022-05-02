import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './Components/Home';
import Bollywood from './Components/Bollywood';
import Technology from './Components/Technology';
import Hollywood from './Components/Hollywood';
import Fitness from './Components/Fitness';
import Food from './Components/Food';
import BlogContext from './Components/Context/BlogContext';
import DisplayContent from './Components/DisplayContent';

function App() {
  return (
    <BlogContext>
    <div className="App">
      <Router>
        <Header/>
          <Routes>
            <Route path='/' element={<Navigate to='/home'/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/travel/:id' element={<DisplayContent/>}/>
            <Route path='/bollywood' element={<Bollywood/>}/>
            <Route path='/bollywood/:id' element={<DisplayContent/>}/>
            <Route path='/technology' element={<Technology/>}/>
            <Route path='/technology/:id' element={<DisplayContent/>}/>
            <Route path='/hollywood' element={<Hollywood/>}/>
            <Route path='/hollywood/:id' element={<DisplayContent/>}/>
            <Route path='/fitness' element={<Fitness/>}/>
            <Route path='/fitness/:id' element={<DisplayContent/>}/>
            <Route path='/food' element={<Food/>}/>
            <Route path='/food/:id' element={<DisplayContent/>}/>
          </Routes>
      </Router>
    </div>
    </BlogContext>
  );
}

export default App;
