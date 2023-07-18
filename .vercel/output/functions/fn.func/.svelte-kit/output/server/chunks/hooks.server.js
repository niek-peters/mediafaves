import { S as SPOTIFY_CLIENT_ID, a as SPOTIFY_CLIENT_SECRET } from "./private.js";
async function getSpotifyToken() {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `grant_type=client_credentials&client_id=${SPOTIFY_CLIENT_ID}&client_secret=${SPOTIFY_CLIENT_SECRET}`
  });
  const token = await res.json();
  spotifyToken = token;
  setTimeout(getSpotifyToken, token.expires_in * 1e3);
}
getSpotifyToken();
let spotifyToken;
export {
  spotifyToken
};
