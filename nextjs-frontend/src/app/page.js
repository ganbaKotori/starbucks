"use client";
import Map from "./Map";
import { useEffect, useState } from "react";

const Home = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
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

  return (
    <div>
      <h1>Starbucks Locator</h1>
      <Map currentLocation={currentLocation} />
    </div>
  );
};

export default Home;
