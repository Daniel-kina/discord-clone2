import ProfilePic from "@/features/sidebar/components/ProfilePic";
import type { Message } from "../types";

export default function Message({ text, onlyText = false, date }: Message) {
  const formattedTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // Set to true if you prefer 12-hour format with AM/PM
  });

  return (
    <div className="hover:bg-discord-bright-primary">
      <div className="flex gap-3.5 w-full py-1 px-6">
        {onlyText ? (
          <div className="flex gap-3.5">
            <div className="flex items-center justify-center w-12">
              {formattedTime}
            </div>
            <div className="flex ">
              <div>{text}</div>
            </div>
          </div>
        ) : (
          <div className="flex items-center h-12 w-12">
            <img
              src="./funny-cat-35.jpg"
              alt=""
              className="w-full rounded-4xl"
            />
          </div>
        )}

        {!onlyText && (
          <div>
            <div>
              <span className="font-bold">Faisal</span>{" "}
              <span className="text-xs">07.11.26, 01:07</span>
            </div>
            <div>{text}</div>
          </div>
        )}
      </div>
    </div>
  );
}

// Date in div rein schreiben
