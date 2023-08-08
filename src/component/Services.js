import React from 'react';
import winIcon from "../img/windowsIcon.jpg";
import pcIcon from "../img/pcIcon.jpg";
import ballIcon from "../img/ballIcon.jpg";
import ServiceItem from './ServiceItem';

function Services() {
    const servicesData = [
        {
            img: winIcon,
            title: 'Choose your Microsoft 365'
        },
        {
            img: pcIcon,
            title: 'Explore Surface Devices'
        },
        {
            img: ballIcon,
            title: 'Buy Xbox games and consoles'
        },
        {
            img: winIcon,
            title: 'Get Windows 11'
        }
    ];
    return (
        <div className='flex flex-col justify-center items-center '>
            { 
                servicesData.map((service)=>{
                    return <ServiceItem service={service} key={service.title} />;
                    
                })
            }
        </div>
    )
}

export default Services
