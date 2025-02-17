#!/bin/bash
if [ ! -f /opt/geoserver/data_dir/.initialized ]; then
    echo 'Copiando respaldo inicial...'
    cp -r /tmp/data_dir/* /opt/geoserver/data_dir
    touch /opt/geoserver/data_dir/.initialized
else
    echo 'El respaldo ya fue copiado previamente.'
fi

# Ejecuta GeoServer
exec /start-geoserver.sh
