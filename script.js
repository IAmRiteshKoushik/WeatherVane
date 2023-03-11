const apiKey = "edcb2b265fbaa6f34b817a1975da4208";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){

    // API Url and GET HTTPS request
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    const response = await fetch(apiUrl);

    // Check the response
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {

        var data = await response.json();  
        // This conversion takes time due to lags in the fetch API
        // hence the surrounding code execution needs to be halted
        
        console.log(data)
        // Updating data - Should be converted to JSON
        document.querySelector(".city").innerHTML = data.name + "°C";
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp);
        document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = 'images/clouds.png'
            // Chaning the image for different weather condition
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = 'images/clear.png'
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = 'images/rain.png'
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = 'images/drizzle.png'
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = 'images/mist.png'
        }
        // Updating display status
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

