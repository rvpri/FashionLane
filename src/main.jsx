import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux'
import store from "./Store.js"
import { router } from './router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
        <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
