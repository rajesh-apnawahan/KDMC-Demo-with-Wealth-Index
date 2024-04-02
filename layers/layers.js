var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Ambernath_1 = new ol.format.GeoJSON();
var features_Ambernath_1 = format_Ambernath_1.readFeatures(json_Ambernath_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ambernath_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ambernath_1.addFeatures(features_Ambernath_1);
var lyr_Ambernath_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ambernath_1, 
                style: style_Ambernath_1,
                popuplayertitle: "Ambernath",
                interactive: true,
                title: '<img src="styles/legend/Ambernath_1.png" /> Ambernath'
            });
var format_BadlapurBoundary_2 = new ol.format.GeoJSON();
var features_BadlapurBoundary_2 = format_BadlapurBoundary_2.readFeatures(json_BadlapurBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BadlapurBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BadlapurBoundary_2.addFeatures(features_BadlapurBoundary_2);
var lyr_BadlapurBoundary_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BadlapurBoundary_2, 
                style: style_BadlapurBoundary_2,
                popuplayertitle: "Badlapur Boundary",
                interactive: true,
                title: '<img src="styles/legend/BadlapurBoundary_2.png" /> Badlapur Boundary'
            });
var format_BhiwandiBoundary_3 = new ol.format.GeoJSON();
var features_BhiwandiBoundary_3 = format_BhiwandiBoundary_3.readFeatures(json_BhiwandiBoundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BhiwandiBoundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BhiwandiBoundary_3.addFeatures(features_BhiwandiBoundary_3);
var lyr_BhiwandiBoundary_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BhiwandiBoundary_3, 
                style: style_BhiwandiBoundary_3,
                popuplayertitle: "Bhiwandi Boundary",
                interactive: true,
                title: '<img src="styles/legend/BhiwandiBoundary_3.png" /> Bhiwandi Boundary'
            });
var format_UlhasnagarBoundry_4 = new ol.format.GeoJSON();
var features_UlhasnagarBoundry_4 = format_UlhasnagarBoundry_4.readFeatures(json_UlhasnagarBoundry_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UlhasnagarBoundry_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UlhasnagarBoundry_4.addFeatures(features_UlhasnagarBoundry_4);
var lyr_UlhasnagarBoundry_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UlhasnagarBoundry_4, 
                style: style_UlhasnagarBoundry_4,
                popuplayertitle: "Ulhasnagar Boundry",
                interactive: true,
                title: '<img src="styles/legend/UlhasnagarBoundry_4.png" /> Ulhasnagar Boundry'
            });
var format_KDMTBusStops_5 = new ol.format.GeoJSON();
var features_KDMTBusStops_5 = format_KDMTBusStops_5.readFeatures(json_KDMTBusStops_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KDMTBusStops_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KDMTBusStops_5.addFeatures(features_KDMTBusStops_5);
var lyr_KDMTBusStops_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KDMTBusStops_5, 
                style: style_KDMTBusStops_5,
                popuplayertitle: "KDMT Bus Stops",
                interactive: true,
                title: '<img src="styles/legend/KDMTBusStops_5.png" /> KDMT Bus Stops'
            });
var format_AllRoutesKDMC_6 = new ol.format.GeoJSON();
var features_AllRoutesKDMC_6 = format_AllRoutesKDMC_6.readFeatures(json_AllRoutesKDMC_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllRoutesKDMC_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllRoutesKDMC_6.addFeatures(features_AllRoutesKDMC_6);
var lyr_AllRoutesKDMC_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AllRoutesKDMC_6, 
                style: style_AllRoutesKDMC_6,
                popuplayertitle: "All Routes KDMC",
                interactive: true,
    title: 'All Routes KDMC<br />\
    <img src="styles/legend/AllRoutesKDMC_6_0.png" /> R01AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_1.png" /> R01R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_2.png" /> R02R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_3.png" /> R03R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_4.png" /> R05R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_5.png" /> R06R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_6.png" /> R07R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_7.png" /> R08R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_8.png" /> R09R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_9.png" /> R102AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_10.png" /> R102R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_11.png" /> R108ACR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_12.png" /> R108AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_13.png" /> R108BR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_14.png" /> R10AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_15.png" /> R10R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_16.png" /> R11R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_17.png" /> R12R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_18.png" /> R13R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_19.png" /> R14R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_20.png" /> R15R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_21.png" /> R16R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_22.png" /> R17R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_23.png" /> R18R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_24.png" /> R19R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_25.png" /> R20R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_26.png" /> R21R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_27.png" /> R22R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_28.png" /> R23R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_29.png" /> R24R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_30.png" /> R25R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_31.png" /> R26R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_32.png" /> R27R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_33.png" /> R28R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_34.png" /> R29R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_35.png" /> R33AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_36.png" /> R33BR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_37.png" /> R33R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_38.png" /> R34AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_39.png" /> R34B<br />\
    <img src="styles/legend/AllRoutesKDMC_6_40.png" /> R34CR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_41.png" /> R34R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_42.png" /> R35ACR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_43.png" /> R35AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_44.png" /> R35R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_45.png" /> R37R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_46.png" /> R38AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_47.png" /> R38R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_48.png" /> R3AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_49.png" /> R40R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_50.png" /> R42R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_51.png" /> R44R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_52.png" /> R45R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_53.png" /> R4AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_54.png" /> R4BR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_55.png" /> R51AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_56.png" /> R51R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_57.png" /> R55AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_58.png" /> R55BR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_59.png" /> R55R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_60.png" /> R57BR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_61.png" /> R57R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_62.png" /> R58AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_63.png" /> R58R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_64.png" /> R62R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_65.png" /> R63DR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_66.png" /> R63R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_67.png" /> R64AR<br />\
    <img src="styles/legend/AllRoutesKDMC_6_68.png" /> R64R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_69.png" /> R65R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_70.png" /> R74R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_71.png" /> R76R<br />\
    <img src="styles/legend/AllRoutesKDMC_6_72.png" /> <br />'
        });
var format_KDMCSocioEconomicRating_7 = new ol.format.GeoJSON();
var features_KDMCSocioEconomicRating_7 = format_KDMCSocioEconomicRating_7.readFeatures(json_KDMCSocioEconomicRating_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KDMCSocioEconomicRating_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KDMCSocioEconomicRating_7.addFeatures(features_KDMCSocioEconomicRating_7);
var lyr_KDMCSocioEconomicRating_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KDMCSocioEconomicRating_7, 
                style: style_KDMCSocioEconomicRating_7,
                popuplayertitle: "KDMC Socio Economic Rating",
                interactive: true,
    title: 'KDMC Socio Economic Rating<br />\
    <img src="styles/legend/KDMCSocioEconomicRating_7_0.png" /> -1.578 - -0.641<br />\
    <img src="styles/legend/KDMCSocioEconomicRating_7_1.png" /> -0.641 - -0.527<br />\
    <img src="styles/legend/KDMCSocioEconomicRating_7_2.png" /> -0.527 - -0.441<br />\
    <img src="styles/legend/KDMCSocioEconomicRating_7_3.png" /> -0.441 - -0.364<br />\
    <img src="styles/legend/KDMCSocioEconomicRating_7_4.png" /> -0.364 - -0.29<br />\
    <img src="styles/legend/KDMCSocioEconomicRating_7_5.png" /> -0.29 - -0.212<br />\
    <img src="styles/legend/KDMCSocioEconomicRating_7_6.png" /> -0.212 - -0.13<br />\
    <img src="styles/legend/KDMCSocioEconomicRating_7_7.png" /> -0.13 - -0.033<br />\
    <img src="styles/legend/KDMCSocioEconomicRating_7_8.png" /> -0.033 - 0.083<br />\
    <img src="styles/legend/KDMCSocioEconomicRating_7_9.png" /> 0.083 - 0.238<br />\
    <img src="styles/legend/KDMCSocioEconomicRating_7_10.png" /> 0.238 - 0.474<br />\
    <img src="styles/legend/KDMCSocioEconomicRating_7_11.png" /> 0.474 - 2.162<br />'
        });
var format_KDMCBoundry_8 = new ol.format.GeoJSON();
var features_KDMCBoundry_8 = format_KDMCBoundry_8.readFeatures(json_KDMCBoundry_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KDMCBoundry_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KDMCBoundry_8.addFeatures(features_KDMCBoundry_8);
var lyr_KDMCBoundry_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KDMCBoundry_8, 
                style: style_KDMCBoundry_8,
                popuplayertitle: "KDMC Boundry",
                interactive: true,
                title: '<img src="styles/legend/KDMCBoundry_8.png" /> KDMC Boundry'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Ambernath_1.setVisible(true);lyr_BadlapurBoundary_2.setVisible(true);lyr_BhiwandiBoundary_3.setVisible(true);lyr_UlhasnagarBoundry_4.setVisible(true);lyr_KDMTBusStops_5.setVisible(true);lyr_AllRoutesKDMC_6.setVisible(true);lyr_KDMCSocioEconomicRating_7.setVisible(true);lyr_KDMCBoundry_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Ambernath_1,lyr_BadlapurBoundary_2,lyr_BhiwandiBoundary_3,lyr_UlhasnagarBoundry_4,lyr_KDMTBusStops_5,lyr_AllRoutesKDMC_6,lyr_KDMCSocioEconomicRating_7,lyr_KDMCBoundry_8];
lyr_Ambernath_1.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_BadlapurBoundary_2.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_BhiwandiBoundary_3.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_UlhasnagarBoundry_4.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_KDMTBusStops_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '___Sr__No_': '___Sr__No_', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_AllRoutesKDMC_6.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'layer': 'layer', 'path': 'path', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_KDMCSocioEconomicRating_7.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'rwi': 'rwi', 'error': 'error', });
lyr_KDMCBoundry_8.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Ambernath_1.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_BadlapurBoundary_2.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_BhiwandiBoundary_3.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_UlhasnagarBoundry_4.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_KDMTBusStops_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', '___Sr__No_': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_AllRoutesKDMC_6.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_KDMCSocioEconomicRating_7.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'rwi': 'TextEdit', 'error': 'TextEdit', });
lyr_KDMCBoundry_8.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Ambernath_1.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_BadlapurBoundary_2.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_BhiwandiBoundary_3.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_UlhasnagarBoundry_4.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_KDMTBusStops_5.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', '___Sr__No_': 'hidden field', 'center_lat': 'inline label - visible with data', 'center_lon': 'inline label - visible with data', });
lyr_AllRoutesKDMC_6.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', 'layer': 'header label - visible with data', 'path': 'hidden field', 'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_KDMCSocioEconomicRating_7.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'rwi': 'header label - visible with data', 'error': 'hidden field', });
lyr_KDMCBoundry_8.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_KDMCBoundry_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});