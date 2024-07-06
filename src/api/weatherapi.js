const weatherkey = "https://api.weatherapi.com/v1/current.json?key=adbeb9c5f642473da50181611242903"

export const  featchweatherdata = async (city)=>
{
    const response = await fetch(`${weatherkey}&q=${city}&aqi=yes}`)
    return response.json();
}

export const  featchweatherdataofuserlocation = async (lat , lon)=>
{
    const response = await fetch(`${weatherkey}&q=${lat},${lon}&aqi=yes}`)
    return response.json();
}