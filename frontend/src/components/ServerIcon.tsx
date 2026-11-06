interface ServerIconProps {
  icon: string | React.ReactNode;
}

//server-icon class defined in index.css

export default function ServerIcon({ icon }: ServerIconProps) {
  return (
    <div className="server-icon bg-discord-dark-secondary text-gray-200  rounded-xl w-10 h-10 flex justify-center items-center cursor-pointer overflow-hidden">
      {typeof icon === "string" ? (
        <img src={icon} alt="img" className="w-full h-full object-cover" />
      ) : (
        icon
      )}
    </div>
  );
}
