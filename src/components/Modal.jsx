import { useState } from "react";
import { createPortal } from "react-dom";

function Modal() {
  return createPortal(
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 z-10 p-20">
      <div className="w-full h-full bg-white rounded-lg"></div>
    </div>,
    document.body
  );
}

export default Modal;
