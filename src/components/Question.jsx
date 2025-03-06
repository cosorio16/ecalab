import { useState } from "react";
import QuestionIcon from "../icons/QuestionIcon";
import Modal from "./Modal";

function Question() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        onClick={(e) => {
          setShow(true);
        }}
        className="aspect-square bg-[#6cc4cc] text-white rounded-full p-5 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer "
      >
        <QuestionIcon sizes="25" />
      </button>
      {show && <Modal onClose={() => setShow(false)} />}
    </>
  );
}

export default Question;
