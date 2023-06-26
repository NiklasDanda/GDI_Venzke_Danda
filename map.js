// Koordinaten der Kartenmitte und
// Konvertierung WGS84 in Pseudo-Mercator (Bezugssystem von OSM)
var centerPoint = ol.proj.transform(
    [9.990709, 53.531818],
    "EPSG:4326",
    "EPSG:3857"
);
// Kontrollelemente für die Karte
var controls = [
    new ol.control.Attribution({ collapsed: true }),
    new ol.control.Zoom(),
    new ol.control.ScaleLine(),
    new ol.control.FullScreen(),
    new ol.control.MousePosition({
        coordinateFormat: ol.coordinate.createStringXY(4),
        projection: "EPSG:4326"
    }),
    new ol.control.Rotate({ className: "custom-rotation" }),

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
    target: "map",
    view: view,
    controls: controls,
    layers: [
        new ol.layer.Group({
            title: "Base Maps",
            fold: "close",
            layers: [
                new ol.layer.Tile({
                    title: "Water color",
                    type: "base",
                    visible: false,
                    source: new ol.source.Stamen({
                        layer: "watercolor"
                    })
                }),
                new ol.layer.Tile({
                    title: "OSM",
                    type: "base",
                    visible: false,
                    source: new ol.source.OSM()
                }),
                new ol.layer.Tile({
                    title: "Dark Matter",
                    type: "base",
                    visible: true,
                    source: new ol.source.XYZ({
                        url: "https://cartodb-basemaps-{a-d}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png",
                        attributions: "© CARTO"
                    })
                }),
                new ol.layer.Tile({
                    title: "Toner",
                    type: "base",
                    visible: false,
                    source: new ol.source.Stamen({
                        layer: "toner"
                    })
                }),
                new ol.layer.Tile({
                    title: "World Imagery",
                    type: "base",
                    visible: false,
                    source: new ol.source.XYZ({
                        url: "https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
                        attributions: "© Esri"
                    })
                })
            ]
        }),
        new ol.layer.Group({
            title: "Lokal",
            fold: "close",
            layers: [
                // Lokale Daten in Docker
                new ol.layer.Tile({
                    title: "Bundesland_HH",
                    visible: false,
                    source: new ol.source.TileWMS({
                        url: "http://localhost:8080/geoserver/hlf728/wms?service=WMS&version=1.1.0&request=GetMap&layers=hlf728%3ABundesland_HH&bbox=8.420624000437337%2C53.39507758854026%2C10.325959157503767%2C53.96357881203935&width=768&height=330&srs=EPSG%3A25832&styles=&format=application/openlayers",
                        params: {
                            "LAYERS": "Bundesland_HH",
                            "TYPE": "simple",
                            "FORMAT": "image/png",
                        }
                    })
                }),
                new ol.layer.Tile({
                    title: "Districts_HH",
                    visible: false,
                    source: new ol.source.TileWMS({
                        url: "http://localhost:8080/geoserver/hlf728/wms?service=WMS&version=1.1.0&request=GetMap&layers=hlf728%3ADistricts_HH&bbox=8.41319041370058%2C53.39501085500329%2C10.325276801117477%2C53.964906237339584&width=768&height=330&srs=EPSG%3A25832&styles=&format=application/openlayers",
                        params: {
                            "LAYERS": "Districts_HH",
                            "TYPE": "simple",
                            "FORMAT": "image/png",
                        }
                    })
                }),
                new ol.layer.Tile({
                    title: "HCU_EG",
                    visible: false,
                    source: new ol.source.TileWMS({
                        url: "http://localhost:8080/geoserver/hlf728/wms?service=WMS&version=1.1.0&request=GetMap&layers=hlf728%3AHCU_EG&bbox=10.003764110148026%2C53.54001071905738%2C10.005981965718806%2C53.54054124352965&width=768&height=330&srs=EPSG%3A25832&styles=&format=application/openlayers",
                        params: {
                            "LAYERS": "HCU_EG",
                            "TYPE": "simple",
                            "FORMAT": "image/png",
                        }
                    })
                }),
                new ol.layer.Tile({
                    title: "HCU_OG1",
                    visible: false,
                    source: new ol.source.TileWMS({
                        url: "http://localhost:8080/geoserver/hlf728/wms?service=WMS&version=1.1.0&request=GetMap&layers=hlf728%3AHCU_OG1&bbox=10.003508537124134%2C53.53986045268111%2C10.005749166827655%2C53.5405412408845&width=768&height=330&srs=EPSG%3A25832&styles=&format=application/openlayers",
                        params: {
                            "LAYERS": "HCU_OG1",
                            "TYPE": "simple",
                            "FORMAT": "image/png",
                        }
                    })
                }),
                new ol.layer.Tile({
                    title: "HCU_OG4",
                    visible: false,
                    source: new ol.source.TileWMS({
                        url: "http://localhost:8080/geoserver/hlf728/wms?service=WMS&version=1.1.0&request=GetMap&layers=hlf728%3AHCU_OG4&bbox=10.003506584890614%2C53.53985942305863%2C10.005749166803048%2C53.54054129105324&width=768&height=330&srs=EPSG%3A25832&styles=&format=application/openlayers",
                        params: {
                            "LAYERS": "HCU_OG4",
                            "TYPE": "simple",
                            "FORMAT": "image/png",
                        }
                    })
                }),
                new ol.layer.Tile({
                    title: "Wasserschutzgebiete_HH",
                    visible: false,
                    source: new ol.source.TileWMS({
                        url: "http://localhost:8080/geoserver/hlf728/wms?service=WMS&version=1.1.0&request=GetMap&layers=hlf728%3AWasserschutzgebiete_HH&bbox=549469.25%2C5920449.451%2C587015.805%2C5948645.945&width=768&height=576&srs=EPSG%3A25832&styles=&format=application/openlayers",
                        params: {
                            "LAYERS": "Wasserschutzgebiete_HH",
                            "TYPE": "simple",
                            "FORMAT": "image/png",
                        }
                    })
                }),
            ]
        }),
        new ol.layer.Group({
            title: "Add Ons",
            fold: "close",
            layers: [
                // Orthophoto Hamburg 2021
                new ol.layer.Tile({
                    title: "Orthophoto HH 2021",
                    visible: false,
                    source: new ol.source.TileWMS({
                        url: "https://geodienste.hamburg.de/HH_WMS_DOP",
                        attributions: [
                            '<a href="http://www.geoinfo.hamburg.de"> | Landesbetrieb Geoinformation und Vermessung</a>'
                        ],
                        params: {
                            "LAYERS": "DOP"
                        }
                    })
                }),
                // Stadtteile Hamburg
                new ol.layer.Vector({
                    title: "Stadtteile HH",
                    visible: false,
                    source: new ol.source.Vector({
                        url: "http://geo.local.hcuhh.de/data/districts.geojson",
                        format: new ol.format.GeoJSON()
                    }),
                    maxResolution: 1000,
                    minResolution: 5,
                    opacity: 1
                }),
                // Stadtgrenze Hamburg
                new ol.layer.Vector({
                    title: "Stadtgrenzen HH",
                    visible: false,
                    source: new ol.source.Vector({
                        url: "data/Hamburg.geojson",
                        format: new ol.format.GeoJSON()
                    }),
                    style: new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: "red",
                            width: 2
                        }),
                        fill: new ol.style.Fill({
                            color: "rgba(255, 0, 0, 0.1)"
                        })
                    })
                }),
                // Bahnlinien Hamburg
                new ol.layer.Vector({
                    title: "Bahnlinien HH",
                    visible: false,
                    source: new ol.source.Vector({
                        url: "data/Bahnlinien_HH.geojson",
                        format: new ol.format.GeoJSON()
                    }),
                    style: new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: "red",
                            width: 2
                        }),
                        fill: new ol.style.Fill({
                            color: "rgba(255, 0, 0, 0.1)"
                        })
                    })
                }),
                // HCU EG
                new ol.layer.Vector({
                    title: "EG HCU",
                    visible: false,
                    source: new ol.source.Vector({
                        url: "data/EG.geojson",
                        format: new ol.format.GeoJSON()
                    }),
                    style: new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: "green",
                            width: 2
                        }),
                        fill: new ol.style.Fill({
                            color: "rgba(255, 0, 0, 0.1)"
                        })
                    })
                }),
                // HCU 1OG
                new ol.layer.Vector({
                    title: "1OG HCU",
                    visible: false,
                    source: new ol.source.Vector({
                        url: "data/1OG.geojson",
                        format: new ol.format.GeoJSON()
                    }),
                    style: new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: "green",
                            width: 2
                        }),
                        fill: new ol.style.Fill({
                            color: "rgba(255, 0, 0, 0.1)"
                        })
                    })
                }),
                // HCU 4OG
                new ol.layer.Vector({
                    title: "4OG HCU",
                    visible: false,
                    source: new ol.source.Vector({
                        url: "data/4OG.geojson",
                        format: new ol.format.GeoJSON()
                    }),
                    style: new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: "green",
                            width: 2
                        }),
                        fill: new ol.style.Fill({
                            color: "rgba(255, 0, 0, 0.1)"
                        })
                    })
                }),
                // Bundesländer
                new ol.layer.Vector({
                    title: "Bundesländer DE",
                    visible: false,
                    source: new ol.source.Vector({
                        url: "data/Laender_DE.geojson",
                        format: new ol.format.GeoJSON()
                    }),
                    style: new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: "cyan",
                            width: 2
                        }),
                        fill: new ol.style.Fill({
                            color: "rgba(255, 0, 0, 0.1)"
                        })
                    })
                }),
                // Straßen- und Wegenetz Hamburg
                new ol.layer.Vector({
                    title: "Straßen- und Wegenetz HH",
                    visible: false,
                    source: new ol.source.Vector({
                        url: "data/Strassen-Wegenetz_HH.geojson",
                        format: new ol.format.GeoJSON()
                    }),
                    style: new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: "orange",
                            width: 2
                        }),
                        fill: new ol.style.Fill({
                            color: "rgba(255, 0, 0, 0.1)"
                        })
                    })
                }),
                // Siedlungsflächen in Deutschland
                new ol.layer.Vector({
                    title: "Siedlungsflächen DE",
                    visible: false,
                    source: new ol.source.Vector({
                        url: "data/Siedlungsflächen_DE.geojson",
                        format: new ol.format.GeoJSON()
                    }),
                    style: new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: "red",
                            width: 2
                        }),
                        fill: new ol.style.Fill({
                            color: "rgba(255, 0, 0, 0.1)"
                        })
                    })
                })
            ]
        }),
        new ol.layer.Group({
            title: "Feuchtgebiete",
            fold: "close",
            layers: [
                new ol.layer.Group({
                    title: "Gewässer",
                    fold: "close",
                    layers: [
                        // Pegel Deutschland
                        new ol.layer.Tile({
                            title: "Pegel DE",
                            visible: false,
                            source: new ol.source.TileWMS({
                                url: "https://www.pegelonline.wsv.de/geoserver/po-wms-mnwmhw/ows?service=WMS&version=1.3.0&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=PegelonlineWMS",
                                attributions: [
                                    '<a href="http://www.geoinfo.hamburg.de"> | Landesbetrieb Geoinformation und Vermessung</a>'
                                ],
                                params: {
                                    "LAYERS": "PegelonlineWMS",
                                    "TYPE": "simple",
                                    "FORMAT": "image/png",
                                }
                            })
                        }),
                        // Grundwasser Neubildung Hamburg
                        new ol.layer.Tile({
                            title: "Grundwasserneubildung HH",
                            visible: false,
                            source: new ol.source.TileWMS({
                                url: "https://geodienste.hamburg.de/HH_WMS_Grundwasserneubildung?language=ger&version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=HH_WMS_Grundwasserneubildung_Hamburg&format=image/png&STYLE=default",
                                attributions: [
                                    '<a href="http://www.geoinfo.hamburg.de"> | Landesbetrieb Geoinformation und Vermessung</a>'
                                ],
                                params: {
                                    "LAYERS": "HH_WMS_Grundwasserneubildung_Hamburg",
                                    "TYPE": "simple",
                                    "FORMAT": "image/png",
                                }
                            })
                        }),
                        new ol.layer.Tile({
                            title: "Gefahrengebiete bei Tide Elbe HH",
                            visible: false,
                            source: new ol.source.TileWMS({
                                url: "https://geodienste.hamburg.de/HH_WMS_Hochwasser_gefaehrdeter_Bereich_Tidegebiet_Elbe?request=GetLegendGraphic&version=1.3.0&service=WMS&layer=hw_gef_bereich_tidegebiet_elbe&style=hw_gef_bereich_tidegebiet_elbe&format=image/png",
                                attributions: [
                                    '<a href="http://www.geoinfo.hamburg.de"> | Landesbetrieb Geoinformation und Vermessung</a>'
                                ],
                                params: {
                                    "LAYERS": "hw_gef_bereich_tidegebiet_elbe",
                                    "TYPE": "simple",
                                    "FORMAT": "image/png",
                                }
                            })
                        }),
                        new ol.layer.Tile({
                            title: "Badegewässer HH",
                            visible: false,
                            source: new ol.source.TileWMS({
                                url: "https://geodienste.hamburg.de/HH_WMS_Badegewaesser?request=GetLegendGraphic&version=1.3.0&service=WMS&layer=badegewaesser&style=style_freizeit_badegewaesser&format=image/png",
                                attributions: [
                                    '<a href="http://www.geoinfo.hamburg.de"> | Landesbetrieb Geoinformation und Vermessung</a>'
                                ],
                                params: {
                                    "LAYERS": "badegewaesser",
                                    "TYPE": "simple",
                                    "FORMAT": "image/png",
                                }
                            })
                        }),
                        new ol.layer.Tile({
                            title: "trockenfallende Gewässer HH",
                            visible: false,
                            source: new ol.source.TileWMS({
                                url: "https://geodienste.hamburg.de/HH_WMS_Trockenfallende_Gewaesser?request=GetLegendGraphic&version=1.3.0&service=WMS&layer=trockenfallende_gewaesser&style=trockenfallende_gewaesser&format=image/png",
                                attributions: [
                                    '<a href="http://www.geoinfo.hamburg.de"> | Landesbetrieb Geoinformation und Vermessung</a>'
                                ],
                                params: {
                                    "LAYERS": "trockenfallende_gewaesser",
                                    "TYPE": "simple",
                                    "FORMAT": "image/png",
                                }
                            })
                        }),
                        new ol.layer.Tile({
                            title: "Wasserschutzgebiete II HH",
                            visible: false,
                            source: new ol.source.TileWMS({
                                url: "https://geodienste.hamburg.de/HH_WMS_Wasserschutzgebiete?request=GetLegendGraphic&version=1.3.0&service=WMS&layer=wasserschutzgebiete_II&style=wasserschutzgebiete_II&format=image/png",
                                attributions: [
                                    '<a href="http://www.geoinfo.hamburg.de"> | Landesbetrieb Geoinformation und Vermessung</a>'
                                ],
                                params: {
                                    "LAYERS": "wasserschutzgebiete_II",
                                    "TYPE": "simple",
                                    "FORMAT": "image/png",
                                }
                            })
                        }),
                        new ol.layer.Tile({
                            title: "Wasserschutzgebiete III HH",
                            visible: false,
                            source: new ol.source.TileWMS({
                                url: "https://geodienste.hamburg.de/HH_WMS_Wasserschutzgebiete?request=GetLegendGraphic&version=1.3.0&service=WMS&layer=wasserschutzgebiete_II&style=wasserschutzgebiete_II&format=image/png",
                                attributions: [
                                    '<a href="http://www.geoinfo.hamburg.de"> | Landesbetrieb Geoinformation und Vermessung</a>'
                                ],
                                params: {
                                    "LAYERS": "wasserschutzgebiete_III",
                                    "TYPE": "simple",
                                    "FORMAT": "image/png",
                                }
                            })
                        }),
                    ]
                }),
                // MOORE 
                new ol.layer.Group({
                    title: "Moore",
                    fold: "close",
                    layers: [
                        new ol.layer.Tile({
                            title: "Bodenaufschüttungen",
                            visible: false,
                            source: new ol.source.TileWMS({
                                url: "https://geodienste.hamburg.de/HH_WMS_Moorkartierung",
                                params: {
                                    "LAYERS": "boden_aufschuettungen",
                                    "TYPE": "simple",
                                    "FORMAT": "image/png",
                                }
                            })
                        }),
                        new ol.layer.Tile({
                            title: "begrabene Torfe",
                            visible: false,
                            source: new ol.source.TileWMS({
                                url: "https://geodienste.hamburg.de/HH_WMS_Moorkartierung",
                                params: {
                                    "LAYERS": "begrabene_torfe",
                                    "TYPE": "simple",
                                    "FORMAT": "image/png",
                                }
                            })
                        }),
                        new ol.layer.Tile({
                            title: "Moorkartierung Moorbodenoberfläche",
                            visible: false,
                            source: new ol.source.TileWMS({
                                url: "https://geodienste.hamburg.de/HH_WMS_Moorkartierung",
                                params: {
                                    "LAYERS": "moorkartierung_moorbodenoberflaeche",
                                    "TYPE": "simple",
                                    "FORMAT": "image/png",
                                }
                            })
                        }),
                        new ol.layer.Tile({
                            title: "oberflächennahe Torfe",
                            visible: false,
                            source: new ol.source.TileWMS({
                                url: "https://geodienste.hamburg.de/HH_WMS_Moorkartierung",
                                params: {
                                    "LAYERS": "oberflaechennahen_torfe",
                                    "TYPE": "simple",
                                    "FORMAT": "image/png",
                                }
                            })
                        }),
                    ]
                })
            ]
        })
    ]
});

// Create the overview map control
var overviewMapControl = new ol.control.OverviewMap({
    layers: [
        new ol.layer.Tile({
            title: "OSM",
            type: "base",
            visible: true,
            source: new ol.source.OSM()
        })
    ],
    collapseLabel: '\u00AB',   // Define a custom collapse label
    label: '\u00BB',           // Define a custom label for the overview map button   
});
// Add the overview map control to the map
map.addControl(overviewMapControl);
// Position the overview map control using CSS
var overviewMapDiv = document.getElementsByClassName('ol-overviewmap')[0];
overviewMapDiv.style.top = '78px';      // Adjust the top position as needed
overviewMapDiv.style.height = '0px';     // Adjust the left position as needed

// Add popup overlay
var popup = new ol.Overlay.Popup();
map.addOverlay(popup);

map.on("click", function (event) {
    var feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
        return feature;
    });

    if (feature) {
        var properties = feature.getProperties();
        var bindpopup = "<table id='popup-table'><tr><th>Eigenschaften</th><th>Werte</th>";
        for (var key in properties) {
            if (properties.hasOwnProperty(key) && key !== "geometry" && key !== "destatis") {
                bindpopup += "<tr><td>" + key + "</td><td>" + properties[key] + "</td></tr>";
            }
        }
        bindpopup += "</table>";
        popup.show(event.coordinate, '<div id="popup-content">' + bindpopup + '</div>');
    } else {
        popup.hide();
    }
});


// Create the layer switcher control
var layerSwitcher = new ol.control.LayerSwitcher({
    tipLabel: "Layer switcher", // Optional label for button
    groupSelectStyle: "children" // Can be "children" [default], "group" or "none"
});
map.addControl(layerSwitcher);


// INFO BUTTON
var infoButton = document.getElementById('info-button');
infoButton.addEventListener('click', function () {
    var modal = document.getElementById('custom-modal');
    modal.style.display = 'block';

    var closeButton = modal.querySelector('.close');
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });
});





