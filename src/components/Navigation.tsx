import { signOut, signIn, useSession } from "next-auth/react";
import Image from "next/image";
import soundify from "../../public/soundify.svg";
import bmc from "../../public/bmc.svg";

const Navigation = () => {
  const { data: session } = useSession();

  return (
    <nav className="flex flex-row justify-between">
      {/* Nav logo */}
      <div>
        <a href="">
          <Image alt="Soundify logo" src={soundify} />
        </a>
      </div>
      {/* Nav Right */}
      <div className="flex flex-row items-center gap-8">
        <div>
          {/* <a href="https://www.buymeacoffee.com/spicybeefpho">
            <div className="flex flex-row items-center gap-2">
              <h4 className="text-lg text-[#1A3F36]">Buy me a coffee</h4>
              <Image
                alt="Buy me a coffee logo"
                src={bmc}
                style={{ width: "16px" }}
              />
            </div>
          </a> */}
        </div>
        <>
          {session ? (
            <div>
              <button
                onClick={() => signOut()}
                className="rounded-md font-medium text-[#1A3F36]"
              >
                Log out
              </button>
            </div>
          ) : (
            <div>
              <button onClick={() => signIn()}>Sign in</button>
            </div>
          )}
        </>
      </div>
    </nav>
  );
};

export default Navigation;
