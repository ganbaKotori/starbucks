const LocationList = ({ locations }) => {

    if (locations === null) {
        return (
            <div>
                <h2>Loading Locations...</h2>
            </div>
        );
    }
    return (
        <div>
            <h2>Locations</h2>
            <ul>
                {locations.map((location, index) => (
                    <li key={index}>{location.vicinity}</li>
                ))}
            </ul>
        </div>
    );
};

export default LocationList;
