 import {Link, useParams} from "react-router-dom";
import './coin.css'
import {useEffect, useState} from "react";
import axios from "axios";
 import Background from "../background/background.jsx";
 import useFetchCoins from "../hooks/UseFetchCoins.jsx";

const Coin = () => {

	const { id } = useParams();
	const coinData = useFetchCoins(id);

    if (coinData){
        return(

            <div className='single-coin-page'>
            <Background/>
                <h1>You selected : <span className='coin-name'>{coinData.name}</span> </h1>
                <img src={coinData.image.large} alt='coin'/>
                <h2 className='coinInfo'>Symbol : {coinData.symbol.toUpperCase()}</h2>
                <h2 className='coinInfo'>Current price : {coinData.market_data.current_price.usd} $</h2>
                <h2 className='coinInfo'>24 hours high : {coinData.market_data.high_24h.usd} $ </h2>
                <h2 className='coinInfo'>24 hours low : {coinData.market_data.low_24h.usd} $</h2>
                <Link to="/">
                    <button className="single-coin-page-route-button">Back to Home!</button>
                </Link>
            </div>


        )
    } else {
        return (
            <div className='loading'>
                <Background/>
                <h1> Loading ... </h1>
                <h3>Please wait!</h3>
                <span>Are you here long? </span>
                <Link to="/">
                    <button className="single-coin-page-route-button">Back to Home!</button>
                </Link>
            </div>

            )

    }


}

export default Coin