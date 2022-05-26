let latitude = 73.84496144985327 , longitude = 18.434489995784205

mapboxgl.accessToken = 'pk.eyJ1IjoieWFzaGJpdHUiLCJhIjoiY2wzYTVpdDl2MDJkbDNrbnJkdHRxdmY5YyJ9.NUyi1Hk5PSIo8EBXnjTCKQ'

var map = new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/satellite-streets-v11',
    zoom:16
})

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
)

var image1 = document.querySelector("#INDIAGATE")
var marker1= new mapboxgl.Marker({
    element:image1
}).setLngLat([77.22967063010981,28.613081516693292]).addTo(map)


var image2 = document.querySelector("#TAJMAHAL")
var marker2= new mapboxgl.Marker({
    element:image2
}).setLngLat([ 77.1942865820362,28.64765724022653]).addTo(map)


var image3 = document.querySelector("#MANALI")
var marker3= new mapboxgl.Marker({
    element:image3
}).setLngLat([77.19745845632119,32.232562414520096]).addTo(map)


var image4 = document.querySelector("#MOUNTABU")
var marker4= new mapboxgl.Marker({
    element:image4
}).setLngLat([ 72.71385707574596,24.59200019599404]).addTo(map)


var image5 = document.querySelector("#DAGDUSHETGANPATI")
var marker5= new mapboxgl.Marker({
    element:image5
}).setLngLat([73.8561110568788,18.51640827376786]).addTo(map)

