import star from './assets/images/icon-star.svg'
import plus from './assets/images/icon-plus.svg'
import minus from './assets/images/icon-minus.svg'
import { useState } from 'react'

function Question({ question, answer, expand, onClick }) {
  return (
    <li className="question-container" onClick={onClick}>
      <h2 className="question">
        <span>{question}</span>
        <img src={expand ? minus : plus} alt="" />
      </h2>
      {expand && <p className="answer">{answer}</p>}
    </li>
  )
}

export default function App() {
  const [selected, setSelected] = useState(null)

  function handleClick(i) {
    if (selected === i) {
      setSelected(null)
    } else {
      setSelected(i)
    }
  }

  const questions = [
    {
      question: 'What is Frontend Mentor, and how will it help me?',
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      question: 'Is Frontend Mentor free?',
      answer:
        'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
    },
    {
      question: 'Can I use Frontend Mentor projects in my portfolio?',
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      question:
        "How can I get help if I'm stuck on a challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ]

  return (
    <div className="container">
      <div className="header">
        <img className="star" src={star} alt="star" />
        <h1 className="title">FAQs</h1>
      </div>
      <ul className="questions">
        {questions.map((q, i) => (
          <Question
            key={i}
            {...q}
            expand={i === selected}
            onClick={() => handleClick(i)}
          />
        ))}
      </ul>
    </div>
  )
}
