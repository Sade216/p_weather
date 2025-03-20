import React from "react";

import "leaflet/dist/leaflet.css";
import styles from "./map.module.css";

import { Location } from "@/shared/model";

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { divIcon, DivIcon } from "leaflet";

type MarkerProps = {
    location: Location;
    icon?: DivIcon;
};

type Props = {
    location: Location;
    markers: MarkerProps[];
};

export default function Map(props: Props) {
    const defaultIcon = divIcon({
        className: "MapMarker",
        html: '<div style="left: -6px;position: absolute;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg></div>',
    });

    return (
        <MapContainer
            className={styles.Wrapper}
            center={[props.location.lat, props.location.lon]}
            zoom={12}
            scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {props.markers &&
                props.markers.map((marker, key) => (
                    <Marker
                        key={key}
                        icon={marker.icon ? marker.icon : defaultIcon}
                        position={[
                            marker.location.lat,
                            marker.location.lon,
                        ]}></Marker>
                ))}
        </MapContainer>
    );
}
