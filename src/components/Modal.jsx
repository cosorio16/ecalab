import { createPortal } from "react-dom";
import QuestionContent from "./modal/QuestionContent";
import Close from "../icons/Close";

function Modal({ onClose }) {
  return createPortal(
    <div
      onClick={onClose}
      className="fixed top-0 left-0 w-screen h-screen bg-black/50 z-10 p-5 lg:p-10 xl:p-20"
    >
      <div className="w-full h-full bg-white rounded-lg p-5 flex flex-col gap-2">
        <button
          onClick={onClose}
          className="self-end p-2 rounded-full hover:text-white hover:bg-red-500 transition-all duration-300 cursor-pointer"
        >
          <Close sizes={20} />
        </button>
        <QuestionContent />
      </div>
    </div>,
    document.body
  );
}

export default Modal;
