let mymap = L.map('map').setView([51.45564284396053, -2.5885233624922743], 13);
L.marker([51.45564284396053, -2.5885233624922743]).addTo(mymap);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY3liZXJ3b21iYXQiLCJhIjoiY2t1N2hsMHJvMHJxbDJ5cGF4YzRlMmlvMiJ9.g9RBKwBgBC78nWOWb0YkEg'
}).addTo(mymap);

console.log(mymap)

document.querySelector('div.containerDetails').style.display = 'none'

document.querySelector('.searchButton').addEventListener('click', () => {
    let ipInput = document.querySelector('input.searchInput').value
    fetch('https://geo.ipify.org/api/v1?apiKey=at_ja6PEtd9151gqzbREsvcDw4NV7JQr&ipAddress=' + ipInput + '')
        .then(data => {
            return data.json()
        }).then(jsonData => {
            console.log(jsonData)
        document.querySelector('h2#ipAddress').textContent = jsonData.ip
        let postalCode = jsonData.location.postalCode
        if (postalCode === '') {
            document.querySelector('h2#location').textContent = jsonData.location.city + ', ' + jsonData.location.region + ' ' + jsonData.location.country
        } else {
            document.querySelector('h2#location').textContent = jsonData.location.city + ', ' + jsonData.location.region + ' ' + jsonData.location.postalCode
        }
        document.querySelector('h2#timezone').textContent = 'UTC ' + jsonData.location.timezone
        document.querySelector('h2#isp').textContent = jsonData.isp

        let newLat = jsonData.location.lat
        mymap._lastCenter.lat = newLat
        let newLng = jsonData.location.lng
        mymap._lastCenter.lng = newLng

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoiY3liZXJ3b21iYXQiLCJhIjoiY2t1N2hsMHJvMHJxbDJ5cGF4YzRlMmlvMiJ9.g9RBKwBgBC78nWOWb0YkEg'
        }).addTo(mymap);
    })
    document.querySelector('div.containerDetails').style.display = 'flex'
})