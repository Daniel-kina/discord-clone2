interface Status {
  offline: string;
  online: string;
  doNotDisturb: string;
  away: string;
}

export default function ProfilePic({ status }: { status: keyof Status }) {
  const statusClasses: Status = {
    offline: "bg-discord-bright-primary",
    online: "bg-green-400",
    doNotDisturb: "bg-red-400",
    away: "bg-yellow-400",
  };

  return (
    <div className="relative rounded-4xl h-9 w-9">
      <img
        src="./funny-cat-35.jpg"
        alt="img"
        className="w-full h-full rounded-4xl"
      />
      <div className="outerRing absolute flex items-center justify-center w-4 h-4 bottom-[-2px] right-[-3px] rounded-4xl  bg-discord-dark-primary">
        <div
          className={`statusRing ${statusClasses[status]} w-2.5 h-2.5 rounded-4xl flex items-center justify-center`}
        >
          <div className="innerRing w-1 h-1 bg-discord-dark-primary rounded-4xl"></div>
        </div>
      </div>
    </div>
  );
}

// Verschiende Status möglichkeiten implementieren
