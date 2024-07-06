import React, { useEffect } from 'react' ;
import './App.css'
import {useWeather} from "./context/weathercontext"
import Card from './components/card';
import Button from './components/button';

function App(props) {
  const weathercontext = useWeather()
  
  let handlerefresh = ()=>{
    weathercontext.fetchdatacurrentuser();
    weathercontext.setsearchcity(null)

  }
    useEffect(()=>{
    weathercontext.fetchdatacurrentuser()
  },[])
  return (
    
    <div >
    <h1> Weather App </h1>
    <Card />
    <Button onClick={handlerefresh} value={"Refresh"} />
    </div>
    
  )
}

export default App
