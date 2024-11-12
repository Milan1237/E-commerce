import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className=' flex flex-wrap gap-4 ml-[270px] top-[4rem] relative'>
        <Outlet />
      </div>
      
    </>
  )
}

export default App
