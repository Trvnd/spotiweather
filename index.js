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