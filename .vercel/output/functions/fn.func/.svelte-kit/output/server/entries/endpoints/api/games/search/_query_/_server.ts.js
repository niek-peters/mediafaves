import { R as RAWG_API_KEY } from "../../../../../../chunks/private.js";
import { e as error, j as json } from "../../../../../../chunks/index.js";
const GET = async ({ params, url }) => {
  let query = params.query;
  const limit = Number(url.searchParams.get("limit")) || 20;
  const offset = 20 * Math.ceil(Number(url.searchParams.get("offset")) / 20) || 0;
  const page = Math.floor(offset / limit) + 1;
  if (!query)
    throw error(400, "No query provided");
  query = query.toLowerCase();
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${RAWG_API_KEY}&search=${query}&page=${page}`
  );
  const data = await res.json();
  const gamesDetails = data.results;
  const games = gamesDetails.map((gameDetails) => ({
    rawg_id: gameDetails.id,
    title: gameDetails.name,
    release_date: gameDetails.released,
    poster_url: gameDetails.background_image ? gameDetails.background_image.replace("/media/games", "/media/resize/200/-/games") : "/empty_image.png",
    backdrop_url: gameDetails.background_image ? gameDetails.background_image : "/empty_image.png"
  }));
  const resultData = {
    count: data.count,
    limit,
    offset
  };
  return json({
    results: games,
    ...resultData
  });
};
export {
  GET
};
