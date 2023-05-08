import {Routes, Route} from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer';

function App() {
  return(
    <>
      <Header />
      <Routes>
        <Route path='/stopwatch' element={<Stopwatch />}/>
        <Route path='/timer' element={<Timer />} />
      </Routes>
    </>
  )
}

export default App
