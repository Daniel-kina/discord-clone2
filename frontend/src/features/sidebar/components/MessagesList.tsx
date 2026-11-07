import DirectMessageTitle from "./DIrectMessageTitle";
import EmptyMessages from "./EmptyMessages"; // display this if there are 0 messages for this account
import Message from "./Message";

export default function MessagesList() {
  return (
    <div className="flex flex-col gap-1">
      <DirectMessageTitle></DirectMessageTitle>
      <Message></Message>
      <Message></Message>
    </div>
  );
}
