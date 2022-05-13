document.addEventListener("DOMContentLoaded", function () {

    let appTitle = document.getElementById('weather-title')
    appTitle.addEventListener("mouseover", function (event) {
        event.target.style.color = "Red";
        setTimeout(function () {
            event.target.style.color = "";
        }, 1000);
    }, false);


    let messageTitle = document.getElementById('title')
    messageTitle.addEventListener("mouseover", function (event) {
        event.target.style.color = "White";
        setTimeout(function () {
            event.target.style.color = "";
        }, 1500);
    }, false);

    const weatherInfo = document.getElementById('weather-info')
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

                    const weatherState = document.createElement('p')
                    const currentTemp = document.createElement('p')
                    const windDirection = document.createElement('p')
                    const windSpeed = document.createElement('p')


                    weatherState.textContent = data.consolidated_weather[0].weather_state_name
                    currentTemp.textContent = Math.floor(data.consolidated_weather[0].the_temp)
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

                    const spotifyPlaylist = document.getElementById('spotify')
                    const appendPlaylist = document.createElement('iframe')
                    //spotifyPlaylist.append(appendPlaylist)

                    if (weatherState.textContent === 'Clear') {
                        iframe.src = 'https://open.spotify.com/embed/playlist/0nXXUlBpqAW9sJngHEiNyW?utm_source=generator'
                    } if (weatherState.textContent === 'Light Cloud') {
                        iframe.src = 'https://open.spotify.com/embed/playlist/47QIUxFQ4H2saQM4coW9f1?utm_source=generator'
                    } if (weatherState.textContent === 'Heavy Cloud') {
                        iframe.src = 'https://open.spotify.com/embed/playlist/0TVjIW7fylya3umvXxW3aS?utm_source=generator'
                    } if (weatherState.textContent === 'Showers') {
                        iframe.src = 'https://open.spotify.com/embed/playlist/37i9dQZF1DX8eMyhtzAuvp?utm_source=generator'
                    } if (weatherState.textContent === 'Light Rain') {
                        iframe.src = 'https://open.spotify.com/embed/playlist/5Dq7gvImBvVo4Rv44NjEaw?utm_source=generator'
                    } if (weatherState.textContent === 'Heavy Rain') {
                        iframe.src = 'https://open.spotify.com/embed/playlist/4ib6u6HEQQiqmYucL2S1NH?utm_source=generator'
                    } if (weatherState.textContent === 'Thunderstorm') {
                        iframe.src = 'https://open.spotify.com/embed/playlist/1YcQa9V8QFIN3ylJJhDAEt?utm_source=generator'
                    } if (weatherState.textContent === 'Hail') {
                        iframe.src = 'https://open.spotify.com/embed/playlist/2s5QADqGWjawJqrQcsLAlF?utm_source=generator'
                    } if (weatherState.textContent === 'Sleet') {
                        iframe.src = 'https://open.spotify.com/embed/playlist/7fB5IlW6yBeS0SQUNIkepd?utm_source=generator'
                    } if (weatherState.textContent === 'Snow') {
                        iframe.src = 'https://open.spotify.com/embed/playlist/1vN04X0T4mnzp6Tgl7Irxd?utm_source=generator'

                    }

                    console.log(spotifyPlaylist.append(appendPlaylist))

                

                }

            })

    })

})
