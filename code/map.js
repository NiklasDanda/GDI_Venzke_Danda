// Layer mit Datenquelle
var osmLayer = new ol.layer.Tile({
    source: new ol.source.OSM()
});
var stamenTerrainLayer = new ol.layer.Tile({
    source: new ol.source.Stamen({layer: "terrain" })
});
var stamenWatercolorLayer = new ol.layer.Tile({
    source: new ol.source.Stamen({layer: "watercolor" })
});
// layercontrol panel
// var layerSwitcher = new ol.control.LayerSwitcher({
// 	tipLabel: "Layer" // Optional label for button
// });
// Stadtteile Hamburg
var stadtteile = new ol.layer.Vector({
    source: new ol.source.Vector({
    url: "http://geo.local.hcuhh.de/data/districts.geojson",
    format: new ol.format.GeoJSON()
    }),
    maxResolution: 1000,
    minResolution: 5,
    opacity: 1
});
var centerPoint = ol.proj.transform([9.993682, 53.551086], "EPSG:4326", "EPSG:3857");  
var view = new ol.View({
        center: centerPoint,
        zoom: 12,
        projection: "EPSG:3857",
        maxZoom: 16,
        minZoom: 4,
});
var map = new ol.Map({
        view: view,
        layers: [osmLayer, stadtteile],
        target: "map",
        // control: layerSwitcher
});