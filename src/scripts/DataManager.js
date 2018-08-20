const getPlaces = () => {
    return fetch("http://localhost:8088/places")
        .then(response => response.json())
}

const deletePlace = (placeID) => {
    return fetch(`http://localhost:8088/places/${placeID}`, {
        method: "DELETE"
    })
        .then(response => response.json())
}

const savePlace = (place) => {
    return fetch("http://localhost:8088/places", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(place)
    })
        .then(response => response.json())
}

module.exports = { getPlaces, deletePlace, savePlace }