import geopandas as gpd

file = 'python/Radwege HH'
# Read GeoJSON file
gdf = gpd.read_file(f"{file}.geojson")


# Convert to EPSG 4326
gdf_4326 = gdf.to_crs(epsg=4326)

# Save as new GeoJSON file
gdf_4326.to_file(f"{file}_transformed.geojson", driver='GeoJSON')
