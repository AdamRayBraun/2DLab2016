console.log(L);

var mymap = L.map('mapid').setView([51.505, -0.09], 8);

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v8/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'cassieldotcom.lbo5g01j',
    accessToken: 'pk.eyJ1IjoiY2Fzc2llbGRvdGNvbSIsImEiOiJfOXlpQmFJIn0.W5qn7J_RcOV8502RXsDc3Q'
}).addTo(mymap);

function jsonFunc(data) {
    
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].position);
        var pos = data[i].position;
        L.marker(pos).addTo(mymap).bindPopup(
        '<div class="popup">'+data[i].name+'</div>' +
        '<div class="popup"><img src="' + data[i].img + '"/></div>');
    }
};


        
var mapData = [
    //{"name": "someone", "position": [50.0, 0.0], "img": 'httpxxxxxx'},
    
    {
        "name": "Gipsy hill underground river marker",
        "position": ["51.4267", "-0.0847"],
        "img": 'data/gipsyHill.jpg'
    },
        {
        "name": "Effra parade road sign",
        "position": ["51.4556", "-0.1108"],
        "img": 'data/effraParade.jpg'
    },
        {
        "name": "Effra space office",
        "position": ["51.456198", "-0.110008"],
        "img": 'data/effraCenter.jpg'
    },
        {
        "name": "Effra early learning center",
        "position": ["51.4564", "-0.1097"],
        "img": 'data/effraEarlyYears.jpg'
    },
        {
        "name": "Effra road sign",
        "position": ["51.4552", "-0.1134"],
        "img": 'data/effraRoad.jpg'
    },
        {
        "name": "Effra Social",
        "position": ["51.4557", "-0.1137"],
        "img": 'data/effraSocial.jpg'
    },
        {
        "name": "The Effra Hall",
        "position": ["51.4599", "-0.1128"],
        "img": 'data/effraHall.jpg'
    },
        {
        "name": "Effra river exit",
        "position": ["51.4871", "-0.1259"],
        "img": 'data/effraExit.jpg'
    },
];

jsonFunc(mapData);

var line_points = [
    [38.893596444352134, -77.0381498336792],
    [38.89337933372204, -77.03792452812195],
    [38.89316222242831, -77.03761339187622],
    [38.893028615148424, -77.03731298446655],
    [38.892920059048464, -77.03691601753235],
    [38.892903358095296, -77.03637957572937],
    [38.89301191422077, -77.03592896461487],
    [38.89316222242831, -77.03549981117249],
    [38.89340438498248, -77.03514575958252],
    [38.893596444352134, -77.0349633693695]
];

var polyline_options = {
    color: '#000'
};

var polyline = L.polyline(line_points, polyline_options).addTo(mymap);


