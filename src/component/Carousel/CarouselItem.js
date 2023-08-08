import React from 'react'
function CarouselItem({ item }) {
    return (
            <div id="slid1" className=''>
                <div id="sliderImgContainer1" className='relative w-[100vw]'>
                    <img src={item.img} className='w-[100vw] h-[35vh]' alt='...' />
                </div>
                <div id="sliderContent1" className='p-6'>
                    <h1 className='font-semibold text-2xl'>{item.title}</h1>
                    <p className='my-3 text-[16px]'>{item.desc}</p>
                    <button className='bg-[#0067b8] py-2 px-3 my-3 text-white font-bold'>{item.bText}</button>
                    <p className={`text-[#0067b8] ${item.ptext ? "block" : "hidden"} font-semibold pl-1 mt-1`}>For up to fix people<span><i className={`fa fa-thin fa-chevron-right font-semibold text-[15px]`}></i></span></p>
                </div>
            </div>
    )
}

export default CarouselItem
