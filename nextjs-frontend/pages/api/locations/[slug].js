import NextCors from "nextjs-cors";
import axios from "axios";

export default async function hander(req, res) {
  // Run the cors middleware
  // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { slug } = req.query;

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${slug}&fields=current_opening_hours&key=${process.env.NEXT_PUBLIC_PLACES_API_KEY}`;
  const re2 = await fetch(url);
  const data = await re2.json();
  console.log(data);

  // Rest of the API logic
  res.json(data);

  res.status(200).json(data);
}
