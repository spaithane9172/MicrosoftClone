import React,{useState} from 'react'

function CarouselNavigation(props) {
    const [playButton, setButton] = useState(false);
    const [buttonType, setButtonType] = useState("regular");
    const {sliderRef,slideIndex}=props;
    let prevSlide = () => {
        sliderRef.current.slickPrev();
    }
    let nextSlide = () => {
        sliderRef.current.slickNext();
    }
    const ppButton = () => {
        setButtonType("thin");
        if (!playButton) {
            sliderRef.current.slickPause();
            setButton(true)
        } else { setButton(false); sliderRef.current.slickPlay() }
    }

  return (
    <div className='mt-5 flex justify-center item-center  mb-8'>
                <div className='flex justify-center items-center mr-6'>
                    <i id="thinPlayBtn" onClick={ppButton} className={`self-center ${playButton ? "hidden" : "block"} fa fa-${buttonType} fa-circle-pause fa-lg mr-6 absolute`}></i>
                    <i onClick={ppButton} className={`self-center ${playButton ? "block" : "hidden"} fa fa-thin fa-circle-play fa-lg mr-6 absolute`}></i>
                </div>


                <div className='w-5 h-5 font-light flex justify-center items-center text-4xl pb-2 mr-6' onClick={prevSlide}>
                    &lt;
                </div>
                <div className={`w-[10px] h-[10px] bg-${slideIndex === 0 ? "black" : "white"} self-center rounded-xl border border-1 border-black flex justify-center items-center mr-6`}>
                </div>
                <div className={`w-[10px] h-[10px] bg-${slideIndex === 0 ? "white" : "black"} self-center rounded-xl border border-1 border-black flex justify-center items-center mr-6`}>
                </div>
                <div className='w-5 h-5 font-light flex justify-center items-center text-4xl pb-2' onClick={nextSlide}>
                    &gt;
                </div>
            </div>
  )
}

export default CarouselNavigation
