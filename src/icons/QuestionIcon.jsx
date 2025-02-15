function QuestionIcon({ sizes }) {
  return (
    <svg width={sizes} height={sizes} viewBox="0 0 24 24">
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path
          strokeDasharray="28"
          strokeDashoffset="28"
          d="M7 8c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5c0 1.64 -0.79 3.09 -2 4c-0.84 0.63 -3 2 -3 5"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="28;0"
          />
        </path>
        <path strokeDasharray="2" strokeDashoffset="2" d="M12 21v0.01">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.6s"
            dur="0.2s"
            values="2;0"
          />
        </path>
      </g>
    </svg>
  );
}

export default QuestionIcon;
