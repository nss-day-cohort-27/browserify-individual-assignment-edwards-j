const DataManager = require("./DataManager")
const placeList = require("./placeList")

const placeForm = () => {
    const placeForm = document.querySelector("#placeForm")

    placeForm.innerHTML = `
    <fieldset>
    <legend>New Place</legend>
    <label for="newPlaceName"></label>
    <input type="text" id="newPlaceName" placeholder="Place Name"></input><br>

    <label for="newPlaceLocation"></label>
    <input type="text" id="newPlaceLocation" placeholder="Location"></input><br>

    <label for="newPlaceType"></label>
    <input type="text" id="newPlaceType" placeholder="Type"></input><br>

    <label for="newPlaceDesc"></label>
    <input type="text" id="newPlaceDesc" placeholder="Description"></input><br>

    <button id="saveNewPlace">Add New Place</button>
    </fieldset>
    `

    document.querySelector("#saveNewPlace").addEventListener("click", () => {
        let newPlace = {
            name: document.querySelector("#newPlaceName").value,
            location: document.querySelector("#newPlaceLocation").value,
            type: document.querySelector("#newPlaceType").value,
            description: document.querySelector("#newPlaceDesc").value
        }

        DataManager.savePlace(newPlace)
            .then(() => placeList())
            .then(() => {
                document.querySelector("#newPlaceName").value = "";
                document.querySelector("#newPlaceLocation").value = "";
                document.querySelector("#newPlaceType").value = "";
                document.querySelector("#newPlaceDesc").value = "";
            })
    })
}
module.exports = placeForm