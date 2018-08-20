const placeHTML = (place) => {
    return `
    <div id="place--${place.id}" class="place">
        <h3>${place.name}</h3>
        <p>Location: ${place.location}</p>
        <p>Type: ${place.type}<p>
        <p>Description: ${place.description}</p>
        <button id="deletePlace--${place.id}" class="deleteButton">Delete</button>
    </div>
    `
}

module.exports = placeHTML