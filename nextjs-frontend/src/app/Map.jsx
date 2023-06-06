"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({ currentLocation, locations }) => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const containerStyle = {
        width: "100%",
        height: "90vh",
    };
    return (
        <LoadScript googleMapsApiKey={apiKey}>
            {currentLocation && locations ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={currentLocation}
                    zoom={12}
                >
                    {locations.map((location, index) => (
                        <Marker key={index} position={{ lat: location.geometry.location.lat, lng: location.geometry.location.lng }} />
                    ))}
                </GoogleMap>
            ) : (
                <div>Loading...</div>
            )}
        </LoadScript>
    );
};

export default Map;
