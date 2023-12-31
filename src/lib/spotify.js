import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-email",
  "user-read-private",
  "user-read-playback-position",
  "user-top-read",
  "user-read-recently-played",
  "user-follow-read",
  "user-library-read",
  "user-read-currently-playing",
].join(",");

const params = {
  scope: scopes,
};

const queryParamString = new URLSearchParams(params);

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;

const SpotifyAPI = new SpotifyWebApi({
  // @ts-ignore
  clientID: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
});

export default SpotifyAPI;

export { LOGIN_URL };
