import React from 'react'

function ServiceItem({service}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={service.img} alt="..." className='mb-2'/>
      <p className='underline text-blue-600 font-medium mb-8'>{service.title}</p>
    </div>
  )
}

export default ServiceItem
