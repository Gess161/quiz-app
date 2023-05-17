import Image from "next/image";
import LOGO from "../../../public/logo.png";
import BackButton from "../BackButton";
import Counter from "../Counter";

const HeaderSection = ({step, maxSteps, handlePreviousStep}) => {
  return (
    <div className="flex items-center h-[52px] px-5 border-b-[1px] border-gray-300 justify-between">
      <BackButton handlePreviousStep={handlePreviousStep}/>
      <Image className="w-[100px] h-[35px]" src={LOGO} alt="Logo" />
      <Counter step={step} maxSteps={maxSteps} />
    </div>
  )
}

export default HeaderSection;