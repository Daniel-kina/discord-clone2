import ToolTip from "@/components/ToolTip";
import DashboardIconAndChevron from "@/features/sidebar/components/DashboardIconAndChevron";
import {
  FaceGrinning,
  Gem,
  Gift,
  ImagePlay,
  Plus,
  Sticker,
} from "lucide-react";

export default function ChatInput() {
  return (
    <div className="bg-discord-dark-secondary px-2 pb-2">
      <div className="flex items-center border border-discord-dark-primary focus-within:border focus-within:border-white bg-discord-dark-primary h-16 rounded-md px-2">
        <div className="pl-2 pr-4">
          <ToolTip
            side="top"
            content="append Files"
            children={
              <DashboardIconAndChevron
                icon={<Plus />}
                onlyIcon={true}
              ></DashboardIconAndChevron>
            }
          ></ToolTip>
        </div>
        <div className="flex-1 h-full ">
          <input
            className="flex-1 w-full h-full outline-none "
            placeholder="Message to Faisal"
          ></input>
        </div>
        <div className="flex gap-3">
          <ToolTip
            side="top"
            content="send a Gift"
            children={
              <DashboardIconAndChevron
                icon={<Gift />}
                onlyIcon={true}
              ></DashboardIconAndChevron>
            }
          ></ToolTip>

          <ToolTip
            side="top"
            content="GIF"
            children={
              <DashboardIconAndChevron
                icon={<ImagePlay />}
                onlyIcon={true}
              ></DashboardIconAndChevron>
            }
          ></ToolTip>
          <ToolTip
            side="top"
            content="Sticker"
            children={
              <DashboardIconAndChevron
                icon={<Sticker />}
                onlyIcon={true}
              ></DashboardIconAndChevron>
            }
          ></ToolTip>
          <ToolTip
            side="top"
            content="emoji"
            children={
              <DashboardIconAndChevron
                icon={<FaceGrinning />}
                onlyIcon={true}
              ></DashboardIconAndChevron>
            }
          ></ToolTip>
          <ToolTip
            side="top"
            content="Play Games"
            children={
              <DashboardIconAndChevron
                icon={<Gem />}
                onlyIcon={true}
              ></DashboardIconAndChevron>
            }
          ></ToolTip>
        </div>
      </div>
    </div>
  );
}

//focus within bessere Farbe aussuchen. beim 2ten div
