import { useState } from "react";
const questions = [
  "What is Frontend Mentor, and how will it help me?",
  "Is Frontend Mentor free?",
  "Can I use Frontend Mentor projects in my portfolio?",
  "How can I get help if I'm stuck on a challenge?",
];
const answers = [
  "We provide front-end challenges that include professional web designs. These allow you to practice building websites in a realistic workflow. Taking these challenges will help you improve your skills, gain experience creating websites, and build up an incredible project portfolio. We also have a large community of developers, so it's a great way to meet other devs!",
  "The majority of our challenges are free, yes. We do have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it's easy to tell the difference.",
  "Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!",
  "The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated 'help' channel! If you haven't joined yet, you can get an invite to our Discord server here.",
];
export default function App() {
  return (
    <div className="app">
      <div className="faq">
        <img src="./icon-star.svg" alt="star"></img>
        <h1>FAQs</h1>
      </div>

      <Questions answers={answers[0]} questions={questions[0]} />
      <Questions answers={answers[1]} questions={questions[1]} />
      <Questions answers={answers[2]} questions={questions[2]} />
      <Questions answers={answers[3]} questions={questions[3]} />
    </div>
  );
}
function Questions({ answers, questions }) {
  const [isOpen, setIsOpen] = useState(false);
  const [expand, setExpand] = useState("icon-plus.svg");
  function handleClick() {
    setIsOpen((current) => !current);
    setExpand((current) =>
      current === "icon-plus.svg" ? "icon-minus.svg" : "icon-plus.svg"
    );
  }

  return (
    <div className="questions">
      <div className="expand" onClick={handleClick}>
        <h2>{questions}</h2>
        <img src={expand} alt="plus"></img>
      </div>
      {isOpen && <p>{answers}</p>}
    </div>
  );
}
