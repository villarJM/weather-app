import './get_started.css';
import '../../../src/index.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function GetStarted() {
  
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/home');
  }
  return (
    <>
      <div className='h-screen w-screen bg-[#0B0C1E]'>
        <div className="relative h-screen w-full bg-gradient-custom overflow-hidden">
          <div class="absolute top-0 right-0 blur-2xl transform translate-x-1/2 -translate-y-1/2  w-80 h-80 bg-[#FFD910] rounded-full"></div>
          <div class="absolute top-0 left-0 blur-2xl transform -translate-x-1/2 -translate-y-1/2  w-80 h-80 bg-[#D71602] rounded-full"></div>
          <div className='landscape:blur-2xl landscape:transform landscape:scale-[1.8] landscape:-translate-y-[27rem] blur-[90px] ellipse max-w-full transform scale-125 -translate-y-40'></div>
          <div className='absolute sun landscape:transform landscape:translate-x-[45%] landscape:-translate-y-52 max-w-full top-0 right-0 transform translate-x-1/3 -translate-y-10 scale-[1.4]'></div>
          <div className='absolute bottom-0 p-5 text-white flex flex-col'>
            <div className='text-4xl font-termina font-bold'>All the latest weather update</div>
            <div className='pt-3 font-epilogue'>Catch the latest buzz from the skies above with our app. Your go-to app which will serve with a side of sunshine and sprinkles!</div>
            <button onClick={handleClick} className='flex justify-between items-center px-5 focus:bg-[#ffd500] bg-[#FFDE31] mt-7 h-[50px] text-black text-lg font-termina'>
              Get started
              <FaLongArrowAltRight  size={25}/>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default GetStarted;
