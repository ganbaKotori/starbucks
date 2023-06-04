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

  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.7749,-122.4194&radius=5000&type=cafe&keyword=starbucks&key=${process.env.NEXT_PUBLIC_PLACES_API_KEY}`;
  const re2 = await fetch(url);
  const data = await re2.json();
  console.log(data);

  // Rest of the API logic
  res.json({ message: "poop" });
}

export default handler;
