import { ChevronDown } from "lucide-react";

export default function DashboardIconAndChevron({
  icon,
  isChevron = true,
}: {
  icon: React.ReactNode;
  isChevron?: boolean;
}) {
  return (
    <div className="flex gap-0.5 group items-center">
      <div className="group-hover:bg-discord-bright-primary py-1 px-1 rounded-tl-md rounded-bl-md hover:text-gray-100">
        {icon}
      </div>
      {isChevron ? (
        <div className="group-hover:bg-discord-bright-primary py-1 rounded-tr-md rounded-br-md hover:text-gray-100">
          <ChevronDown className="w-4 " />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
