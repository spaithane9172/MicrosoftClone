import React from 'react'
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";
import img7 from "../img/img7.jpg";
import img8 from "../img/img8.jpg";
import img9 from "../img/img9.jpg";
import CourseCard from './CourseCard';
import CheckPcCard from './CheckPcCard';

import fbIcon from '../img/fbIcon.jpg';
import twitIcon from '../img/twitIcon.jpg';
import ytIcon from '../img/ytIcon.jpg';



function Courses() {
    const coursesData1 = [
        {
            img: img1,
            heading: "Surface Laptop 5",
            description: "Sophisticated style and multitasking speed powered by 12th Gen Intel® Core, with Windows 11.",
            url: "Learn more",
            url1: ""
        },
        {
            img: img2,
            heading: "Xbox Series S",
            description: "Next-gen performance in the smallest Xbox ever.",
            url: "Shop Xbox Series S",
            url1: ""
        },
        {
            img: img3,
            heading: "Announcing the next wave of AI innovation",
            description: "The new Microsoft Bing and Edge will soon feature more visual search responses, chat history, and persistent chat within Edge. We’re also adding actions to help people complete tasks.",
            url: "Learn more about it",
            url1: ""
        },
        {
            img: img4,
            heading: "Join for &dollar;",
            description: "Unlock hundreds of great games and more for just $1 when you join Xbox Game Pass Ultimate or PC Game Pass. Offer available to new subscribers only.",
            url: "Join Xbox Game Pass Ultimate",
            url1: "Join PC Game Pass"
        }
    ];
    const coursesData2 = [
        {
            img: img6,
            heading: "Surface for Business",
            description: "No matter what you do, there’s a Surface to help you do it.",
            url: "Show now",
            url1: ""
        },
        {
            img: img7,
            heading: "Try Microsoft 365 for free",
            description: "Get Microsoft Teams, secure cloud storage and premium apps across devices with a free one-month Microsoft 365 Business Standard trial.",
            url: "Start your free trial",
            url1: ""
        },
        {
            img: img8,
            heading: "Join the era of AI",
            description: "Create, communicate, and code with the latest Microsoft AI solutions.",
            url: "Explore AI solutions",
            url1: ""
        },
        {
            img: img9,
            heading: "Windows 11 for business",
            description: "Designed for hybrid work. Powerful for employees. Consistent for IT. Secure for all.",
            url: "Learn more",
            url1: ""
        }
    ];
    return (
        <>
            <div className='flex flex-col justify-center items-center p-3'>
                {
                    coursesData1.map((courseData) => {
                        return <CourseCard courseData={courseData} key={courseData.heading} />;
                    })
                }
            </div>
            <CheckPcCard data={
                {
                    img: img5,
                    heading: "Designed for life today – and tomorrow",
                    description: "The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love.",
                    url: "See if your PC is ready"
                }
            } />

            <h1 className='font-semibold text-2xl pl-3 mt-5'>For business</h1>

            <div className='flex flex-col justify-center items-center p-3'>
                {
                    coursesData2.map((courseData) => {
                        return <CourseCard courseData={courseData} key={courseData.heading} />;
                    })
                }
            </div>
            <div className='flex pl-6 mb-4'>
                <h1 className='mt-1 mr-4'>Follow Microsoft</h1>
                <img src={fbIcon} className='h-8 mr-4' alt='...' />
                <img src={twitIcon} className='h-8 mr-4' alt='...' />
                <img src={ytIcon} className='h-8' alt='...' />
            </div>
            <div className='px-3 flex justify-end w-[100%] mb-14'>
                <a href='#navBar' className='bg-[#d9d9d9] py-2 px-3 font-semibold'><i className="fa fa-thin fa-arrow-up pr-2 text-[#515458]"></i> Back to top</a>
            </div>
        </>
    )
}

export default Courses
