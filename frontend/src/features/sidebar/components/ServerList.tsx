import { FaDiscord } from "react-icons/fa";
import ServerIcon from "./ServerIcon";

export default function ServerList() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className=" bg-discord-blurple text-gray-200 rounded-xl w-10 h-10 flex justify-center items-center cursor-pointer">
        <FaDiscord className="w-6 h-6" />
      </div>

      <div className="seperator w-[50%] h-px bg-discord-border "></div>
      <div></div>
      <ServerIcon icon="./funny-cat-35.jpg"></ServerIcon>
      <ServerIcon icon="./funny-cat-35.jpg"></ServerIcon>
    </div>
  );
}
