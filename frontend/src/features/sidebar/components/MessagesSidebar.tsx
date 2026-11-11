import { Medal, Store, Users } from "lucide-react";
import SideBarButton from "./SideBarButton";
import FindChatButton from "./FindChatButton";
import MessagesList from "./MessagesList";
import ToolTip from "@/components/ToolTip";

export default function MessagesSidebar() {
  return (
    <div className="border-l border-t rounded-tl-2xl">
      <div className="h-12 py-2 px-2 border-b flex items-center">
        <FindChatButton></FindChatButton>
      </div>
      <div className="flex flex-col justify-around py-2 gap-0.5">
        <ToolTip
          side="right"
          content="Friends"
          children={
            <SideBarButton
              icon={<Users className="w-5 h-5" />}
              text="Friends"
            />
          }
        />

        <ToolTip
          side="right"
          content="Shop"
          children={
            <SideBarButton icon={<Store className="w-5 h-5" />} text="Shop" />
          }
        />

        <ToolTip
          side="right"
          content="Quests"
          children={
            <SideBarButton icon={<Medal className="w-5 h-5" />} text="Quests" />
          }
        />
      </div>
      <div className="seperator w-[95%] h-px bg-black self-center m-auto"></div>
      <MessagesList></MessagesList>
    </div>
  );
}
