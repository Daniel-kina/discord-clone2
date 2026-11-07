export default function EmptyMessages() {
  return (
    <div className="flex flex-col gap-2 px-4">
      {Array.from({ length: 10 }).map((_, index) => {
        const opacity = Math.max(0.1, 1 - index * 0.1);

        return (
          <div
            style={{ opacity }}
            className="user flex gap-2 items-center"
            key={index}
          >
            <div className="circle h-9 w-9 rounded-4xl bg-discord-dark-primary"></div>
            <div className="name bg-discord-dark-primary h-6 w-40 rounded-2xl"></div>
          </div>
        );
      })}
    </div>
  );
}
