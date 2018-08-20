const DataManager = require("./DataManager")
const placeHTML = require("./placeHTML")
const deletePlaces = require("./deletePlaces")

const placeList = () => {
    DataManager.getPlaces()
    .then((places) => {
        document.querySelector("#placeList").innerHTML = ""
        places.forEach(place => {
            document.querySelector("#placeList").innerHTML += placeHTML(place)
        })
    })
    .then(() => deletePlaces())
}

module.exports = placeList