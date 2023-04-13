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
    target: "map",
    view: view,
    controls: controls,
    layers: [
        new ol.layer.Group({
            title: "Base maps",
            fold: "close",
            layers: [
                new ol.layer.Tile({
                    title: "Terrain Labels",
                    type: "base",
                    visible: false,
                    source: new ol.source.Stamen({
                        layer: "terrain-labels"
                    })
                }),
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
                    visible: true,
                    source: new ol.source.OSM()
                }),
                new ol.layer.Tile({
                    title: "Dark Matter",
                    type: "base",
                    visible: false,
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
            title: "Add ons",
            fold: "close",
            layers: [
                // Orthophoto Hamburg 2021
                new ol.layer.Tile({
                    title: "Orthophoto HH 2021",
                    visible: false,
                    source: new ol.source.TileWMS({
                        url: "https://geodienste.hamburg.de/HH_WMS_DOP",
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
                        url: "data/DistrictsHH.geojson",
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
            title: "Feuchtgebiete HH",
            fold: "close",
            layers: [
                new ol.layer.Group({
                    title: "Gewässer HH",
                    fold: "close",
                    layers: [
                        // Pegel Deutschland
                        new ol.layer.Tile({
                            title: "Pegel DE",
                            visible: false,
                            source: new ol.source.TileWMS({
                                url: "https://www.pegelonline.wsv.de/geoserver/po-wms-mnwmhw/ows?service=WMS&version=1.3.0&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=PegelonlineWMS",
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
                    title: "Moore HH",
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
// Create the layer switcher control
var layerSwitcher = new ol.control.LayerSwitcher({
    tipLabel: "Layer switcher", // Optional label for button
    groupSelectStyle: "children" // Can be "children" [default], "group" or "none"
});
map.addControl(layerSwitcher);
// Overlay der Postleitzahlen
var overlay = new ol.Overlay({
    element: document.getElementById("overlay"),
    positioning: "bottom-center"
});
// map.on("click", function (event) {
//     var coor = event.coordinate;
//     var text = map.forEachFeatureAtPixel(event.pixel, function (feature) {
//         var feature = feature.get("stadtteil_");
//         return feature;
//     });
//     var element = overlay.getElement();
//     element.innerHTML = text;
//     overlay.setPosition(coor);
//     map.addOverlay(overlay);
// });
