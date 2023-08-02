const apiKey="809c112d303123ca88ecf692bca36c98";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search img");
const weatherIcon=document.querySelector(".weatherIcon");
async function checkWeather(city){
    const apiURL=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`;
    const response=await fetch(apiURL+ `&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.floor(data.main.temp) + "° C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
    if (data.weather[0].main=="Clouds"){
        weatherIcon.src="weather-app-img/images/clouds.png"
    }else if(data.weather[0].main=="Clear"){
        weatherIcon.src="weather-app-img/images/clear.png"
    }else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="weather-app-img/images/drizzle.png"
    }else if(data.weather[0].main=="Rain"){
        weatherIcon.src="weather-app-img/images/rain.png"
    }else if(data.weather[0].main=="Snow"){
        weatherIcon.src="weather-app-img/images/snow.png"
    }
    document.querySelector(".weather").style.display="block";
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})
checkWeather();