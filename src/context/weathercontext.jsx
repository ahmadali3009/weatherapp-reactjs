import React, { createContext, useContext, useState } from "react";
import { featchweatherdata , featchweatherdataofuserlocation  } from "../api/weatherapi";
const Weathercontext = createContext(null)
export const useWeather = () => {
    return useContext(Weathercontext)
}

export const WeatherProvider = (props) => {
    const [data, setdata] = useState(null)
    const [searchcity, setsearchcity] = useState(null)

    const fetchdata = async () => {
        const response = await featchweatherdata(searchcity)
        console.log("response",response)
        setdata(response)
    }
    const fetchdatacurrentuser = async () => {
        navigator.geolocation.getCurrentPosition((showPosition)=>
        {featchweatherdataofuserlocation(showPosition.coords.latitude , showPosition.coords.longitude ).then((data) => setdata(data))})
       
    }


    return (
        <Weathercontext.Provider value={{ searchcity, data, setsearchcity, fetchdata , setdata ,fetchdatacurrentuser }}>
            {props.children}
        </Weathercontext.Provider>
    )
}

