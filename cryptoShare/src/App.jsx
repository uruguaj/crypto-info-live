import * as React from 'react';
import './App.css';
import {Link, Navigate, useNavigate} from "react-router-dom";
import {useRef, useState} from "react";
import axios from "axios";

function App() {

    const search = useRef(null)
    const navigate = useNavigate()
    const handeChange = (e) => {
            const coinSearch  = search.current.value.toLowerCase().trim().replace(/\s+/g, "-");

                axios.get(`https://api.coingecko.com/api/v3/coins/${coinSearch}`)
                    .then(() => {
                        navigate(`/coin/${coinSearch}`)
                    })
                    .catch((e)=>{
                        alert("This coin does not exist!")
                        return null;
                    })

    }

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


            <div className='crypto-search-div'>
                <h3>Something Else? Search IT UP!</h3>

                <input ref={search}/>
                    <button type="submit" onClick={handeChange} className='submit-button'>Search!</button>


            </div>


            <div className='footer'>
                <h2>Made With ❤️ By <a href='https://uruguaj.com' target='_blank' style={{color:"white"}}>Uruguaj</a> </h2>
            </div>


        </div>

    );

}

export default App;
