import Header from "@/components/Header";
import LeftSideBar from "@/components/LeftSideBar";

import { useState } from "react";

export default function MainPage() {
  const [headerTitle, setHeaderTitle] = useState("Friends");
  const [sidebarSize, setSidebarSize] = useState("432");

  return (
    <div>
      <Header title={headerTitle}></Header>
      <main
        className="grid"
        style={{ gridTemplateColumns: `${sidebarSize}px 1fr` }}
      >
        <LeftSideBar sidebarSize={sidebarSize}></LeftSideBar>

        <div>Chat</div>
      </main>
    </div>
  );
}
