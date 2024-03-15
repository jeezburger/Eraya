import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import Home from './pages/home';
import Events from './pages/events';

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <div className=' p-5 pt-5'>
            <div id='buttons' className='text-cyan-100 flex justify-between w-full -z-20'>

              <div className='flex  w-1/3 justify-evenly'>
                <NavLink to="events">Events</NavLink>
                {/* <a href='#'>Tickets</a> */}
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='events' element={<Events />} />
        </Routes>
      </main>
    </BrowserRouter>


    // <div className='Hero '>
    //   < div className='' >
    //     <div className=' p-4 pt-5'>
    //       <div id='buttons' className='text-gray-500 flex justify-between w-full -z-20'>


    //         <Router>
    //           <div className='flex  w-1/3 justify-evenly fixed'>
    //             <Routes>
    //               <Route exact path="/xyz" element={<xyz />} />
    //             </Routes>
    //           </div>
    //         </Router>
    //       </div>
    //     </div>
    //   </div>
    //   <div className='object-bottom'>

    //   </div>

    //   <div className='h-screen'></div>
    //   <div className='h-screen flex items-center z-10 bg-blue-300 opacity-90 rounded-full rounded-b-lg'>
    //     <div className='flex w-full justify-center text-white'>
    //       about us here
    //     </div>
    //   </div>
    // </div >

  )
}

export default App



//  <Link to="src/components/events.jsx">events</Link>
{/* <a href='' to="">buy tickets</a> */ }