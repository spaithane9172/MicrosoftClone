import React, { useState } from 'react'
import img from "../img/microsoft.png"
import cartImg from "../img/cart.png"
import profilImg from "../img/profile.png"
function Nav() {
    document.title = "landing"
    let [hamburger, setHamburger] = useState("block");
    const [vdrop,setVdrop]=useState({
        0:false,
        1:false,
        2:false,
        3:false,
        4:false,
        5:false,
        6:false
    });

    const handleHamburgerClick = (indx) => {
        setVdrop({...vdrop,[indx]:vdrop[indx]?false:true})
        if (hamburger === "block") {
            setHamburger("hidden");
            document.getElementById("line2").classList.remove("mb-[4px]")
            document.getElementById("line2").classList.add("rotate-45");
            document.getElementById("line3").classList.add("rotate-[-45deg]");
            document.getElementById("line2").classList.add("absolute");
        }
        else {
            document.getElementById("line3").classList.remove("rotate-[-45deg]");
            document.getElementById("line2").classList.remove("rotate-45");
            document.getElementById("line2").classList.add("mb-[4px]");
            document.getElementById("line2").classList.remove("absolute");
            setHamburger("block");
        }
    }
    
    


    const handleDropDown = (indx)=>{
        setVdrop({...vdrop,[indx]:vdrop[indx]? false : true});
        console.log(vdrop)
    }

    
    return (
        <>
            <nav id="navBar" className="flex justify-between items-center w-[100%] border border-b-2 border-gray-100">
                <div className='flex'>
                    <div onClick={()=>{handleHamburgerClick(6)}} className="hamburger w-[50px] h-[50px] flex justify-center items-center flex-col">
                        <div className={`${hamburger} bg-black w-[20px] mb-[4px] h-[1px]`}></div>
                        <div className={`bg-black w-[20px] h-[1px] mb-[4px]`} id="line2"></div>
                        <div className="bg-black w-[20px] h-[1px]" id="line3"></div>
                    </div>

                    <div className='flex justify-center items-center ml-2'>
                        <i className="fa fa-thin fa-magnifying-glass fa-rotate-90 text-[#737a82]"></i>
                    </div>
                </div>

                <div className='flex justify-center items-center ml'>
                    <img src={img} className='w-24 sm:w-[6.5rem]' alt="..." />
                </div>
                <div className='flex justify-center items-center pr-4'>
                    <img src={cartImg} className='w-3 h-3 mr-6 sm:w-4 sm:h-4' alt="..." />
                    <img src={profilImg} className='w-6 h-6 sm:w-8 sm:h-8' alt="..." />
                </div>
                <div id="dropDown" className={`absolute flex ${vdrop[6]?"block":"hidden"} z-40 justify-center top-[50px] w-[100vw] bg-[#f2f2f2]`}>
                    <ul>
                        <li className="p-4 border border-1 border-gray w-[100vw]">Microsoft 365</li>
                        <li className="p-4 border border-1 border-gray w-[100vw]">Teams</li>
                        <li className="p-4 border border-1 border-gray w-[100vw]">Windows</li>
                        <li className="p-3 border border-1 border-gray w-[100vw]">Surface</li>
                        <li className="p-3 border border-1 border-gray w-[100vw]">Xbox</li>
                        <li className="p-3 border border-1 border-gray w-[100vw]">Support</li>
                        <li className="p-3 border border-1 border-gray w-[100vw] flex justify-between items-center" id="Software" onClick={()=>{handleDropDown(0)}}><p>Software
                        </p><i className={`fa fa-thin fa-chevron-${vdrop[0]?"up":"down"} text-[#000000] text-[10px]`}></i></li>
                        <div id="SoftwareDropDown" className={`${vdrop[0]? "block":"hidden"}`}>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Windows Apps</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">AI</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">OneDrive</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Outlook</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Skype</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">OneNote</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Microsoft Teams</p>
                        </div>
                        <li className="p-4 border border-1 border-gray w-[100vw]" id="PCs&Devices" onClick={()=>{handleDropDown(1)}}><p className=' flex justify-between items-center'>PCs & Devices
                        <span><i className={`fa fa-thin fa-chevron-${vdrop[1]?"up":"down"} text-[#000000] text-[10px]`}></i></span></p>
                        </li>
                        <div id="PCs&DevicesDropDown" className={`${vdrop[1]?"block":"hidden"}`}>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Shop Xbox</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Accessories</p>
                        </div>
                        <li className="p-4 border border-1 border-gray w-[100vw]" id="Entertainment" onClick={()=>{handleDropDown(2)}}><p className=' flex justify-between items-center'>Entertainment
                        <span><i className={`fa fa-thin fa-chevron-${vdrop[2]?"up":"down"} text-[#000000] text-[10px]`}></i></span></p>
                        </li>
                        <div id="EntertainmentDropDown" className={`${vdrop[2]?"block":"hidden"}`}>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Xbox Game Pass Ultimate</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Xbox Live Gold</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Xbox game</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">PC games</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Windows digital games</p>
                        </div>
                        <li className="p-4 border border-1 border-gray w-[100vw]" id="Business" onClick={()=>{handleDropDown(3)}}><p className=' flex justify-between items-center'>Business
                        <span><i className={`fa fa-thin fa-chevron-${vdrop[3]?"up":"down"} text-[#000000] text-[10px]`}></i></span></p>
                        </li>
                        <div id="BusinessDropDown" className={`${vdrop[3]?"block":"hidden"}`}>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Microsoft Cloud</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Microsoft Security</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Azure</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Dynamics 365</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Microsoft 365 for business</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Microsoft Industry</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Microsoft Power Platform</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Windows 365</p>
                        </div>
                        <li className="p-4 border border-1 border-gray w-[100vw]" id="Developer&IT" onClick={()=>{handleDropDown(4)}}><p className=' flex justify-between items-center'>Developer & IT
                        <span><i className={`fa fa-thin fa-chevron-${vdrop[4]?"up":"down"} text-[#000000] text-[10px]`}></i></span></p>
                        </li>
                        <div id="Developer&ITDropDown" className={`${vdrop[4]?"block":"hidden"}`}>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Developer Center</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Documentation</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Microsoft Learn</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Microsoft Tech Community</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Azure Marketplace</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">AppSource</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Visual Studio</p>
                        </div>
                        <li className="p-4 border border-1 border-gray w-[100vw]" id="Other" onClick={()=>{handleDropDown(5)}}><p className=' flex justify-between items-center'>Other
                        <span><i className={`fa fa-thin fa-chevron-${vdrop[5]?"up":"down"} text-[#000000] text-[10px]`}></i></span></p>
                        </li>
                        <div id="OtherDropDown" className={`${vdrop[5]?"block":"hidden"}`}>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Free downloads & security</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Education</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Gift Cards</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Licensing</p>
                        </div>
                        <li className="p-3 border border-1 border-gray w-[100vw]">Microsoft 365</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav

