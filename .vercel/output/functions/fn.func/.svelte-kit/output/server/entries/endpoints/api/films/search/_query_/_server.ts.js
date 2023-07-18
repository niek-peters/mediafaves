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
  if (query === "wall-e")
    query = "wall·e";
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_KEY}`
    }
  });
  const data = await res.json();
  const filmsDetails = data.results;
  const films = filmsDetails.map((filmDetails) => ({
    imdb_id: filmDetails.id,
    // For WALL-E
    title: filmDetails.title.replaceAll("·", "-"),
    release_date: filmDetails.release_date || null,
    poster_url: filmDetails.poster_path ? `https://image.tmdb.org/t/p/w154${filmDetails.poster_path}` : "/empty_image.png",
    backdrop_url: filmDetails.backdrop_path ? `https://image.tmdb.org/t/p/original${filmDetails.backdrop_path}` : "/empty_image.png"
  }));
  const resultData = {
    count: data.total_results,
    limit,
    offset
  };
  return json({
    results: films,
    ...resultData
  });
};
export {
  GET
};
