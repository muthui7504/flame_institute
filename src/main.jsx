import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Couples from './Pages/Couples/Couples.jsx'
import Ladies from './Pages/Ladies/Ladies.jsx'
import Courses from './Pages/Courses/Courses.jsx'
import Ministry from './Pages/Ministry/Ministry.jsx'
import About from './Components/About/About.jsx'
import LAP from './Pages/LAP/LAP.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Conts from './Components/Routes/Conts.jsx'
import Progs from './Components/Routes/Progs.jsx'
import Abou from './Components/Routes/Abou.jsx'
import Tim from './Components/Routes/Tim.jsx'
import Rev from './Components/Director/Rev.jsx'
import Packages from './Pages/Computer/packages.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "about",
    element: <About/>
  },
  {
    path: "abou",
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
  {
    path: "Rev",
    element: <Rev/>
  },
  {
    path: "packages",
    element: <Packages/>
  },
  {
    path: "*",
    element: <App/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router ={router}/>
)
