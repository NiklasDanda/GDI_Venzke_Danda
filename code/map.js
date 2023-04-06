
// Layer mit Datenquelle
var osmLayer= new ol.layer.Tile({
    source: new ol.source.OSM()
});
var stamenTerrainLayer = new ol.layer.Tile({
    source: new ol.source.Stamen({layer: "terrain" })
});
var stamenWatercolorLayer = new ol.layer.Tile({
    source: new ol.source.Stamen({layer: "watercolor" })
});
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
// Koordinaten der Kartenmitte und
// Konvertierung WGS84 in Pseudo-Mercator (Bezugssystem von OSM)
var centerPoint = ol.proj.transform(
    [9.990709, 53.531818],
    "EPSG:4326",
    "EPSG:3857"
);
// Kontrollelemente fuer die Karte
var controls = [
    new ol.control.Attribution({collapsed: true}),
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
// Kartenerstellung + Verknuepfung mit HTML (id=’map’)
var map = new ol.Map({
    view: view,
    layers: [osmLayer, stadtteile],
    controls: controls,
    target:"map"
});
// Overlay der Postleitzahlen
var overlay = new ol.Overlay({
    element: document.getElementById("overlay"),
    positioning: "bottom-center"
});
map.on("click", function(event) {
    var coor = event.coordinate;
    var text = map.forEachFeatureAtPixel(event.pixel, function(feature) {
        var feature = feature.get("stadtteil_");
        return feature;
    });
    var element = overlay.getElement();
        element.innerHTML = text;
        overlay.setPosition(coor);
        map.addOverlay(overlay);
});