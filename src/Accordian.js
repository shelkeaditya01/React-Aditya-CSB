import { useState } from "react";
const Accordian = () => {
  const faqs = [
    {
      question: "What is React?",
      answer:
        "React is a JavaScript library for building frontend user interfaces.",
    },
    {
      question: "What is JSX?",
      answer: "JSX is a syntax extension for JavaScript used in React.",
    },
    {
      question: "What are hooks?",
      answer:
        "Hooks let you use state and lifecycle features in functional components.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);
  const displayAnswer = (index) => {
    if (openIndex == index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div>
      {faqs.map((fList, index) => (
        <div style={{ margin: "10px" }} key={index}>
          <button onClick={() => displayAnswer(index)}>{fList.question}</button>
          {openIndex === index && <p>{fList.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
