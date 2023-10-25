import Image from "next/image";
import soundify from "../../public/soundify.svg";
import bmc from "../../public/bmc.svg";

const Navigation = () => {
  return (
    <nav className="flex flex-row justify-between">
      <div>
        <a href="">
          <Image alt="Soundify logo" src={soundify} />
        </a>
      </div>
      <div>
        <a href="https://www.buymeacoffee.com/spicybeefpho">
          <div className="flex flex-row items-center gap-2">
            <h4 className="text-lg text-[#1A3F36]">Buy me a coffee</h4>
            <Image
              alt="Buy me a coffee logo"
              src={bmc}
              style={{ width: "16px" }}
            />
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
