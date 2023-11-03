import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Navigation from "~/components/Navigation";
import { FaSpotify } from "react-icons/fa";

// import { api } from "~/utils/api";

const Login = () => {
  return (
    <>
      <Head>
        <title>Soundify</title>
        <meta name="description" content="Stats for Spotify and Apple music" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="flex h-full w-full flex-col items-center bg-[#F5F3EF]">
        <div className="mb-8 mt-4 w-full max-w-4xl px-12 pb-4 pt-4">
          <Navigation />
          <section className="flex min-h-screen w-full flex-col">
            <div className="container flex w-full flex-col py-16 ">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-[#1A3F36] sm:text-6xl">
                The music you listen to <br></br>the stats you need
              </h1>
              <h3 className="mt-6 max-w-lg text-lg leading-8 text-[#1A3F36]">
                Get statistics about your top artists, songs, and genres from
                Spotify. Updated daily. Easy to share.
              </h3>
              <div className="mt-10 flex">
                <button
                  onClick={() => signIn("spotify")}
                  className="flex flex-row items-center gap-2 rounded-full border bg-[#2C856C] p-4 px-5 py-4 text-sm font-semibold text-white text-white hover:bg-blend-darken focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login with Spotify
                  <FaSpotify className="text-xl" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Login;
