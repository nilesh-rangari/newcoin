// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import './App.css'
import Home from './pages/Home'
import Dapp from './pages/Dapp';

function App() {

  return (

    <>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Dapp" element={<Dapp/>}></Route>
          </Routes>
        </BrowserRouter>
      {/* <Dapp /> */}
      {/* <Sample /> */}
      
    </>
  )
}

export default App
