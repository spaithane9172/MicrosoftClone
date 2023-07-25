import React, { useState } from 'react'
import img from "./img/microsoft.png"
import cartImg from "./img/cart.png"
import profilImg from "./img/profile.png"
function Calculator() {
    document.title = "landing"
    let [hamburger, setHamburger] = useState("block");
    const handleHamburgerClick = () => {
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
    
    const [vdrop1, setVdrop1] = useState("hidden");
    const [vdrop2, setVdrop2] = useState("hidden");
    const [vdrop3, setVdrop3] = useState("hidden");
    const [vdrop4, setVdrop4] = useState("hidden");
    const [vdrop5, setVdrop5] = useState("hidden");
    const [vdrop6, setVdrop6] = useState("hidden");


    const handleDropDown = (e)=>{
        let list=["Software","PCs&Devices","Entertainment","Business","Developer&IT","Other"]
        let dtitle="";
        let title="";

        if(list.includes(e.target.parentElement.id)){
            dtitle=e.target.parentElement.id;
        }
        else{
            dtitle=e.target.id;
        }
        title=dtitle+"DropDown";

        if(dtitle==="Software" && vdrop1==="hidden"){
            setVdrop1("block")
            document.getElementById(title).classList.add("block");
            document.getElementById(title).classList.remove('hidden');
        }else{
            setVdrop1('hidden');
            document.getElementById(title).classList.add("hidden");
            document.getElementById(title).classList.remove("block");
        }

        if(e.target.parentElement.id==="PCs&Devices" && vdrop2==="hidden"){
            setVdrop2("block")
            document.getElementById(title).classList.add("block");
            document.getElementById(title).classList.remove('hidden');
        }else{
            setVdrop2('hidden');
            document.getElementById(title).classList.add("hidden");
            document.getElementById(title).classList.remove("block");
        }
        
        if(e.target.parentElement.id==="Entertainment" && vdrop3==="hidden"){
            setVdrop3("block")
            document.getElementById(title).classList.add("block");
            document.getElementById(title).classList.remove('hidden');
        }else{
            setVdrop3('hidden');
            document.getElementById(title).classList.add("hidden");
            document.getElementById(title).classList.remove("block");
        }
        
        if(e.target.parentElement.id==="Business" && vdrop4==="hidden"){
            setVdrop4("block")
            document.getElementById(title).classList.add("block");
            document.getElementById(title).classList.remove('hidden');
        }else{
            setVdrop4('hidden');
            document.getElementById(title).classList.add("hidden");
            document.getElementById(title).classList.remove("block");
        }
        
        if(e.target.parentElement.id==="Developer&IT" && vdrop5==="hidden"){
            setVdrop5("block")
            document.getElementById(title).classList.add("block");
            document.getElementById(title).classList.remove('hidden');
        }else{
            setVdrop5('hidden');
            document.getElementById(title).classList.add("hidden");
            document.getElementById(title).classList.remove("block");
        }
        
        if(e.target.parentElement.id==="Other" && vdrop6==="hidden"){
            setVdrop6("block")
            document.getElementById(title).classList.add("block");
            document.getElementById(title).classList.remove('hidden');
        }else{
            setVdrop6('hidden');
            document.getElementById(title).classList.add("hidden");
            document.getElementById(title).classList.remove("block");
        }
    }

    const handleMainDropDown=()=>{
        
    }
    return (
        <>
            <nav className="flex justify-between items-center w-[100vw] ">
                <div onClick={handleMainDropDown} className='flex'>
                    <div className="hamburger w-[50px] h-[50px] flex justify-center items-center flex-col" onClick={handleHamburgerClick}>
                        <div className={`${hamburger} bg-black w-[20px] mb-[4px] h-[1px]`}></div>
                        <div className={`bg-black w-[20px] h-[1px] mb-[4px]`} id="line2"></div>
                        <div className="bg-black w-[20px] h-[1px]" id="line3"></div>
                    </div>
                    <div className='flex justify-center items-center ml-2'>
                        <i className="fa fa-thin fa-magnifying-glass fa-rotate-90 text-[#737a82]"></i>
                    </div>
                </div>
                <div className='flex justify-center items-center ml'>
                    <img src={img} className='w-28' alt="..." />
                </div>
                <div className='flex justify-center items-center mr-4'>
                    <img src={cartImg} className='w-3 h-3 mr-6' alt="..." />
                    <img src={profilImg} className='w-8 h-8 ' alt="..." />
                </div>
                <div id="dropDown" className='absolute flex justify-center top-12 w-[100vw] bg-[#f2f2f2]'>
                    <ul>
                        <li className="p-4 border border-1 border-gray w-[100vw]">Microsoft 365</li>
                        <li className="p-4 border border-1 border-gray w-[100vw]">Teams</li>
                        <li className="p-4 border border-1 border-gray w-[100vw]">Windows</li>
                        <li className="p-4 border border-1 border-gray w-[100vw]">Surface</li>
                        <li className="p-4 border border-1 border-gray w-[100vw]">Xbox</li>
                        <li className="p-4 border border-1 border-gray w-[100vw]">Support</li>
                        <li className="p-4 border border-1 border-gray w-[100vw] flex justify-between items-center" id="Software" onClick={handleDropDown}><p onClick={handleDropDown}>Software
                        </p><i onClick={handleDropDown} className={`fa fa-thin fa-chevron-${vdrop1==="hidden"?"down":"up"} text-[#000000] text-[10px]`}></i></li>
                        <div id="SoftwareDropDown" className='hidden'>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Windows Apps</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">AI</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">OneDrive</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Outlook</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Skype</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">OneNote</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Microsoft Teams</p>
                        </div>
                        <li className="p-4 border border-1 border-gray w-[100vw]" id="PCs&Devices" onClick={handleDropDown}><p className=' flex justify-between items-center'>PCs & Devices
                        <span><i className={`fa fa-thin fa-chevron-${vdrop2==="hidden"?"down":"up"} text-[#000000] text-[10px]`}></i></span></p>
                        </li>
                        <div id="PCs&DevicesDropDown" className='hidden'>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Shop Xbox</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Accessories</p>
                        </div>
                        <li className="p-4 border border-1 border-gray w-[100vw]" id="Entertainment" onClick={handleDropDown}><p className=' flex justify-between items-center'>Entertainment
                        <span><i className={`fa fa-thin fa-chevron-${vdrop3==="hidden"?"down":"up"} text-[#000000] text-[10px]`}></i></span></p>
                        </li>
                        <div id="EntertainmentDropDown" className='hidden'>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Xbox Game Pass Ultimate</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Xbox Live Gold</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Xbox game</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">PC games</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Windows digital games</p>
                        </div>
                        <li className="p-4 border border-1 border-gray w-[100vw]" id="Business" onClick={handleDropDown}><p className=' flex justify-between items-center'>Business
                        <span><i className={`fa fa-thin fa-chevron-${vdrop4==="hidden"?"down":"up"} text-[#000000] text-[10px]`}></i></span></p>
                        </li>
                        <div id="BusinessDropDown" className='hidden'>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Microsoft Cloud</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Microsoft Security</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Azure</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Dynamics 365</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Microsoft 365 for business</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Microsoft Industry</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Microsoft Power Platform</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Windows 365</p>
                        </div>
                        <li className="p-4 border border-1 border-gray w-[100vw]" id="Developer&IT" onClick={handleDropDown}><p className=' flex justify-between items-center'>Developer & IT
                        <span><i className={`fa fa-thin fa-chevron-${vdrop5==="hidden"?"down":"up"} text-[#000000] text-[10px]`}></i></span></p>
                        </li>
                        <div id="Developer&ITDropDown" className='hidden'>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Developer Center</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Documentation</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Microsoft Learn</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Microsoft Tech Community</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Azure Marketplace</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">AppSource</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Visual Studio</p>
                        </div>
                        <li className="p-4 border border-1 border-gray w-[100vw]" id="Other" onClick={handleDropDown}><p className=' flex justify-between items-center'>Other
                        <span><i className={`fa fa-thin fa-chevron-${vdrop6==="hidden"?"down":"up"} text-[#000000] text-[10px]`}></i></span></p>
                        </li>
                        <div id="OtherDropDown" className='hidden'>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Free downloads & security</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Education</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Gift Cards</p>
                            <p className="ml-8 p-4 border-b-[2px] border-gray">Licensing</p>
                        </div>
                        <li className="p-4 border border-1 border-gray w-[100vw]">Microsoft 365</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Calculator

