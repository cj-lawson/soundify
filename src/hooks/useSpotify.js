import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
// import SpotifyAPI from "../lib/spotify";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
});

const useSpotify = () => {
  // @ts-ignore
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      // @ts-ignore
      if (session.error === "RefreshAccessTokenError") {
        signIn();
      }

      // @ts-ignore
      spotifyApi.setAccessToken(session.user.accessToken);
    }
  }, [session]);

  return spotifyApi;
};

export default useSpotify;
