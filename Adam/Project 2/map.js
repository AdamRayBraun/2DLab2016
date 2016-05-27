console.log(L);

var mymap = L.map('mapid').setView([51.4556, -0.1108], 12);

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

var line_points1 = [
    [51.487512, -0.125635],
    [51.485815, -0.121965],
    [51.483985, -0.117567],
    [51.482796, -0.116150],
    [51.481165, -0.113468],
    [51.480497, -0.110786],
    [51.479482, -0.111430],
    [51.478132, -0.111945],
    [51.475766, -0.112374],
    [51.473695, -0.112545],
    [51.471837, -0.112556],
    [51.470380, -0.112406],
    [51.468816, -0.112395],
    [51.468235, -0.112406],
    [51.466102, -0.113103],
    [51.464659, -0.113790],
    [51.460006, -0.113490],
    [51.459044, -0.112374],
    [51.455808, -0.110292],
    [51.455260, -0.110314],
    [51.453896, -0.107653],
    [51.452439, -0.102890],
    [51.452358, -0.099885],
    [51.451810, -0.095508],
    [51.449778, -0.093105],
    [51.448614, -0.092118],
    [51.447371, -0.093169],
    [51.446689, -0.095379],
    [51.444402, -0.094092],
    [51.441232, -0.092547],
    [51.440831, -0.093212],
    [51.438356, -0.091903],
    [51.432083, -0.089693],
    [51.429367, -0.088577],
    [51.427868, -0.085917],
    [51.427146, -0.084972],
    [51.425527, -0.083728],
    [51.424363, -0.082247],
    [51.419867, -0.079179]
     
    
];

var polyline_options = {
    color: '#090'
};

var polyline = L.polyline(line_points1, polyline_options).addTo(mymap);


