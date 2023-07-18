import { e as error, j as json } from "../../../../../../chunks/index.js";
import { spotifyToken } from "../../../../../../chunks/hooks.server.js";
const GET = async ({ params, url }) => {
  if (!spotifyToken)
    throw error(500, "Spotify token not found");
  const limit = Number(url.searchParams.get("limit")) || 20;
  const offset = Number(url.searchParams.get("offset")) || 0;
  let query = params.query;
  if (!query)
    throw error(400, "No query provided");
  query = query.toLowerCase();
  const res = await fetch(
    `https://api.spotify.com/v1/search?q=track:${query}&type=track&limit=${limit}&offset=${offset}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${spotifyToken.access_token}`
      }
    }
  );
  const data = await res.json();
  const songDetails = data.tracks.items;
  const songs = songDetails.map((songDetails2) => ({
    spotify_id: songDetails2.id,
    title: songDetails2.name,
    release_date: songDetails2.album.release_date,
    poster_url: songDetails2.album.images.length ? getLowestAcceptableImage(songDetails2.album.images).url : "/empty_image.png",
    backdrop_url: songDetails2.album.images.length ? songDetails2.album.images[0].url : "/empty_image.png",
    artists: songDetails2.artists.map((artist) => artist.name)
  }));
  const resultData = {
    count: data.tracks.total,
    limit,
    offset
  };
  return json({
    results: songs,
    ...resultData
  });
};
function getLowestAcceptableImage(images) {
  const acceptableHeight = 200;
  let lowestAcceptableImage = images[0];
  for (let i = images.length - 1; i >= 0; i--) {
    const image = images[i];
    if (image.height === null)
      continue;
    if (image.height >= acceptableHeight) {
      lowestAcceptableImage = image;
      break;
    }
  }
  return lowestAcceptableImage;
}
export {
  GET
};
