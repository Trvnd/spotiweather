document.addEventListener("DOMContentLoaded", function () {

    const weatherInfo = document.getElementById('weather-list')
    const img = document.getElementById('img')
    const searchBar = document.getElementById('searchbar');
    const message = document.getElementById('title')
    const playListTitle = document.getElementById('playlist')

    searchBar.addEventListener('submit', (e) => {
        e.preventDefault()
        weatherInfo.innerHTML = ''
        //console.log('hello')

        const city = searchBar.children.search.value

        fetch(`https://www.metaweather.com/api/location/search/?query=${city}`, {
            headers: {
                "Access-Control-Allow-Headers": "*"
            }
        })
            .then(res => res.json())
            .then(data => {
                //console.log('test')
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

                    const weatherState = document.createElement('li')
                    const currentTemp = document.createElement('li')
                    // const minTemp = document.createElement('li')
                    // const maxTemp = document.createElement('li')
                    const windDirection = document.createElement('li')
                    const windSpeed = document.createElement('li')


                    weatherState.textContent = data.consolidated_weather[0].weather_state_name
                    currentTemp.textContent = Math.floor(data.consolidated_weather[0].the_temp)
                    //minTemp.textContent = Math.floor(data.consolidated_weather[0].min_temp)
                    //maxTemp.textContent = Math.floor(data.consolidated_weather[0].max_temp)
                    windDirection.textContent = data.consolidated_weather[0].wind_direction_compass
                    windSpeed.textContent = Math.floor(data.consolidated_weather[0].wind_speed)






                    weatherInfo.append(city)
                    weatherInfo.append(weatherState)
                    weatherInfo.append('Wind', windSpeed, 'mph')
                    weatherInfo.append(windDirection)

                    let currentC = currentTemp.textContent
                    let currentF = Math.floor(currentC * 9 / 5 + 32);
                    weatherInfo.append(`${currentF} °F`)
                    console.log(data)




                    /*let maxC = minTemp.textContent
    
                    let maxF = Math.floor(maxC * 9 / 5 + 32);
    
                    weatherInfo.append(maxF)
    
    
    
                    let minC = minTemp.textContent
    
                    let minF = Math.floor(minC * 9 / 5 + 32);
    
                    weatherInfo.append(minF)*/


                    if (weatherState.textContent === 'Clear') {
                        message.textContent = 'It\'s gawgeous today, get yurr butt outside!'
                    } if (weatherState.textContent === 'Light Cloud') {
                        message.textContent = 'Smol cloud, bring sunglasses and sunscreen outside!'
                    } if (weatherState.textContent === 'Heavy Cloud') {
                        message.textContent = 'Lots of cloud coverage, low visability at times'
                    } if (weatherState.textContent === 'Showers') {
                        message.textContent = 'Isolated showers, bring an umbrella just in case!'
                    } if (weatherState.textContent === 'Light Rain') {
                        message.textContent = 'Light rain on and off, free car wash, yay!'
                    } if (weatherState.textContent === 'Heavy Rain') {
                        message.textContent = 'Big fat rain, prep the boat!'
                    } if (weatherState.textContent === 'Thunderstorm') {
                        message.textContent = `Don\'t walk around outside with a long metal pole today, like you usually do. Thunderstorms likely!`
                    } if (weatherState.textContent === 'Hail') {
                        message.textContent = 'Best to grab the hardhat if you are going outside today, expect hail, along with thunderstorms.'
                    } if (weatherState.textContent === 'Sleet') {
                        message.textContent = 'Not quite rain, but not quite snow. Just some baby frozen ice fallilng from the sky today.'
                    } if (weatherState.textContent === 'Snow') {
                        message.textContent = 'Time to build a frosty, you\re getting snow today!'
                    }

                    playListTitle.append(message)

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

