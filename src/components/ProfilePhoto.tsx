import { getSession, getProviders, useSession } from "next-auth/react";
import useSpotify from "~/hooks/useSpotify";
import { useState, useEffect } from "react";
// import useSWR from 'swr';
import { animate } from "framer-motion";

function AnimatedBars() {
  useEffect(() => {
    //@ts-ignore
    animate(
      "#bar1",
      {
        transform: [
          "scaleY(1.0) translateY(0rem)",
          "scaleY(1.5) translateY(-0.082rem)",
          "scaleY(1.0) translateY(0rem)",
        ],
      },
      {
        duration: 1.0,
        repeat: Infinity,
        easing: ["ease-in-out"],
      },
    );
    //@ts-ignore
    animate(
      "#bar2",
      {
        transform: [
          "scaleY(1.0) translateY(0rem)",
          "scaleY(3) translateY(-0.083rem)",
          "scaleY(1.0) translateY(0rem)",
        ],
      },
      {
        delay: 0.2,
        duration: 1.5,
        repeat: Infinity,
        easing: ["ease-in-out"],
      },
    );
    //@ts-ignore
    animate(
      "#bar3",
      {
        transform: [
          "scaleY(1.0)  translateY(0rem)",
          "scaleY(0.5) translateY(0.37rem)",
          "scaleY(1.0)  translateY(0rem)",
        ],
      },
      {
        delay: 0.3,
        duration: 1.5,
        repeat: Infinity,
        easing: ["ease-in-out"],
      },
    );
  }, []);

  return (
    <div className="flex w-auto items-end overflow-hidden">
      <span
        id="bar1"
        className="mr-[3px] h-2 w-1 bg-gray-300 opacity-75 dark:bg-[#1ED760]"
      />
      <span
        id="bar2"
        className="mr-[3px] h-1 w-1 bg-gray-300 dark:bg-[#1ED760]"
      />
      <span
        id="bar3"
        className="h-3 w-1 bg-gray-300 opacity-80 dark:bg-[#1ED760]"
      />
    </div>
  );
}

const ProfilePhoto = () => {
  //@ts-ignore
  const { data: session } = useSession();
  const spotifyApi = useSpotify();

  const [currentTrack, setCurrentTrack] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi
        .getMyCurrentPlayingTrack()
        .then((data) => {
          setIsLoading(false);
          // @ts-ignore
          setCurrentTrack(data.body.item);
        })
        .catch((e) => {
          console.log("error", e);
          setIsLoading(false);
        });
    }
  }, [session, spotifyApi, currentTrack]);

  // @ts-ignore

  console.log(currentTrack);

  const profilePhoto = session?.user.image;

  return (
    <div className="flex flex-row justify-between gap-4">
      <div className="flex w-full flex-row gap-3">
        <img className="rounded-full" src={`${profilePhoto}`} alt="" />
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-bold text-[#1A3F36]">
            {session?.user.name}
          </h3>
          <p className="w-full text-[#1A3F36]">Your top artists</p>
        </div>
      </div>

      {/* Currently playing */}
      <div className="flex flex-col">
        <span>Now playing</span>
        <div className="flex w-[280px] w-full w-full items-center gap-4 rounded-md border-2 border-[#1A3F36] pb-2 pl-1 pr-1 pt-2">
          <img
            className="h-[44px] w-[44px] rounded-sm"
            src={currentTrack.album?.images[0].url}
            alt=""
          />

          <div className="flex flex-row items-center gap-2">
            <div>
              <>
                <AnimatedBars />
              </>
            </div>
            <div className="flex flex-col">
              <div>{currentTrack.name}</div>
              <div>
                {isLoading ? (
                  <p>Finding name...</p>
                ) : (
                  <div className="text-xs">{currentTrack.artists[0].name}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhoto;
