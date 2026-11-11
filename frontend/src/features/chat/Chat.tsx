import ChatInput from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import ChatTop from "./components/chatTop";

export default function Chat() {
  return (
    <div className="flex flex-col ">
      <ChatTop></ChatTop>
      <ChatMessages></ChatMessages>
      <ChatInput></ChatInput>
    </div>
  );
}
