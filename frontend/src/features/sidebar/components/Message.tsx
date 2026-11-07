import ProfilePic from "./ProfilePic";

export default function Message() {
  return (
    <div className="message px-2 ">
      <a
        href="https://"
        className="flex gap-2 items-center py-1 px-2 hover:bg-discord-dark-primary rounded-md"
      >
        <ProfilePic></ProfilePic>
        <p>Username</p>
      </a>
    </div>
  );
}
