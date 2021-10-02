let mymap = L.map('map').setView([51.45564284396053, -2.5885233624922743], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY3liZXJ3b21iYXQiLCJhIjoiY2t1N2hsMHJvMHJxbDJ5cGF4YzRlMmlvMiJ9.g9RBKwBgBC78nWOWb0YkEg'
}).addTo(mymap);

async function getIpGeolocation() {
    let data = await fetch('https://geo.ipify.org/api/v1?apiKey=at_ja6PEtd9151gqzbREsvcDw4NV7JQr');
    let jsonData = await data.json();

    console.log(jsonData)
}

getIpGeolocation()

document.querySelector('.searchButton').addEventListener('click', () => {

})