interface ServerIconProps {
  icon: React.ReactNode;
  text: string;
}

export default function SideBarButton({ icon, text }: ServerIconProps) {
  return (
    <div className="px-2 w-full">
      <button className="flex items-center gap-2 w-full p-2 text-left hover:bg-zinc-700/50 cursor-pointer rounded-lg transition-colors">
        {/* Das Icon */}
        <span className="flex items-center justify-center">{icon}</span>

        {/* Der Text */}
        <span className="text-white font-medium">{text}</span>
      </button>
    </div>
  );
}
