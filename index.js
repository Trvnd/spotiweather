
// const locationUrl = ('https://metaweather.com/api/location/(woeid)/')

// const dateUrl = ('https://metaweather.com/api/location/(woeid)/(date)/')



/*document.addEventListener('DOMContentLoaded', () => {
    fetch(`https://metaweather.com/api/location/search/?query=${city}`)
        .then(res => res.json())
        .then(data => data(json))
})
*/

/*function fetchLocation(woeid) {
    fetch('https//metaweather.com/api/location/(woeid)/${woeid}')
        .then(data => {
            console.log(data)
            return data.json()
        })
        .then(result => {
            const today = result.consolidated_weather[0]
            console.log(`temperature in ${result.title} will stay between ${today.min_temp} and ${today.max_temp}`)
        })
}*/

/*function fetchSearch() {
    fetch(searchUrl)
        .then(res => res.json())
        .then(searchObj => search(searchObj))
}
*/
document.addEventListener("DOMContentLoaded", function () {

    const weatherState = document.createElement('li')
    const currentTemp = document.createElement('li')
    const minTemp = document.createElement('li')
    const maxTemp = document.createElement('li')
    const weatherInfo = document.getElementById('weather-list')
    const img = document.getElementById('img')

    const searchBar = document.getElementById('searchbar');
    searchBar.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log('hello')
        const city = searchBar.children.search.value
        fetch(`https://www.metaweather.com/api/location/search/?query=${city}`, {
            headers: {
                "Access-Control-Allow-Headers": "*"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log('test')
                const cityData = data[0]
                if (cityData) {
                    const woeId = cityData.woeid
                    console.log(cityData)
                    fetch(`https://www.metaweather.com/api/location/${woeId}/`, {
                        headers: {
                            "Access-Control-Allow-Headers": "*"
                        }
                    })
                        .then(res => res.json())
                        .then(data => weather(data))
                })

        function weather(data) {
            weatherState.textContent = data.consolidated_weather[0].weather_state_name
            currentTemp.textContent = Math.floor(data.consolidated_weather[0].the_temp)
            minTemp.textContent = Math.floor(data.consolidated_weather[0].min_temp)
            maxTemp.textContent = Math.floor(data.consolidated_weather[0].max_temp)

            weatherInfo.append(weatherState)

            //weatherInfo.append(currentTemp)
            //weatherInfo.append(minTemp)
            //weatherInfo.append(maxTemp)


            let currentC = currentTemp.textContent
            let currentF = currentC * 9 / 5 + 32;
            weatherInfo.append(currentF)

            /*let createMC = document.createElement('p')
            
            let maxC = minTemp.textContent
            let maxF = maxC * 9 / 5 + 32;
            weatherInfo.append(maxF)
 
            let minC = minTemp.textContent
            let minF = minC * 9 / 5 + 32;
            weatherInfo.append(minF)*/

            weatherInfo.append(img)
            if (weatherState.textContent === 'Clear') {
                img.src = 'http://openweathermap.org/img/wn/01d@2x.png'
            } if (weatherState.textContent === 'Light Cloud') {
                img.src = 'http://openweathermap.org/img/wn/02d@2x.png'
            } if (weatherState.textContent === 'Heavy Cloud') {
                img.src = 'http://openweathermap.org/img/wn/03d@2x.png'
            } if (weatherState.textContent === 'Showers') {
                img.src = 'http://openweathermap.org/img/wn/09d@2x.png'
            } if (weatherState.textContent === 'Light Rain') {
                img.src = 'http://openweathermap.org/img/wn/04d@2x.png'
            } if (weatherState.textContent === 'Heavy Rain') {
                img.src = 'http://openweathermap.org/img/wn/09d@2x.png'
            } if (weatherState.textContent === 'Thunderstorm') {
                img.src = 'http://openweathermap.org/img/wn/11d@2x.png'
            } if (weatherState.textContent === 'Hail') {
                img.src = 'http://openweathermap.org/img/wn/13d@2x.png'
            } if (weatherState.textContent === 'Sleet') {
                img.src = 'http://openweathermap.org/img/wn/13d@2x.png'
            } if (weatherState.textContent === 'Snow') {
                img.src = 'http://openweathermap.org/img/wn/13d@2x.png'
            }

            weatherInfo.append(img)
        }
    }
        }
    })
<<<<<<< HEAD





=======
        .then(res => res.json())
        .then(data => {
            console.log('test')
            const cityData = data[0]
            if (cityData) {
                const woeId = cityData.woeid
                console.log(cityData)
                fetch(`https://www.metaweather.com/api/location/${woeId}/`, {
                    headers: {
                        "Access-Control-Allow-Headers": "*"
                    }
                })
                    .then(res => res.json())
                    .then(data => weather(data))
                    searchBar.reset();
            }

            function weather(data) {
                weatherState.textContent = data.consolidated_weather[0].weather_state_name
                currentTemp.textContent = Math.floor(data.consolidated_weather[0].the_temp)
                minTemp.textContent = Math.floor(data.consolidated_weather[0].min_temp)
                maxTemp.textContent = Math.floor(data.consolidated_weather[0].max_temp) 

                weatherInfo.append(city)
                weatherInfo.append(weatherState)

                let currentC = currentTemp.textContent
                let currentF = Math.floor(currentC * 9 / 5 + 32);
                weatherInfo.append(`${currentF} °F`)
                
                /*let maxC = minTemp.textContent
                let maxF = Math.floor(maxC * 9 / 5 + 32);
                weatherInfo.append(maxF)

                let minC = minTemp.textContent
                let minF = Math.floor(minC * 9 / 5 + 32);
                weatherInfo.append(minF)*/

                weatherInfo.append(img)
                if (weatherState.textContent === 'Clear') {
                    img.src = 'http://openweathermap.org/img/wn/01d@2x.png'
                } if (weatherState.textContent === 'Light Cloud') {
                    img.src = 'http://openweathermap.org/img/wn/02d@2x.png'
                } if (weatherState.textContent === 'Heavy Cloud') {
                    img.src = 'http://openweathermap.org/img/wn/03d@2x.png'
                } if (weatherState.textContent === 'Showers') {
                    img.src = 'http://openweathermap.org/img/wn/09d@2x.png'
                } if (weatherState.textContent === 'Light Rain') {
                    img.src = 'http://openweathermap.org/img/wn/04d@2x.png'
                } if (weatherState.textContent === 'Heavy Rain') {
                    img.src = 'http://openweathermap.org/img/wn/09d@2x.png'
                } if (weatherState.textContent === 'Thunderstorm') {
                    img.src = 'http://openweathermap.org/img/wn/11d@2x.png'
                } if (weatherState.textContent === 'Hail') {
                    img.src = 'http://openweathermap.org/img/wn/13d@2x.png'
                } if (weatherState.textContent === 'Sleet') {
                    img.src = 'http://openweathermap.org/img/wn/13d@2x.png'
                } if (weatherState.textContent === 'Snow') {
                    img.src = 'http://openweathermap.org/img/wn/13d@2x.png'
                }

                weatherInfo.append(img)

            }
        })
    })
})
>>>>>>> d8dfd8cc6456666cb9b71421c1afeaa3729940c5
