import { useState } from "react";
import ServerList from "./ServerList";
import MessagesSidebar from "./MessagesSidebar";

export default function LeftSideBar({ sidebarSize }: { sidebarSize: string }) {
  const [sidebarRightSize, setSidebarRightSize] = useState(
    parseInt(sidebarSize) - 72,
  );

  return (
    <div
      className="bg-discord-dark-tertiary h-screen grid"
      style={{ gridTemplateColumns: `72px ${sidebarRightSize}px` }}
    >
      <ServerList></ServerList>
      <MessagesSidebar></MessagesSidebar>
    </div>
  );
}
