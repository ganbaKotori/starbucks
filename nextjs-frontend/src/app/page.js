"use client";
import Map from "./Map";
import LocationList from "./LocationList";
import Header from "./Header";
import { useEffect, useState } from "react";

const Home = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          console.log(location);
          setCurrentLocation(location);
        },
        function (error) {
          console.error("Error getting current location:", error);
          setCurrentLocation({ lat: 37.7749, lng: -122.4194 }); // Default center coordinates (San Francisco)
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setCurrentLocation({ lat: 37.7749, lng: -122.4194 }); // Default center coordinates (San Francisco)
    }
  }, []);

  useEffect(() => {
    if (currentLocation === null) {
    } else {
      const { lat, lng } = currentLocation;
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/locations?lat=${lat}&lng=${lng}`);
          const data = await response.json();
          setLocations(data.results);
        } catch (error) {
          console.error("Error:", error);
        }
      };

      fetchData();
    }
  }, [currentLocation]);

  return (
    <div>
      <Header />
      <Map currentLocation={currentLocation} locations={locations} />
      <LocationList locations={locations} />
    </div>
  );
};

export default Home;
