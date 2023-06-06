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
            <ol className="list-decimal">
                {locations.map((location, index) => (
                    <li key={index}>{location.vicinity}</li>
                ))}
            </ol>
        </div>
    );
};

export default LocationList;
