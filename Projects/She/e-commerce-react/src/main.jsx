import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Bag from "./routes/Bag.jsx"
import Home from "./routes/HomePage.jsx"
import {Provider} from "react-redux" 
import myntraStore from './store/index.js'
import Period from './components/Period.jsx'
import './Period.css'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/",element:<Home />},
      {
        path:"/bag",
        element:<Bag/>
      },
      {
        path:"/calc",
        element:<Period/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
   <RouterProvider router={router}/>
   </Provider>
  </React.StrictMode>,
)
