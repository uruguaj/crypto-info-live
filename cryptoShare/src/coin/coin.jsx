import {Link, useParams} from "react-router-dom";
import './coin.css'
import {useEffect, useState} from "react";
import axios from "axios";

const Coin = () => {

    const { id } = useParams()

    const [coinData, setCoinData] = useState(null)

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then((res) => {
                setCoinData(res.data);
            })
    }, []);

    if (coinData){
        return(

            <div className='single-coin-page'>
                <h1>Your Coin Is <span className='coin-name'>{id}</span> </h1>
                <img src={coinData.image.large} alt='coin'/>
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
            <>

                <h1> Loading ... </h1>
                <h2>Please wait!</h2>
            </>

            )

    }


}

export default Coin