import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import "./index.css";
import Exhibition from './pages/Exhibition';
import Reservation from './pages/Reservation';
import Location from './pages/Location';
import NotFoundPage from './pages/NotFoundPage';



export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Exhibition />,
      errorElement: <NotFoundPage />
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
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}
