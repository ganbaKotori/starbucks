import NextCors from "nextjs-cors";
import axios from "axios";

async function handler(req, res) {
  // Run the cors middleware
  // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  // Obtain query from request
  const { query } = req;
  // Query arguments
  const { lat, lng } = query;

  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=2500&type=cafe&keyword=starbucks&key=${process.env.NEXT_PUBLIC_PLACES_API_KEY}`;
  const url3 = `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJq0UpCQjOwoARnjqTvqokZ0o&key=${process.env.NEXT_PUBLIC_PLACES_API_KEY}`;
  const re2 = await fetch(url);
  const data = await re2.json();
  console.log(data);

  // Rest of the API logic
  res.json(data);
}

export default handler;
