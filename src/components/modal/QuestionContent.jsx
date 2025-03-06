import { useState } from "react";
import data from "../../lib/def";
import QuestionIcon from "../../icons/QuestionIcon";
import ArrowIOS from "../../icons/ArrowIOS";

function QuestionContent() {
  const [current, setCurrent] = useState(0);
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col gap-10 items-center"
    >
      <h1 className="text-5xl font-semibold">Preguntas Frecuentes</h1>
      <ul className="flex flex-col gap-4 px-20">
        {data.faq.map((d, i) => (
          <li
            key={i}
            onClick={() => setCurrent(i)}
            className={`flex flex-col gap-2 px-5 py-3 rounded ring  ${
              current == i
                ? "ring-2 ring-offset-2 ring-blue-400"
                : "ring-slate-300 hover:ring-2 hover:ring-offset-2 hover:ring-blue-400"
            } transition-all duration-300 cursor-pointer`}
          >
            <div className="flex justify-between items-center">
              <h1 className="flex items-center gap-3 font-semibold text-2xl">
                <span className="ring-2 aspect-square rounded-full p-0.5 text-[#6cc4cc]">
                  <QuestionIcon sizes={20} />
                </span>
                {d.question}
              </h1>

              {current !== i && (
                <span className="rotate-270">
                  <ArrowIOS sizes={16} />
                </span>
              )}
            </div>
            <span
              className={`${current == i ? "text-lg font-medium" : "hidden"}`}
            >
              {d.answer}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionContent;
