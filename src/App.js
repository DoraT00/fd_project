import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './pages/Navbar'
import Players from './pages/Players'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
      <Routes>
        <Route path='/' exact element={<Players/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
