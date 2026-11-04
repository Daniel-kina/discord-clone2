import Header from "@/components/Header";
import { useState } from "react";
import { FaDiscord } from "react-icons/fa";

export default function MainPage() {
  const [headerTitle, setHeaderTitle] = useState("Friends");
  const [sidebarSize, setSidebarSize] = useState("432");
  const [sidebarRightSize, setSidebarRightSize] = useState(
    parseInt(sidebarSize) - 72,
  );
  return (
    <div>
      <Header title={headerTitle}></Header>
      <main
        className="grid"
        style={{ gridTemplateColumns: `${sidebarSize}px 1fr` }}
      >
        <div
          className="bg-discord-dark-tertiary h-screen grid"
          style={{ gridTemplateColumns: `72px ${sidebarRightSize}px` }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="h-10">
              <FaDiscord className="w-full h-full" />
            </div>
            <div className="seperator w-[50%] h-px bg-discord-border"></div>
          </div>
          <div>rechts</div>
        </div>
        <div>dwa</div>
      </main>
    </div>
  );
}

// BITTE WAS IN MAIN IST SOFORT in eine SERVERLISTE component schreiben!
// nächster schritt Server componente machen also das icon für die sidebar links
