const DataManager = require("./DataManager")

const deletePlaces = () => {
    document.querySelector("#placeList").addEventListener("click", (event) => {
        if (event.target.classList.contains("deleteButton")) {
            const id = parseInt(event.target.id.split("--")[1])
            DataManager.deletePlace(id)
            .then(() => event.target.parentNode.remove())
        }
    })
}

module.exports = deletePlaces