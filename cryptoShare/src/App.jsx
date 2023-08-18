import * as React from 'react';
import './App.css';
import {Link, useNavigate} from "react-router-dom";
import {useRef} from "react";
import { motion } from "framer-motion";

import axios from "axios";
import Background from "./background/background.jsx";

function App() {

    const search = useRef(null)
    const navigate = useNavigate()
    const handeChange = () => {
            const coinSearch  = search.current.value.toLowerCase().trim().replace(/\s+/g, "-");

                axios.get(`https://api.coingecko.com/api/v3/coins/${coinSearch}`)
                    .then(() => {
                        navigate(`/coin/${coinSearch}`)
                    })
                    .catch(()=>{
                        alert("This coin does not exist!")
                        return null;
                    })

    }


    return (
        <div className='home'>
            <Background
            />
            {/*<div className="lines">*/}
            {/*    <div className="line"></div>*/}
            {/*    <div className="line"></div>*/}
            {/*    <div className="line"></div>*/}
            {/*</div>*/}
            <h1>CryptoInfo <span className='href'>Live</span> </h1>
            <Link to="/coin/bitcoin">
                <img src='/btc.png' alt='btc' style={{zIndex:'999'}}/>
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

                    <motion.button whileHover={{scale: 1.1}} whileTap={{ scale: 0.8 }} type="submit" onClick={handeChange} className='submit-button'>Search!</motion.button>



            </div>


            <div className='footer'>
                <h2>Made With ❤️ By <a href='https://uruguaj.com' target='_blank' style={{color:"white"}}>Uruguaj</a> </h2>
            </div>



        </div>

    );

}

export default App;
