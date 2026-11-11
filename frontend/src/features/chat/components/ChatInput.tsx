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
          <DashboardIconAndChevron
            icon={<Plus />}
            onlyIcon={true}
          ></DashboardIconAndChevron>
        </div>
        <div className="flex-1 h-full ">
          <input
            className="flex-1 w-full h-full outline-none "
            placeholder="Message to Faisal"
          ></input>
        </div>
        <div className="flex gap-3">
          <DashboardIconAndChevron
            icon={<Gift />}
            onlyIcon={true}
          ></DashboardIconAndChevron>
          <DashboardIconAndChevron
            icon={<ImagePlay />}
            onlyIcon={true}
          ></DashboardIconAndChevron>
          <DashboardIconAndChevron
            icon={<Sticker />}
            onlyIcon={true}
          ></DashboardIconAndChevron>
          <DashboardIconAndChevron
            icon={<FaceGrinning />}
            onlyIcon={true}
          ></DashboardIconAndChevron>
          <DashboardIconAndChevron
            icon={<Gem />}
            onlyIcon={true}
          ></DashboardIconAndChevron>
        </div>
      </div>
    </div>
  );
}

//focus within bessere Farbe aussuchen. beim 2ten div
