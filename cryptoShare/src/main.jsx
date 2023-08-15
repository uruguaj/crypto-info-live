import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
    redirect,
    Link,
} from "react-router-dom";

import App from './App.jsx'
import './index.css'
import Coin from "./coin/coin.jsx";

const router = createBrowserRouter([
    {
        path:'/',
        errorElement:
            <div className="button-container">
                <Link to="/">
                    <button className="my-button">Page Not Found. Go back home.</button>
                </Link>
            </div>,

        element:<App/>,
    },
    {
        path:'/coin/:id',
        element: <Coin/>
    }
    ])

function CryptoShare (){

    return (
        <RouterProvider router={router}/>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CryptoShare/>
  </React.StrictMode>,
)