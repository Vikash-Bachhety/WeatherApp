let result = document.querySelector("#result");
let btn = document.querySelector("#btn");
let input = document.querySelector("#input");
const key = "063675c4f0109f566af805547baa87e5";

const getWeather = function () {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}&units=metric`;
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('City not found. Please enter a correct city name.');
        }
        return response.json();
    })
        .then(data => {
            console.log(data);
            let city = document.querySelector("#city_name");
            city.innerHTML = `<b>City:</b> ${(data.name)}`;

            let condition = document.querySelector("#condition");
            
            switch (data.weather[0].main) {
                case "Clear":
                    condition.src = "Images/clear.png";
                    condition.style.display = "block";
                    break;
                case "Clouds":
                    condition.src = "Images/cloudy.png";
                    condition.style.display = "block";
                    break;
                case "Rain":
                    condition.src = "Images/rainy.png";
                    condition.style.display = "block";
                    break;
                case "Fog":
                    condition.src = "Images/fog.png";
                    condition.style.display = "block";
                    break;
                default:
                    condition.src = "";
                    break;
            }
            let weather = document.querySelector("#weather")
            weather.innerHTML = `<b>Weather:</b> ${(data.weather[0].description)}`;
            let temp = document.querySelector("#temp");
            temp.innerHTML = `<b>Temperature:</b> ${(data.main.temp)} °C`;
            let humidity = document.querySelector("#humidity");
            humidity.innerHTML = `<b>Humidity:</b> ${(data.main.humidity)}`;
            let wind = document.querySelector("#wind");
            wind.innerHTML = `<b>Wind-Speed:</b> ${(data.wind.speed)}`;
        })
        .catch(error => {
            console.error('Error:', error.message);
            result.innerHTML = `<p>${error.message}</p>`;
        });
};

btn.addEventListener("click", getWeather);

btn.addEventListener("mouseenter", function() {
    btn.style.transform = "scale(1.04)";
});
btn.addEventListener("mouseleave", function() {
    btn.style.transform = "scale(1)";
});

