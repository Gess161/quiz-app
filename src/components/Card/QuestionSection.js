const QuestionSection = ({ state }) => {
  const { id, text } = state;
  return (
    <div className="h-[400px] bg-[url('/card-bg.jpeg')] bg-[center_0]">
      <h1 className="text-black font-bold text-[26px] flex justify-center pt-5 font-sans">
        {text}
      </h1>
    </div>
  )
}

export default QuestionSection;