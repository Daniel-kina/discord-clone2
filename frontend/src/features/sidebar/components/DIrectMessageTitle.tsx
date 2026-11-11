import ToolTip from "@/components/ToolTip";
import { Ellipsis, Plus } from "lucide-react";

export default function DirectMessageTitle() {
  return (
    <div className="flex justify-between px-4 py-1">
      <p>Messages</p>
      <div>
        <div className="flex gap-2">
          <span>
            <ToolTip
              side="right"
              content="clear chats"
              children={<Ellipsis />}
            ></ToolTip>
          </span>
          <span className="relative group">
            <ToolTip
              side="right"
              content="start message"
              children={<Plus />}
            ></ToolTip>
          </span>
        </div>
      </div>
    </div>
  );
}
