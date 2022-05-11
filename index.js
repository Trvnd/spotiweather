// const searchUrl = ('https://metaweather.com/api/location/search/?query=(query)')

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

document.addEventListener('DOMContentLoaded', () => {



    const weatherState = document.createElement('h3')
    const currentTemp = document.createElement('h4')
    const weatherInfo = document.getElementById('weather-info')
    const searchBar = document.getElementById('searchbar');
    const minTemp = document.createElement('p')
    const maxTemp = document.createElement('p')


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

                }
            })
    })



    function weather(data) {
        weatherState.textContent = data.consolidated_weather[0].weather_state_name
        currentTemp.textContent = Math.floor(data.consolidated_weather[0].the_temp)
        minTemp.textContent = Math.floor(data.consolidated_weather[0].min_temp)
        maxTemp.textContent = Math.floor(data.consolidated_weather[0].max_temp)

        // let currentC = currentTemp.textContent
        // let dayMin = minTemp.textContent
        // let dayMax = maxTemp.textContent

        // let far1 = currentC * 9 / 5 + 32;
        // let far2 = dayMin * 9 / 5 + 32;
        // let far3 = dayMax * 9 / 5 + 32;

        weatherInfo.append(weatherState)
        weatherInfo.append((currentTemp * 9 / 5 + 32))
        weatherInfo.append(minTemp)
        weatherInfo.append(maxTemp)
        // weatherInfo.append(far1)
        // weatherInfo.append(far2)
        // weatherInfo.append(far3)
    }

})


