import QuestionIcon from "../icons/QuestionIcon";

function Question() {
  return (
    <button className="aspect-square bg-blue-500 text-white rounded-full p-5 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer ">
      <QuestionIcon sizes="25" />
    </button>
  );
}

export default Question;
