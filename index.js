const dataDiv = document.getElementById('data-div');
const input = document.getElementById('city-name')
const country = document.getElementById('country')
const city = document.getElementById('city-name').value
const temperature = document.getElementById('temperature')
const information = document.getElementById('information')
const wind = document.getElementById('wind-info')
const humidity = document.getElementById('humidity')
const feels_like = document.getElementById('feels_like')
const button = document.getElementById('search-button')
const apiKey = '43d5caaf1d5eaad15c4796f64b3ccee3'
const weatherIcon = document.getElementById('weather-icon')


function fetchData() {
    const city = document.getElementById('city-name').value
    if (city === '') {
        return alert('enter a valid city pls')
    }

    const apiKey = '43d5caaf1d5eaad15c4796f64b3ccee3'
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(API)
    .then(response => response.json())
    .then( data => {
        if (data.cod === 404) {
            alert('city not found')
            return
        }
        let iconId = data.weather[0].icon; // Declarada dentro de la función
        let iconUrl = `http://openweathermap.org/img/wn/${iconId}@2x.png`; // Declarada dentro de la función

       weatherIcon.innerHTML = `<img src="${iconUrl}" alt="Weather icon">`
        temperature.textContent = `${data.main.temp} °C`
        information.textContent = data.weather[0].main
        country.innerHTML = `Country: {data.sys.country}`
        feels_like.textContent = `Feels like: ${data.main.feels_like} °C`
        wind.innerHTML = `💨${data.wind.speed}km/h`
        humidity.innerHTML = `💧${data.main.humidity}%`
    }      )
    .catch(error => console.error(error))

}

button.addEventListener('click', fetchData)



button.addEventListener('click', function() {
    if (dataDiv.classList.contains('visible')) {
        dataDiv.classList.remove('visible');
        setTimeout(() => {
            dataDiv.style.display = 'none';
        }, 500);
    } else {
        dataDiv.style.display = 'block';
        setTimeout(() => {
            dataDiv.classList.add('visible');
        }, 10);
    }
});
