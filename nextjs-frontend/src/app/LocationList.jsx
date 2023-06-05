import React, { useState, useEffect } from 'react';

const LocationList = ({ currentLocation }) => {

    if (currentLocation === null) {
        return (
            <div>
                <h2>Locations</h2>
            </div>
        );
    }

    const [locations, setLocations] = useState([]);
    const { lat, lng } = currentLocation;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/locations?lat=${lat}&lng=${lng}`);
                const data = await response.json();
                setLocations(data.results);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [lat, lng]);

    return (
        <div>
            <h2>Locations</h2>
            <ul>
                {locations.map((location) => (
                    <li key={location.icon}>{location.vicinity}</li>
                ))}
            </ul>
        </div>
    );
};

export default LocationList;
