import Whatsapp from "../icons/Whatsapp";

function Chat() {
  const handleOpenWhatsapp = () => {
    const number = "573206852825";
    const message = "Hola";

    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <button
      onClick={() => handleOpenWhatsapp()}
      className="aspect-square bg-green-600 text-white rounded-full p-3 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer z-50 "
    >
      <Whatsapp sizes="35" />
    </button>
  );
}

export default Chat;
