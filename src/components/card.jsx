import React, { useEffect } from "react";
import {useWeather} from "../context/weathercontext"
import "../components/cardstyle.css"
import Button from "./button";
const Card = ()=>{
    const weathercontext = useWeather()
    // useEffect(()=>{
    //     // weathercontext.fetchdatacurrentuser()
    //     // weathercontext.setsearchcity(e.target.value)
    //   },[weathercontext.setsearchcity(null)])


    return(
        <>
        <div className="card">
            <input className="field" value={weathercontext.searchcity || ''} onChange={(e)=>{weathercontext.setsearchcity(e.target.value)}}></input>
            <Button  onClick={weathercontext.fetchdata} value= {"Search"}/>
            <br />
            <img src={weathercontext?.data?.current?.condition?.icon}></img>
            <h3>{weathercontext.data?.current?.temp_c} </h3>
            <h4>{weathercontext.data?.location?.country}--Region{weathercontext.data?.location?.region},{weathercontext.data?.location?.name}</h4>
            
        </div>
        </>
    )
}

export default Card