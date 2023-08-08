import React from 'react'

function Footer() {
    return (
        <div className='bg-[#f2f2f2] text-[#616161] sm:bg-red-200 md:bg-green-200'>
            <div className='px-6 py-8'>
                <h1 className='font-semibold text-[15px]'>What's new</h1>

                <p className='text-[11px] py-2'>Microsoft 365</p>
                <p className='text-[11px] py-2'>Games</p>
                <p className='text-[11px] py-2'>Surface Pro 9</p>
                <p className='text-[11px] py-2'>Surface Laptop 5</p>
                <p className='text-[11px] py-2'>Surface Laptop Studio</p>
                <p className='text-[11px] py-2'>Surface Laptop Go 2</p>
                <p className='text-[11px] py-2'>Windows 11 apps</p>
            </div>
            <div className='px-6 pb-8'>
                <h1 className='font-semibold text-[15px]'>Microsoft Store</h1>

                <p className='text-[11px] py-2'>Account profile</p>
                <p className='text-[11px] py-2'>Download Center</p>
                <p className='text-[11px] py-2'>Microsoft Store Support</p>
                <p className='text-[11px] py-2'>Returns</p>
                <p className='text-[11px] py-2'>Order tracking</p>
            </div>
            <div className='px-6 pb-8'>
                <h1 className='font-semibold text-[15px]'>Education</h1>

                <p className='text-[11px] py-2'>Microsoft in education</p>
                <p className='text-[11px] py-2'>Devices for education</p>
                <p className='text-[11px] py-2'>Microsoft Teams for Education</p>
                <p className='text-[11px] py-2'>Microsoft 365 Education</p>
                <p className='text-[11px] py-2'>Office Education</p>
                <p className='text-[11px] py-2'>Educator training and development</p>
                <p className='text-[11px] py-2'>Deals for students and parents</p>
                <p className='text-[11px] py-2'>Azure for students</p>
            </div>
            <div className='px-6 pb-8'>
                <h1 className='font-semibold text-[15px]'>Business</h1>

                <p className='text-[11px] py-2'>Microsoft Cloud</p>
                <p className='text-[11px] py-2'>Microsoft Security</p>
                <p className='text-[11px] py-2'>Azure</p>
                <p className='text-[11px] py-2'>Dynamics 365</p>
                <p className='text-[11px] py-2'>Microsoft 365</p>
                <p className='text-[11px] py-2'>Microsoft Advertising</p>
                <p className='text-[11px] py-2'>Microsoft Industry</p>
                <p className='text-[11px] py-2'>Microsoft Teams</p>
            </div>
            <div className='px-6 pb-8'>
                <h1 className='font-semibold text-[15px]'>Developer & IT</h1>

                <p className='text-[11px] py-2'>Developer Center</p>
                <p className='text-[11px] py-2'>Documentation</p>
                <p className='text-[11px] py-2'>Microsoft Learn</p>
                <p className='text-[11px] py-2'>Microsoft Tech Community</p>
                <p className='text-[11px] py-2'>Azure Marketplace</p>
                <p className='text-[11px] py-2'>AppSource</p>
                <p className='text-[11px] py-2'>Microsoft Power Platform</p>
                <p className='text-[11px] py-2'>Visual Studio</p>
            </div>
            <div className='px-6 pb-8'>
                <h1 className='font-semibold text-[15px]'>Company</h1>

                <p className='text-[11px] py-2'>Careers</p>
                <p className='text-[11px] py-2'>About Microsoft</p>
                <p className='text-[11px] py-2'>Company news</p>
                <p className='text-[11px] py-2'>Privacy at Microsoft</p>
                <p className='text-[11px] py-2'>Investors</p>
                <p className='text-[11px] py-2'>Security</p>
                <p className='text-[11px] py-2'>Sustainability</p>
            </div>
            <div className='px-6 flex flex-col'>
                <p className='flex w-fit justify-center items-center mb-3'>
                    <i className='fa-solid fa-earth-americas text-[#545861] text-xl'></i>
                    <span className='ml-2 text-[11px]'>English (India)</span>
                </p>
                <div className='flex justify-center item-center w-fit mb-8'>
                    <div className='flex justify-center items-center w-9 h-4 border border-1 border-blue-600 rounded-xl mr-2'>
                        <i className="fa flex justify-center items-center w-[50%] fa-thin fa-check text-blue-600 text-[11px]"></i>
                        <i className="flex justify-center items-center fa w-[50%] h-4 fa-thin fa-xmark bg-blue-600 text-white rounded-r-lg text-[11px]"></i>
                    </div>
                    <p className='text-[11px]'>Your Privacy Choices</p>
                </div>
                <ul className='text-[11px] mb-3 flex  flex-wrap'>
                        <li className='pr-3 pb-2'>Contact Microsoft</li>
                        <li className='pr-3 pb-2'>Privacy</li>
                        <li className='pr-3 pb-2'>Terms of use</li>
                        <li className='pr-3 pb-2'>Trademarks</li>
                        <li className='pr-3 pb-2'>About out ads</li>
                        <li className='pr-3 pb-2'>&#169; Microsoft 2023</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
