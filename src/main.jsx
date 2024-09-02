import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Home.jsx"
import Cart from './Cart.jsx'
import { Provider } from 'react-redux'
import store from "./Store.js"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/cart",
    element: <Cart/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
        <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
