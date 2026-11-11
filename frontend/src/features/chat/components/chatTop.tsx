import DashboardIconAndChevron from "@/features/sidebar/components/DashboardIconAndChevron";
import ProfilePic from "@/features/sidebar/components/ProfilePic";
import { Phone, Pin, UserGroup, UserPlus, Video } from "lucide-react";

export default function ChatTop() {
  return (
    <div className="h-[49px] py-2 px-2 flex justify-between items-center bg-discord-dark-secondary border-t border-b">
      <div className="flex h-8 items-center gap-2">
        <ProfilePic></ProfilePic>
        <span>Faisal</span>
      </div>
      <div className="flex gap-4">
        <DashboardIconAndChevron
          icon={<Phone />}
          onlyIcon={true}
        ></DashboardIconAndChevron>

        <DashboardIconAndChevron
          icon={<Video />}
          onlyIcon={true}
        ></DashboardIconAndChevron>
        <DashboardIconAndChevron
          icon={<Pin />}
          onlyIcon={true}
        ></DashboardIconAndChevron>
        <DashboardIconAndChevron
          icon={<UserPlus />}
          onlyIcon={true}
        ></DashboardIconAndChevron>
        <DashboardIconAndChevron
          icon={<UserGroup />}
          onlyIcon={true}
        ></DashboardIconAndChevron>
      </div>
    </div>
  );
}
