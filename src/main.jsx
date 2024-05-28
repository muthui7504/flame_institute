import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Couples from './Pages/Couples/Couples.jsx'
import Ladies from './Pages/Ladies/Ladies.jsx'
import Courses from './Pages/Courses/Courses.jsx'
import Ministry from './Pages/Ministry/Ministry.jsx'
import LAP from './Pages/LAP/LAP.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Conts from './Components/Routes/Conts.jsx'
import Progs from './Components/Routes/Progs.jsx'
import Abou from './Components/Routes/Abou.jsx'
import Tim from './Components/Routes/Tim.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/",
    element: <App/>
  },
  {
    path: "about",
    element: <Abou/>
  },
  {
    path: "programs",
    element: <Progs/>
  },
  {
    path: "team",
    element: <Tim/>
  },
  {
    path: "ministry",
    element: <Ministry/>,
    
  },
  {
    path: "couples",
    element: <Couples/>
  },
  {
    path: "ladies",
    element: <Ladies/>
  },
  {
    path: "Courses",
    element: <Courses/>
  },
  {
    path: "contacts",
    element: <Conts/>
  },
  {
    path: "lap",
    element: <LAP/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router ={router}/>
)