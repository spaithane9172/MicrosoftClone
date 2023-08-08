import React from 'react'

function CheckPcCard({ data }) {
    return (
        <div className='flex flex-col justify-center items-center p-3'>
            <div className='flex flex-col justify-center mb-14'>
                <img src={data.img} className='w-[100]' alt="..." />
                <div className='pl-[0.75rem] mt-11 w-fit'>
                    <h1 className='font-semibold text-[1.5rem] pb-1'>{data.heading}</h1>
                    <p className='pb-5'>{data.description}</p>
                    <button className='font-semibold bg-[#0067b8] w-fit flex justify-center items-center p-2 px-4 text-white'>{data.url}</button>
                </div>
            </div>
        </div>
    )
}

export default CheckPcCard
