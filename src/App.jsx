import './App.css'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import {conf} from './config/conf.js'
function App() {
  return (
    <>
      <Navbar />
      <div className=' flex flex-wrap gap-4  top-[4rem] relative'>
        <Outlet />
      </div>
      
    </>
  )
}

export default App
