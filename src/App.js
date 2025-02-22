import React, { useState } from 'react'
import Count from "./Count"
import './index.css'
import './Components/sidebar.css'
import Sidebar from "./Components/Sidebar"
import Navbar from "./Components/Navbar"
import { BrowserRouter, Route } from 'react-router-dom'
import About from './Components/About'
import Resume from './Components/Resume'
import Projects from './Components/Projects'
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import Button from '@material-ui/core/Button';
import Particle from './Components/Particle';
import { InfinitySpin } from 'react-loader-spinner'

function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [load, setLoading] = useState(false);
  const [loader, setloader] = useState(true);

  const array_photo = ['https://api.iconify.design/bx:bxl-react.svg', 'https://api.iconify.design/cib:django.svg?color=%23ffffff', 
'https://api.iconify.design/fa-brands:node-js.svg?color=white'];

  const lightStyle = {
  background: "url('https://api.iconify.design/bx:bxl-react.svg')no-repeat center center / contain",
  backgroundColor : "white"
  }

  const darkStyle = {
  background: "url('https://api.iconify.design/bx:bxl-react.svg?color=white') no-repeat center center / contain",
  backgroundColor : "black"
  }
  // const toggle = 0;
const lightButton = {
  color: "black",
  backgroundColor: "white"
}
const darkButton = {
  color: "white",
  backgroundColor: "black"
}

const loaderFn = () => {
  setloader(false);
}

  return (
    [
      <BrowserRouter>
        {
          loader ? <div className='loader'>
            <InfinitySpin 
              width='200'
              color="#fff"
            />
          </div> : null
        }
        <div className="button col-lg-12 " style = {darkMode? lightButton : darkButton}>
          <Button variant="contained" style = {darkMode? darkButton : lightButton} onClick={()=>setDarkMode(darkMode ? false:true)}>{darkMode? "Dark":"Light"} Theme</Button>
        </div>
          <div onLoad={loaderFn}>
            <Particle />
            <div className="container app">
              <div className="row">
                <div className="col-lg-3 col-11 mx-1 app_sidebar">
                  <Sidebar />
                </div>
                <div className="col-lg-8 col-11 mx-2 app_main scroll">
                  <Navbar className="d-flex"/>
                  <Route exact path="/"> <About /> </Route>
                  <Route exact path="/about"><About /></Route>
                  <Route exact path="/resume"> <Resume /> </Route>
                  <Route exact path="/education"> <Education /> </Route>
                  <Route exact path="/projects"><Projects /> </Route>
                  <Route exact path="/experience"><Experience /> </Route>
                </div>
            </div>
          </div>
        </div>

      </BrowserRouter>
    ]
  )
}

export default App