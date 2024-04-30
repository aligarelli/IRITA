var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_high_1 = new ol.format.GeoJSON();
var features_high_1 = format_high_1.readFeatures(json_high_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_high_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_high_1.addFeatures(features_high_1);
var lyr_high_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_high_1, 
                style: style_high_1,
                popuplayertitle: "high",
                interactive: true,
                title: '<img src="styles/legend/high_1.png" /> high'
            });
var format_medium_2 = new ol.format.GeoJSON();
var features_medium_2 = format_medium_2.readFeatures(json_medium_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_medium_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_medium_2.addFeatures(features_medium_2);
var lyr_medium_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_medium_2, 
                style: style_medium_2,
                popuplayertitle: "medium",
                interactive: true,
                title: '<img src="styles/legend/medium_2.png" /> medium'
            });
var format_Lowrisk_3 = new ol.format.GeoJSON();
var features_Lowrisk_3 = format_Lowrisk_3.readFeatures(json_Lowrisk_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lowrisk_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lowrisk_3.addFeatures(features_Lowrisk_3);
var lyr_Lowrisk_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lowrisk_3, 
                style: style_Lowrisk_3,
                popuplayertitle: "Low risk",
                interactive: true,
                title: '<img src="styles/legend/Lowrisk_3.png" /> Low risk'
            });
var lyr_ScenaridirischioElementilineari_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geomap.reteunitaria.piemonte.it/ws/vtdifsuolo/rp-01/pgrawms/wms_vtdifsuolo_pgra",
    attributions: ' ',
                              params: {
                                "LAYERS": "RischioLN",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Scenari di rischio - Elementi lineari",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ScenaridirischioElementilineari_4, 0]);
var format_buildrisk_5 = new ol.format.GeoJSON();
var features_buildrisk_5 = format_buildrisk_5.readFeatures(json_buildrisk_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildrisk_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildrisk_5.addFeatures(features_buildrisk_5);
var lyr_buildrisk_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildrisk_5, 
                style: style_buildrisk_5,
                popuplayertitle: "build risk",
                interactive: true,
                title: '<img src="styles/legend/buildrisk_5.png" /> build risk'
            });

lyr_ESRIGraydark_0.setVisible(true);lyr_high_1.setVisible(true);lyr_medium_2.setVisible(true);lyr_Lowrisk_3.setVisible(true);lyr_ScenaridirischioElementilineari_4.setVisible(true);lyr_buildrisk_5.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,lyr_high_1,lyr_medium_2,lyr_Lowrisk_3,lyr_ScenaridirischioElementilineari_4,lyr_buildrisk_5];
lyr_high_1.set('fieldAliases', {'id': 'id', 'rbdname': 'rbdname', 'uomcode': 'uomcode', 'apsfrcode': 'apsfrcode', 'category': 'category', 'eu_cd_hp': 'eu_cd_hp', 'source': 'source', 'character': 'character', 'mechanism': 'mechanism', 'frequency': 'frequency', 'namespace': 'namespace', 'beginlife': 'beginlife', 'detmetod': 'detmetod', });
lyr_medium_2.set('fieldAliases', {'id': 'id', 'rbdname': 'rbdname', 'uomcode': 'uomcode', 'apsfrcode': 'apsfrcode', 'category': 'category', 'eu_cd_hp': 'eu_cd_hp', 'source': 'source', 'character': 'character', 'mechanism': 'mechanism', 'frequency': 'frequency', 'namespace': 'namespace', 'beginlife': 'beginlife', 'detmetod': 'detmetod', });
lyr_Lowrisk_3.set('fieldAliases', {'id': 'id', 'rbdname': 'rbdname', 'uomcode': 'uomcode', 'apsfrcode': 'apsfrcode', 'category': 'category', 'eu_cd_hp': 'eu_cd_hp', 'source': 'source', 'character': 'character', 'mechanism': 'mechanism', 'frequency': 'frequency', 'namespace': 'namespace', 'beginlife': 'beginlife', 'detmetod': 'detmetod', });
lyr_buildrisk_5.set('fieldAliases', {'DESCR_USO': 'DESCR_USO', 'SIGLA_PROV': 'SIGLA_PROV', });
lyr_high_1.set('fieldImages', {'id': 'Range', 'rbdname': 'TextEdit', 'uomcode': 'TextEdit', 'apsfrcode': 'TextEdit', 'category': 'TextEdit', 'eu_cd_hp': 'TextEdit', 'source': 'TextEdit', 'character': 'TextEdit', 'mechanism': 'TextEdit', 'frequency': 'TextEdit', 'namespace': 'TextEdit', 'beginlife': 'TextEdit', 'detmetod': 'TextEdit', });
lyr_medium_2.set('fieldImages', {'id': 'Range', 'rbdname': 'TextEdit', 'uomcode': 'TextEdit', 'apsfrcode': 'TextEdit', 'category': 'TextEdit', 'eu_cd_hp': 'TextEdit', 'source': 'TextEdit', 'character': 'TextEdit', 'mechanism': 'TextEdit', 'frequency': 'TextEdit', 'namespace': 'TextEdit', 'beginlife': 'TextEdit', 'detmetod': 'TextEdit', });
lyr_Lowrisk_3.set('fieldImages', {'id': 'Range', 'rbdname': 'TextEdit', 'uomcode': 'TextEdit', 'apsfrcode': 'TextEdit', 'category': 'TextEdit', 'eu_cd_hp': 'TextEdit', 'source': 'TextEdit', 'character': 'TextEdit', 'mechanism': 'TextEdit', 'frequency': 'TextEdit', 'namespace': 'TextEdit', 'beginlife': 'TextEdit', 'detmetod': 'TextEdit', });
lyr_buildrisk_5.set('fieldImages', {'DESCR_USO': 'TextEdit', 'SIGLA_PROV': 'TextEdit', });
lyr_high_1.set('fieldLabels', {'id': 'no label', 'rbdname': 'no label', 'uomcode': 'no label', 'apsfrcode': 'no label', 'category': 'no label', 'eu_cd_hp': 'no label', 'source': 'no label', 'character': 'no label', 'mechanism': 'no label', 'frequency': 'no label', 'namespace': 'no label', 'beginlife': 'no label', 'detmetod': 'no label', });
lyr_medium_2.set('fieldLabels', {'id': 'no label', 'rbdname': 'no label', 'uomcode': 'no label', 'apsfrcode': 'no label', 'category': 'no label', 'eu_cd_hp': 'no label', 'source': 'no label', 'character': 'no label', 'mechanism': 'no label', 'frequency': 'no label', 'namespace': 'no label', 'beginlife': 'no label', 'detmetod': 'no label', });
lyr_Lowrisk_3.set('fieldLabels', {'id': 'no label', 'rbdname': 'no label', 'uomcode': 'no label', 'apsfrcode': 'no label', 'category': 'no label', 'eu_cd_hp': 'no label', 'source': 'no label', 'character': 'no label', 'mechanism': 'no label', 'frequency': 'no label', 'namespace': 'no label', 'beginlife': 'no label', 'detmetod': 'no label', });
lyr_buildrisk_5.set('fieldLabels', {'DESCR_USO': 'no label', 'SIGLA_PROV': 'no label', });
lyr_buildrisk_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});