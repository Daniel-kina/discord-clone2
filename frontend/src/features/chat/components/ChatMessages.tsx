import Message from "./Message";

export default function ChatMessages() {
  return (
    <div className="bg-discord-dark-secondary h-full flex flex-col justify-end ">
      <Message text="this is me Mario" date={new Date()}></Message>
      <Message
        text="this is me Luigi!"
        onlyText={true}
        date={new Date()}
      ></Message>
    </div>
  );
}
