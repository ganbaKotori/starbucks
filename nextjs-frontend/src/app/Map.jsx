"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({ currentLocation }) => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const containerStyle = {
        width: "100%",
        height: "400px",
    };
    return (
        <LoadScript googleMapsApiKey={apiKey}>
            {currentLocation ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={currentLocation}
                    zoom={10}
                ></GoogleMap>
            ) : (
                <div>Loading...</div>
            )}
        </LoadScript>
    );
};

export default Map;
