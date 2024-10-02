
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': apiKey,
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

const getWeather = (city) => {
    cityName.innerHTML = city
    url = 'https://weatherapi-com.p.rapidapi.com/current.json?q='+ city
    fetch(url,options)
    .then(response => response.json())
    .then(data => {
        cloud.innerHTML = data.current.cloud
        feelslike_c.innerHTML = data.current.feelslike_c
        temp_c.innerHTML = data.current.temp_c
        localtime.innerHTML = data.location.localtime
        wind_kph.innerHTML = data.current.wind_kph
        humidity.innerHTML = data.current.humidity
        text.innerHTML = data.current.condition.text

        console.log(data)})
    .catch(error => console.log(error));
}

const refreshWeather1 = () => {
    fetch(url,options)
    .then (response => response.json())
    .then(data => {
        cloud.innerHTML = data.current.cloud
        feelslike_c.innerHTML = data.current.feelslike_c
        temp_c.innerHTML = data.current.temp_c
    })
}

const refreshWeather3 = () => {
    fetch(url,options)
    .then (response => response.json())
    .then(data => {
        wind_kph.innerHTML = data.current.wind_kph
        humidity.innerHTML = data.current.humidity
    })
}

const refreshWeather2 = () => {
    fetch(url,options)
    .then (response => response.json())
    .then(data => {
        localtime.innerHTML = data.location.localtime
        text.innerHTML = data.current.condition.text

    })
}
  
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather('Davangere')