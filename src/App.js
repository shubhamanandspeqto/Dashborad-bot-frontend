import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import Tokens from './Components/Tokens';


function App() {
  return (
    <div className="App">

      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/tokens' element={<Tokens/>}/>

      </Routes>
    </div>



  );
}

export default App;
