import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import SpotifyAPI, { LOGIN_URL } from "../../../lib/spotify";

async function refreshAccessToken(token: any) {
  try {
    SpotifyAPI.setAccessToken(token.accessToken);
    SpotifyAPI.setRefreshToken(token.refreshToken);

    const { body: refreshedToken } = await SpotifyAPI.refreshAccessToken();
    console.log("REFRESHED TOKEN IS", refreshedToken);
    return {
      ...token,
      accessToken: refreshedToken.access_token,
      // @ts-ignore
      accessTokenExpires: Date.now + refreshedToken.expires_in * 10000,
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.error(error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const authOptions = {
  // Configure one or more auth providers
  providers: [
    SpotifyProvider({
      // @ts-ignore
      clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
      // @ts-ignore
      clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
    // ..add more providers here
    //  ie songkick, apple music, etc
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account, user }: any) {
      // initial sign in
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000,
        };
      }
      // Return previous token if the access token has not expired yet
      if (Date.now() < token.accessTokenExpires) {
        return token;
      }

      //   Access token has expired, so we need to refresh it
      console.log("ACCESS TOKEN HAS EXPIRED, REFRESHING...");
      return await refreshAccessToken(token);
    },

    async session({ session, token }: any) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;

      return session;
    },
  },
};

export default NextAuth(authOptions);
