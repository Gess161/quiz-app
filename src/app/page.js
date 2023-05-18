"use client"

import AnswerButton from "@/components/AnswerButton";
import { useState } from "react"
import Card from "../components/Card"

const mockQuestions = [
  { id: 1, text: "Select your baby gender", answers: [{ id: 1, text: 'Boy' }, { id: 0, text: 'Girl' }] },
  { id: 2, text: "How old is your baby?", answers: [{ id: 1, text: 'Under 6 months' }, { id: 2, text: "6-8 months" }, { id: 3, text: '8-10 months' }, { id: 4, text: 'Over 10 months' }] },
  { id: 3, text: "What is your babys current weight?", answers: [{ id: 1, text: 'Under 10 pounds' }, { id: 2, text: '10-15 pounds' }, { id: 3, text: '15-20 pounds' }, { id: 4, text: 'Over 20 pounds' }] }
]

export default function Home() {
  const [step, setStep] = useState(0);
  const [answers, setAnswer] = useState([])

  const handleNextStep = (maxSteps) => {
    if (step === mockQuestions.length) return;
    setStep(step + 1)
  }

  const handlePreviousStep = () => {
    if (step === 0) return;

    setAnswer(curr => curr.slice(0, -1))
    setStep(step - 1);
  }

  const handleSelectAnswer = (answer, question) => {
    const selectedAnswer = {
      question,
      answer
    }

    setAnswer(curr => [...curr, selectedAnswer])
    handleNextStep()
  }

  const handleReset = () => {
    setStep(0)
    setAnswer([])
  }

  return (
    <main className="flex min-h-screen h-full flex-col items-center pt-7 bg-[url('/bg.jpeg')] bg-cover">
      {step === mockQuestions.length ?
        <div className="text-black bg-white shadow-rose-400 shadow-2xl p-6 flex-col justify-center items-center">
          <p>Here are your results:</p>
          {answers.map(item =>
            <li className="flex-col mb-4" key={item.id}>
              <p >Question: {item.question.text}</p>
              <p >Answer: {item.answer.text}</p>
            </li>
          )}
          <AnswerButton onClick={handleReset}>
            Click here to return to first step
          </AnswerButton>
        </div> :
        <Card
          step={step}
          questions={mockQuestions}
          handlePreviousStep={handlePreviousStep}
          handleSelectAnswer={handleSelectAnswer}
        />
      }

    </main>
  )
}
