export async function getServerSideProps(context) {
    const url = `https://maps.googleapis.com/maps/api/place/details/json
    ?place_id=ChIJrTLr-GyuEmsRBfy61i59si0
    &fields=address_components
    &key=${process.env.NEXT_PUBLIC_PLACES_API_KEY}`
    const res = await fetch(url);
    const resJson = await res.json();
    console.log(resJson)

    return {
        props: {
            data: {
                status: resJson.status,
                result: resJson.result,
            }
        }
    }
}

export default function PlaceDetails({ data }) {
    return (

        <p>list {data}</p>
    )
}