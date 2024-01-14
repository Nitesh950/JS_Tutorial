    const API_KEY = "da62c34d46001e0bd5745e19890c9db5";
    const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
    const UNITS = "metric";



let searchButton = document.querySelector("#search-button");
let input = document.querySelector("#search-input");


searchButton.addEventListener("click", getWeatherData);
input.addEventListener("keyup", (event) => {
    if(event.key == "Enter"){
        getWeatherData();
    }
})
let url = "";
async function getWeatherData(){
    let cityName = input.value;
    if(cityName !== ""){
         url = `${BASE_URL}${cityName}&units=${UNITS}&appid=${API_KEY}`;
    }else{
         url = `${BASE_URL}jaipur&units=${UNITS}&appid=${API_KEY}`;
    }
        try{
            let response = await fetch(url);
            let data = await response.json();
            const {name} = data;
            const {icon, main} = data.weather[0];
            const {temp, humidity} = data.main;
            const {speed} = data.wind;

            render(name, icon, main, temp, humidity, speed);
        }catch(err){
            console.log(err);
        }
    
}

function render(name, icon, main, temp, humidity, speed){
    let cityName = document.querySelector(".city");
    cityName.innerText = `Weather in ${name}`;

    let temperature = document.querySelector(".degree h1");
    temperature.innerText = `${temp}°C`

    let desc = document.querySelector(".description");
    desc.innerText =  main;

    let iconImage = desc.parentElement.querySelector("img");
    iconImage.src=`https://openweathermap.org/img/wn/${icon}.png`;

    let humid = document.querySelector(".humidity");
    humid.innerText =  `Humidity : ${humidity}%`;

    let wind = document.querySelector(".wind");
    wind.innerText = `Wind Speed : ${speed} km/hr`;

    let weatherBox = document.querySelector(".weather");
    weatherBox.classList.remove("loading");
}

getWeatherData();