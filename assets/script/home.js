window.alert("This site is decicated to what you can do with Javascript....This pop up is one of the things you can do");

var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}