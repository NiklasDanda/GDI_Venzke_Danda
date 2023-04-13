import geopandas as gpd

file = 'code/data/Siedlungsflächen_DE.geojson'
# Read GeoJSON file
gdf = gpd.read_file(file)


# Convert to EPSG 4326
gdf_4326 = gdf.to_crs(epsg=4326)

# Save as new GeoJSON file
gdf_4326.to_file(file, driver='GeoJSON')
