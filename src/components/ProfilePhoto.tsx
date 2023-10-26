import { getSession, getProviders, useSession } from "next-auth/react";

const ProfilePhoto = () => {
  //@ts-ignore
  const { data: session } = useSession();

  const profilePhoto = session?.user.image;

  return (
    <div className="flex flex-row gap-4">
      <img className="rounded-full" src={`${profilePhoto}`} alt="" />
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl font-bold text-[#1A3F36]">
          {session?.user.name}
        </h3>
        <p className="text-[#1A3F36]">Your top artists</p>
      </div>
    </div>
  );
};

export default ProfilePhoto;
