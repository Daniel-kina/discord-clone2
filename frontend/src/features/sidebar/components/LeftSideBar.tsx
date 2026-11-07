import { useState } from "react";
import ServerList from "./ServerList";
import MessagesSidebar from "./MessagesSidebar";
import UserDashboard from "./UserDashboard";

export default function LeftSideBar({ sidebarSize }: { sidebarSize: string }) {
  const [sidebarRightSize, setSidebarRightSize] = useState(
    parseInt(sidebarSize) - 72,
  );

  return (
    <div
      className="bg-discord-dark-tertiary grid grid-rows-[1fr_auto]"
      style={{ gridTemplateColumns: `72px ${sidebarRightSize}px` }}
    >
      <ServerList></ServerList>
      <MessagesSidebar></MessagesSidebar>
      <UserDashboard></UserDashboard>
    </div>
  );
}
