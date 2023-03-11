const apiKey = "edcb2b265fbaa6f34b817a1975da4208";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){

    // API Url and GET HTTPS request
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    const response = await fetch(apiUrl);
    var data = await response.json();  
    // This conversion takes time due to lags in the fetch API
    // hence the surrounding code execution needs to be halted

    console.log(data)
    // Updating data - Should be converted to JSON
    document.querySelector(".city").innerHTML = data.name + "°C";
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp);
    document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

