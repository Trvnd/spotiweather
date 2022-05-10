
// const searchUrl = ('https://metaweather.com/api/location/search/?query=(query)')

// const locationUrl = ('https://metaweather.com/api/location/(woeid)/')

// const dateUrl = ('https://metaweather.com/api/location/(woeid)/(date)/')

// Meta Weather

searchBar.addEventListener('submit', (e) => {
    e.preventDefault()
    // get user input text
    const city = searchBar.children.inputBox.value
    // string interpolate to the city query url
    fetch(`/api/weather/search?query=${city}`)
        .then(resp => resp.json())
        .then(data => {
            // keep it simple, get the first object
            const cityData = data[0]
            // make sure you get some data
            if (cityData) {
                // grab woeId from the object
                const woeId = cityData.woeId
                // run woeid fetch to get the real data
                fetch(`/api/weather/woeId=${woeId}`)
                    .then(resp => resp.json())
                    // do something with this data
                    .then(data => renderWeather(data))
            }
        })
})




/*const searchUrl = ('https://metaweather.com/api/location/search/?query=(query)');
const dateUrl = ('https://metaweather.com/api/location/(woeid)/(date)/');
    
    function fetchSearch(){
        fetch(searchUrl)
        .then(response => response.json())
        .then(searchObj => search(searchObj))
    }

    const searchbar = document.getElementById('searchbar');
    searchbar.addEventListener('keyup', search => {
        const searchString = e.target.value
    });

    function search(searchObj){

    }

    function fetchLocation(woeid){
        fetch(`https://metaweather.com/api/location/(woeid)/${woeid}`)
        .then(data => {
            console.log(data)
            return data.json()
        })
        .then (result => {
            const today = result.consolidated_weather[0]
            console.log(`temperature in ${result.title} will stay between ${today.min_temp} and ${today.max_temp}`)
        })
        .catch(error => console.log(error))
    }

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
    //     const city = searchBar.children.search.value
    //     fetch(`https//metaweather.com/api/location/search/?query=${city}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             const cityData = data[0]
    //             if (cityData) {
    //                 const woeId = cityData.woeId
    //                 fetch(`https//metaweather.com/api/loation/search/?woeId=${woeId}`)
    //                     .then(res => res.json())
    //                     .then(data => weather(data))
    //             }
    //         })
})


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
    //     const city = searchBar.children.search.value
    //     fetch(`https//metaweather.com/api/location/search/?query=${city}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             const cityData = data[0]
    //             if (cityData) {
    //                 const woeId = cityData.woeId
    //                 fetch(`https//metaweather.com/api/loation/search/?woeId=${woeId}`)
    //                     .then(res => res.json())
    //                     .then(data => weather(data))
    //             }
    //         })
})