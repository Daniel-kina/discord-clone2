import { Headset, Mic, Settings } from "lucide-react";
import ProfilePic from "./ProfilePic";
import DashboardIconAndChevron from "./DashboardIconAndChevron";

export default function UserDashboard() {
  return (
    <div className="dashboard col-span-2 px-2 py-2 pt-0 bg-discord-dark-tertiary">
      <div className="px-2 py-2 bg-discord-dark-primary rounded-md flex justify-between items-center">
        <div className="flex gap-2 items-center ">
          <ProfilePic></ProfilePic>
          <div className="flex flex-col">
            <p>Kina</p>
            <p>Invisible</p>
          </div>
        </div>
        <div className="flex gap-2  text-gray-500">
          <DashboardIconAndChevron
            icon={<Mic className="hover:text-gray-100"></Mic>}
          ></DashboardIconAndChevron>
          <DashboardIconAndChevron
            icon={<Headset className="hover:text-gray-100" />}
          ></DashboardIconAndChevron>
          <div className="flex gap-0.5 group items-center">
            <div className="hover:bg-discord-bright-primary hover:text-gray-100 py-1 px-1 rounded-md">
              <Settings className=""></Settings>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//alle icons und profilepic usw mit buttons wrappen
