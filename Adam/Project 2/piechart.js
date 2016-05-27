 var pie = new d3pie("#pieChart", {
	"header": {
		"title": {
			"text": "Artifacts of the River Effra",
			"fontSize": 22,
			"font": "verdana"
		},
		"subtitle": {
			"color": "#999999",
			"fontSize": 10,
			"font": "verdana"
		},
		"titleSubtitlePadding": 12
	},
	"footer": {
		"color": "#999999",
		"fontSize": 11,
		"font": "open sans",
		"location": "bottom-center"
	},
	"size": {
		"canvasHeight": 400,
		"canvasWidth": $("#pieChart").width(),
		"pieInnerRadius": "23%",
		"pieOuterRadius": "100%"
	},
	"data": {
		"content": [
			{
				"label": "Pubs",
				"value": 2,
				"color": "#2e54c9"
			},
			{
				"label": "Schools",
				"value": 1,
				"color": "#4d6ccc"
			},
			{
				"label": "Roads",
				"value": 2,
				"color": "#2f52aa"
			},
			{
				"label": "Physical river markers",
				"value": 2,
				"color": "#00047c"
			},
			{
				"label": "Business spaces",
				"value": 1,
				"color": "#2f3399"
			}
		]
	},
	"labels": {
		"outer": {
			"pieDistance": 10
		},
		"inner": {
			"format": "value"
		},
		"mainLabel": {
			"font": "verdana"
		},
		"percentage": {
			"color": "#e1e1e1",
			"font": "verdana",
			"decimalPlaces": 0
		},
		"value": {
			"color": "#e1e1e1",
			"font": "verdana"
		},
		"lines": {
			"enabled": true,
			"color": "#cccccc"
		},
		"truncation": {
			"enabled": true
		}
	},
	"tooltips": {
		"enabled": true,
		"type": "placeholder",
		"string": "",
		"styles": {
			"fadeInSpeed": 513,
			"backgroundOpacity": 0
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "elastic",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"gradient": {
			"enabled": true,
			"percentage": 47,
			"color": "#3a632c"
		}
	},
	"callbacks": {}
});




