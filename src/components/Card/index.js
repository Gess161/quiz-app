import HeaderSection from "./HeaderSection";
import QuestionSection from "./QuestionSection";
import AnswerButton from "../AnswerButton";

const Card = ({ step, questions, handlePreviousStep, handleSelectAnswer }) => {
  const currentQuestion = questions[step];

  const { answers } = currentQuestion;

  return (
    <div className="relative shadow-2xl shadow-rose-200 h-fit">
      <div className="bg-white h-fit w-[500px] ">
        <HeaderSection step={step} maxSteps={questions.length} handlePreviousStep={handlePreviousStep} />
        <QuestionSection state={currentQuestion} />
      </div>
      <div className="shadow-2xl shadow-rose-200 absolute bottom-0 min-w-full bg-white p-6 flex-col justify-center">
        {answers.map((item) =>
          <AnswerButton
            onClick={() => handleSelectAnswer(item, currentQuestion)}
            key={item.id}
          >
            {item.text}
          </AnswerButton>
        )}
      </div>
    </div>

  )
}

export default Card;