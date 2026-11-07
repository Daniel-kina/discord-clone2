import { Ellipsis, Plus } from "lucide-react";

export default function DirectMessageTitle() {
  return (
    <div className="flex justify-between px-4 py-1">
      <p>Messages</p>
      <div>
        <div className="flex gap-2">
          <span>
            <Ellipsis />
          </span>
          <span className="relative group">
            <Plus />

            <div className="absolute left-full ml-3 px-3 py-1.5 bg-[#111214] text-white text-sm font-semibold rounded-md shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap z-50">
              Create Message
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
