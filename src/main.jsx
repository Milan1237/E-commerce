import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Prouduct from './pages/Prouduct.jsx'
import {Provider} from 'react-redux'
import store from './store/Store.js'
import Cart from './pages/Cart.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/products',
        element: <Prouduct />
      } , 
      
    ],

  },
  
    
  
] ,  {
  future: {
    v7_fetcherPersist: true,
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
