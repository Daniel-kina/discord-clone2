import { Medal, Store, Users } from "lucide-react";
import SideBarButton from "./SideBarButton";
import FindChatButton from "./FindChatButton";

export default function MessagesSidebar() {
  return (
    <div className="h-screen border-l border-t rounded-tl-2xl">
      <div className="h-12 py-2 px-2 border-b flex items-center">
        <FindChatButton></FindChatButton>
      </div>
      <div className="flex flex-col justify-around py-2 gap-0.5">
        <SideBarButton
          icon={<Users className="w-5 h-5" />}
          text="Friends"
        ></SideBarButton>
        <SideBarButton
          icon={<Store className="w-5 h-5" />}
          text="Shop"
        ></SideBarButton>
        <SideBarButton
          icon={<Medal className="w-5 h-5" />}
          text="Quests"
        ></SideBarButton>
      </div>
      <div className="seperator w-[95%] h-px bg-black self-center m-auto"></div>
    </div>
  );
}
