import { CircleQuestionMark, MailDot, Users } from "lucide-react";

export default function Header({ title }: { title: string }) {
  return (
    <header className="grid grid-cols-[1fr_auto_1fr] items-center px-2 py-2 text-discord-text-header bg-discord-dark-tertiary text-sm">
      <div></div>
      <div className="flex gap-1">
        <Users className="w-4 h-4" />
        <p className="">{title}</p>
      </div>
      <div className="flex gap-2 justify-self-end items-center">
        <MailDot className="w-4 h-4" />
        <CircleQuestionMark className="w-4 h-4" />
      </div>
    </header>
  );
}
