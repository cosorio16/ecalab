import { useState } from "react";
import data from "../../lib/def";
import QuestionIcon from "../../icons/QuestionIcon";
import ArrowIOS from "../../icons/ArrowIOS";

function QuestionContent() {
  const [current, setCurrent] = useState(0);
  return (
    <section
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col gap-10 items-center py-20"
    >
      <h1 data-aos="zoom-in" className="text-4xl xl:text-5xl font-semibold">
        Preguntas Frecuentes
      </h1>
      <ul
        data-aos="fade-up"
        className="flex flex-col gap-4 px-4 lg:px-10 xl:px-20"
      >
        {data.faq.map((d, i) => (
          <li
            key={i}
            onClick={() => setCurrent(i)}
            className={`flex flex-col gap-2 px-5 py-3 rounded ring  ${
              current == i
                ? "ring-2 ring-offset-2 ring-[#6cc4cc]"
                : "ring-slate-300 hover:ring-2 hover:ring-offset-2 hover:ring-[#6cc4cc]"
            } transition-all duration-300 cursor-pointer`}
          >
            <div className="flex justify-between items-center">
              <h1 className="flex items-center gap-3 font-semibold text-xl lg:text-2xl">
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
              className={`${current == i ? "text-lg xl:text-xl font-medium" : "hidden"}`}
            >
              {d.answer}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default QuestionContent;
