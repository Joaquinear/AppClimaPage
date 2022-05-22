
const Api_KeyWeather = "1fd7f629e337342e9dba8d26de8108f8";

const fetchdata= position=>{
    const {latitude,longitude} = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${Api_KeyWeather}&units=metric`)
    .then(Response => Response.json())
    .then(data => setWeatherData(data));
    //console.log(position);
}

const setWeatherData = data =>{
    console.log(data);
    const weatherData ={
        location: data.name,
        decription: data.weather[0].main,
        humidity: data.main.humidity,
        pressure:data.main.pressure,
        temperature: data.main.temp,
        tempMax: data.main.temp_max,
        tempMin: data.main.temp_min,
        date:getDate(),
    }
    Object.keys(weatherData).forEach(key =>{
        document.getElementById(key).textContent = weatherData[key]
    })
}

const getDate = () =>{
    let date = new Date();
    return `${date.getDate()}-${("0"+(date.getMonth()+1)).slice(-2)}-${date.getFullYear()}`;
}

const onload = () =>{
    navigator.geolocation.getCurrentPosition(fetchdata);
}