import ProfilePic from "@/features/sidebar/components/ProfilePic";
import type { Message } from "../types";

export default function Message({ text, onlyText, date }: Message) {
  if (onlyText) {
    return (
      <div className="hover:bg-discord-bright-primary">
        <div className="flex gap-3.5 w-full px-6">
          <div className="flex items-center  w-12">
            {date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </div>
          <div className="flex flex-col ">
            <div>{text}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="hover:bg-discord-bright-primary">
      <div className="flex gap-3.5 w-full py-1 px-6">
        <div className="flex items-center h-12 w-12">
          <img src="./funny-cat-35.jpg" alt="" className="w-full rounded-4xl" />
        </div>
        <div className="flex flex-col ">
          <div>
            <span className="font-bold">Faisal</span>{" "}
            <span className="text-xs">07.11.26, 01:07</span>
          </div>
          <div>{text}</div>
        </div>
      </div>
    </div>
  );
}

// Date in div rein schreiben
