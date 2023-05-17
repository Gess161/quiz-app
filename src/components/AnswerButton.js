const AnswerButton = ({ children, ...restProps }) => {
  return (
    <button {...restProps} className="bg-rose-500 w-full p-3 rounded-3xl mb-3 text-white">
      {children}
    </button>
  )
}

export default AnswerButton;