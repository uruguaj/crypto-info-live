import * as React from 'react'; // Make sure to import React
import './App.css';
import {Link} from "react-router-dom";

function App() {

    return (
        <div className='home'>
            <h1>CryptoInfo <span className='href'>Live</span> </h1>
            <Link to="/coin/bitcoin">
                <img src='/btc.png' alt='btc'/>
            </Link>
            <Link to="/coin/ethereum">
                <img src='/eth.png' alt='eth'/>
            </Link>
            <Link to="/coin/litecoin">
                <img src='/ltc.png' alt='ltc'/>
            </Link>

            <div className='footer'>
                <h2>Made With ❤️ By <a href='https://uruguaj.com' target='_blank' style={{color:"white"}}>Uruguaj</a> </h2>
            </div>


        </div>

    );

}

export default App;
