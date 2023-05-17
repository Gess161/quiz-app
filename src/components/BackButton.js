import Image from "next/image";
import ARROWICON from "../../public/back-arrow-icon.svg";

const BackButton = ({handlePreviousStep}) => {
  return (
    <button onClick={handlePreviousStep}>
      <Image className="w-[25px] h-[15px]" src={ARROWICON} alt="Logo" />
    </button>
  )
}

export default BackButton;