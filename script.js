const apiKey = "ab5c949edfc4479fb20172342251103";  // 

function getWeather() {
    const city = document.getElementById("city-input").value || "Karachi";  
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.location) {  
                document.getElementById("location").textContent = data.location.name + ", " + data.location.country;
                document.getElementById("temperature").textContent = data.current.temp_c + "°C";
                document.getElementById("description").textContent = data.current.condition.text;
                document.getElementById("wind").textContent = data.current.wind_kph + " km/h";
                document.getElementById("humidity").textContent = data.current.humidity + "%";

               
                document.getElementById("weather-icon").src = `https:${data.current.condition.icon}`;
            } else {
                document.getElementById("location").textContent = "City not found!";
            }
        })
        .catch(error => {
            console.log("Error fetching weather data:", error);
        });
}


getWeather();
