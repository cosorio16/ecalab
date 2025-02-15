import ChatIcon from "../icons/ChatIcon";

function Chat() {
  return (
    <button className="aspect-square bg-green-600 text-white rounded-full p-5 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer z-50">
      <ChatIcon sizes="25" />
    </button>
  );
}

export default Chat;
