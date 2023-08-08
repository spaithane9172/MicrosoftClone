import React from 'react'

function CourseCard({courseData}) {
  return (
    <div className='flex flex-col justify-center mb-14'>
      <img src={courseData.img} className='relative w-[100] pb-3' alt="..." />
      <h1 className='font-semibold text-[1.30rem] pb-1'>{courseData.heading}</h1>
      <p className='pb-5'>{courseData.description}</p>
      <a href="/" className='font-semibold text-[#0067b8] pb-4'>{courseData.url} <span className='text-2xl leading-4'>&gt;</span></a>
      <a href="/" className='font-semibold text-[#0067b8]'>{courseData.url1} <span className={`${courseData.url1.length===0?"hidden":""} text-2xl leading-4`}>&gt;</span></a>
    </div>
  )
}

export default CourseCard
