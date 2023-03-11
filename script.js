const apiKey = "edcb2b265fbaa6f34b817a1975da4208";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}&units=metric`

async function checkWeather(){
    const response = await fetch(apiUrl)
    var data = await response.json
    console.log(data)
}

checkWeather();