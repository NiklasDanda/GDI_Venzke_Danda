// Koordinaten der Kartenmitte und
// Konvertierung WGS84 in Pseudo-Mercator (Bezugssystem von OSM)
var centerPoint = ol.proj.transform(
    [9.990709, 53.531818],
    "EPSG:4326",
    "EPSG:3857"
);
// Kontrollelemente fuer die Karte
var controls = [
    new ol.control.Attribution({ collapsed: true }),
    new ol.control.Zoom(),
    new ol.control.ScaleLine(),
    new ol.control.FullScreen(),
    new ol.control.ZoomSlider(),
    new ol.control.MousePosition({
        coordinateFormat: ol.coordinate.createStringXY(4),
        projection: "EPSG:4326"
    }),
];
// Festlegung der Kartenansicht
var view = new ol.View({
    center: centerPoint,
    zoom: 10,
    projection: "EPSG:3857",
    maxZoom: 18,
    minZoom: 4,
});
var map = new ol.Map({
    target: 'map',
    view: view,
    controls: controls,
    layers: [
        new ol.layer.Group({
            // A layer must have a title to appear in the layerswitcher
            title: 'Base maps',
            layers: [
                new ol.layer.Tile({
                    title: 'Terrain Labels',
                    type: 'base',
                    visible: false,
                    source: new ol.source.Stamen({
                        layer: 'terrain-labels'
                    })
                }),
                new ol.layer.Tile({
                    title: 'Water color',
                    type: 'base',
                    visible: false,
                    source: new ol.source.Stamen({
                        layer: 'watercolor'
                    })
                }),
                new ol.layer.Tile({
                    title: 'OSM',
                    type: 'base',
                    visible: true,
                    source: new ol.source.OSM()
                }),
                new ol.layer.Tile({
                    title: 'Dark Matter',
                    type: 'base',
                    visible: false,
                    source: new ol.source.XYZ({
                        url: 'https://cartodb-basemaps-{a-d}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',
                        attributions: '© CARTO'
                    })
                }),
                new ol.layer.Tile({
                    title: 'Toner',
                    type: 'base',
                    visible: false,
                    source: new ol.source.Stamen({
                        layer: 'toner'
                    })
                }),
                new ol.layer.Tile({
                    title: 'World Imagery',
                    type: 'base',
                    visible: false,
                    source: new ol.source.XYZ({
                        url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
                        attributions: '© Esri'
                    })
                })               
            ]
        }),
        new ol.layer.Group({
            title: 'Overlays',
            fold: 'open',
            layers: [
                // Stadtteile Hamburg
                new ol.layer.Vector({
                    title: 'Stadtteile Hamburg',
                    visible: false,
                    source: new ol.source.Vector({
                        url: "http://geo.local.hcuhh.de/data/districts.geojson",
                        format: new ol.format.GeoJSON()
                    }),
                    maxResolution: 1000,
                    minResolution: 5,
                    opacity: 1
                }),
                new ol.layer.Vector({
                    title: 'Hamburg',
                    visible: false,
                    source: new ol.source.Vector({
                        url: 'data/hamburg.geojson',
                        format: new ol.format.GeoJSON()
                    }),
                    style: new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: 'red',
                            width: 2
                        }),
                        fill: new ol.style.Fill({
                            color: 'rgba(255, 0, 0, 0.1)'
                        })
                    })
                }),
                new ol.layer.Vector({
                    title: 'Bahnlinien HH',
                    visible: false,
                    source: new ol.source.Vector({
                        url: 'data/Bahnlinien HH.geojson',
                        format: new ol.format.GeoJSON()
                    }),
                    style: new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: 'red',
                            width: 2
                        }),
                        fill: new ol.style.Fill({
                            color: 'rgba(255, 0, 0, 0.1)'
                        })
                    })
                }),
                new ol.layer.Vector({
                    title: 'HCU - EG',
                    visible: false,
                    source: new ol.source.Vector({
                        url: 'data/EG.geojson',
                        format: new ol.format.GeoJSON()
                    }),
                    style: new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: 'green',
                            width: 2
                        }),
                        fill: new ol.style.Fill({
                            color: 'rgba(255, 0, 0, 0.1)'
                        })
                    })
                }),
                new ol.layer.Vector({
                    title: 'HCU - 1OG',
                    visible: false,
                    source: new ol.source.Vector({
                        url: 'data/1OG.geojson',
                        format: new ol.format.GeoJSON()
                    }),
                    style: new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: 'green',
                            width: 2
                        }),
                        fill: new ol.style.Fill({
                            color: 'rgba(255, 0, 0, 0.1)'
                        })
                    })
                }),
                new ol.layer.Vector({
                    title: 'HCU - 4OG',
                    visible: false,
                    source: new ol.source.Vector({
                        url: 'data/4OG.geojson',
                        format: new ol.format.GeoJSON()
                    }),
                    style: new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: 'green',
                            width: 2
                        }),
                        fill: new ol.style.Fill({
                            color: 'rgba(255, 0, 0, 0.1)'
                        })
                    })
                }),
                new ol.layer.Vector({
                    title: 'Bundesländer',
                    visible: false,
                    source: new ol.source.Vector({
                        url: 'data/Laender_DE.geojson',
                        format: new ol.format.GeoJSON()
                    }),
                    style: new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: 'cyan',
                            width: 2
                        }),
                        fill: new ol.style.Fill({
                            color: 'rgba(255, 0, 0, 0.1)'
                        })
                    })
                }),
                new ol.layer.Vector({
                    title: 'Straßen- und Wegenetz Hamburg',
                    visible: false,
                    source: new ol.source.Vector({
                        url: 'data/Strassen-Wegenetz_HH.geojson',
                        format: new ol.format.GeoJSON()
                    }),
                    style: new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: 'orange',
                            width: 2
                        }),
                        fill: new ol.style.Fill({
                            color: 'rgba(255, 0, 0, 0.1)'
                        })
                    })
                }),
                new ol.layer.Vector({
                    title: 'Siedlungsflächen in Deutschland',
                    visible: false,
                    source: new ol.source.Vector({
                        url: 'data/Siedlungsflächen_DE.geojson',
                        format: new ol.format.GeoJSON()
                    }),
                    style: new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: 'red',
                            width: 2
                        }),
                        fill: new ol.style.Fill({
                            color: 'rgba(255, 0, 0, 0.1)'
                        })
                    })
                })
            ]
        })
    ]
});
    // Create the layer switcher control
    var layerSwitcher = new ol.control.LayerSwitcher({
        tipLabel: 'Légende', // Optional label for button
        groupSelectStyle: 'children' // Can be 'children' [default], 'group' or 'none'
    });
    map.addControl(layerSwitcher);
    // Overlay der Postleitzahlen
    var overlay = new ol.Overlay({
        element: document.getElementById("overlay"),
        positioning: "bottom-center"
    });
    map.on("click", function (event) {
        var coor = event.coordinate;
        var text = map.forEachFeatureAtPixel(event.pixel, function (feature) {
            var feature = feature.get("stadtteil_");
            return feature;
        });
        var element = overlay.getElement();
        element.innerHTML = text;
        overlay.setPosition(coor);
        map.addOverlay(overlay);
    });
