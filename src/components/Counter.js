const Counter = ({step, maxSteps}) => {

  const handleDoubleDigits = (number) => {
    if(number < 10) return `0${number}`
    return number
  }

  return (
    <div className="flex w-[50px] items-center text-teal-300 font-semibold text-[13px]">
      <p className="bg-teal-300 px-[2px] text-white rounded-[16px] ">{handleDoubleDigits(step + 1)}</p>
      <p className="">/{handleDoubleDigits(maxSteps)}</p>
    </div>
  )
}

export default Counter;