'use strict'

const getPuzzle = (wordCount, callback) => {
    
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined)
        }
    })

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
}

const getCountry = (countryCode, callback) => {
    const request = new XMLHttpRequest()
    request.open('GET', 'http://restcountries.eu/rest/v2/all')
    request.send()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find(country => country.alpha2Code === countryCode)
            callback(undefined, country.name)
        } else if (e.target.readyState === 4) {
            callback('An error has taken place')
        }
    })
}