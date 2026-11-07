import Header from "@/components/Header";
import LeftSideBar from "@/features/sidebar/components/LeftSideBar";

import { useState } from "react";

export default function MainPage() {
  const [headerTitle, setHeaderTitle] = useState("Friends");
  const [sidebarSize, setSidebarSize] = useState("432");

  return (
    <div className="h-screen flex flex-col">
      <Header title={headerTitle}></Header>
      <main
        className="grid text-white h-full"
        style={{ gridTemplateColumns: `${sidebarSize}px 1fr` }}
      >
        <LeftSideBar sidebarSize={sidebarSize}></LeftSideBar>

        <div>Chat</div>
      </main>
    </div>
  );
}
