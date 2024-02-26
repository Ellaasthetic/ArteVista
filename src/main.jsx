import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import "./index.css";
import NavBar from './components/NavBar';
import Exhibition from './components/Exhibition';
import Reservation from './components/Reservation';
import Location from './components/Location';
import NotFoundPage from './components/NotFoundPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <NotFoundPage />
  },
  {
    path: "exhibition",
    element: <Exhibition />
  },
  {
    path: "reservation",
    element: <Reservation />
  },
  {
    path: "location",
    element: <Location />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
