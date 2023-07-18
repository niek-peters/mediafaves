import { T as TMDB_KEY } from "../../../../../../chunks/private.js";
import { e as error, j as json } from "../../../../../../chunks/index.js";
const GET = async ({ params, url }) => {
  let query = params.query;
  const limit = Number(url.searchParams.get("limit")) || 20;
  const offset = 20 * Math.ceil(Number(url.searchParams.get("offset")) / 20) || 0;
  const page = Math.floor(offset / limit) + 1;
  if (!query)
    throw error(400, "No query provided");
  query = query.toLowerCase();
  const res = await fetch(`https://api.themoviedb.org/3/search/tv?query=${query}&page=${page}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_KEY}`
    }
  });
  const data = await res.json();
  const showsDetails = data.results;
  const shows = showsDetails.map((showDetails) => ({
    imdb_show_id: showDetails.id,
    title: showDetails.name,
    release_date: showDetails.first_air_date,
    poster_url: showDetails.poster_path ? `https://image.tmdb.org/t/p/w154${showDetails.poster_path}` : "/empty_image.png",
    backdrop_url: showDetails.backdrop_path ? `https://image.tmdb.org/t/p/original${showDetails.backdrop_path}` : "/empty_image.png"
  }));
  const resultData = {
    count: data.total_results,
    limit,
    offset
  };
  return json({
    results: shows,
    ...resultData
  });
};
export {
  GET
};
