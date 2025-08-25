"use client"
import Image from "next/image";
import logo from "../assets/logo.png";
import arrowDown from "../assets/icons/arrow-down.svg"
import arrowUp from "../assets/icons/arrow-up.svg"
import hamburger from "../assets/icons/hamburger.svg"
import mail from "../assets/icons/mail.svg"
import { useEffect, useState } from "react";


export default function Header() {
    const [openMoreServices, setOpenMoreServices] = useState(false)
    const [keepMoreServicesOpened, setKeepMoreServicesOpened] = useState(false)
    // const [openMobileMenu, setOpenMobileMenu] = useState(false)

    const handleOpenMoreServices = () => {
        setOpenMoreServices(true)
    }
    const handleCloseMoreServices = () => {
        if (!keepMoreServicesOpened) setOpenMoreServices(false)

    }
    const handleServiceClick = () => {
        setKeepMoreServicesOpened(true)
        handleOpenMoreServices()
    }

    useEffect(()=>{
        const closeMoreServicesListener = (e: Event)=> {
    
            const withinServices = (e.target as HTMLElement).closest("#service-nav")
            if (!withinServices) {
                setKeepMoreServicesOpened(false)
                setOpenMoreServices(false)
            }
      
        }
        window.addEventListener('click', closeMoreServicesListener)
        return () => {
            window.removeEventListener('click', closeMoreServicesListener)
        }
    })
    return (
        <header className="w-full flex items-center">
            <div className="w-[8rem] md:w-[9.5rem] lg:h-[3.2rem] lg:w-[10.8rem] aspect-[3.375/1] flex items-center justify-center">
                <Image src={logo} className="h-full w-full" alt="stratagem"/>
            </div>
            <div className="lg:hidden ml-auto">
                <Image src={hamburger} alt="hamburger" className="cursor-pointer"/>
            </div>
            <nav className={`hidden lg:flex ml-auto`}>
                <ul className="flex space-x-6 mr-4 xl:mr-0">
                    <li><a href="#" className="text-text-default hover:text-secondary hover:scale-105 hover:text-shadow-md transition font-medium font-poppins">Home</a></li>
                    <li><a href="#" className="text-text-default hover:text-secondary hover:text-shadow-md hover:scale-105  font-medium font-poppins">About Us</a></li>
                    {/* <li className="relative perspective-origin-center perspective-midrange" id="service-nav"> */}
                    <li className="relative" id="service-nav">
                        <a href="#" className="text-text-default hover:text-secondary hover:scale-105 font-medium font-poppins flex items-center gap-x-1.5 hover:text-shadow-md " onMouseEnter={handleOpenMoreServices} onMouseLeave={handleCloseMoreServices} onClick={handleServiceClick}>Services <Image src={openMoreServices ? arrowUp : arrowDown} alt="show more services" /></a>
                        {
                            openMoreServices ? <div className="w-90 animate-show-more-services transform-3d origin-top bg-secondary absolute z-10 top-8 -left-10 flex flex-col gap-y-6 px-8 py-6 shadow-lg rounded-sm" onMouseEnter={handleOpenMoreServices} onMouseLeave={handleCloseMoreServices}>
                                <a href="#" className="text-white font-poppins">Deep energy Expertise</a>
                                <a href="#" className="text-white font-poppins">Integrated Engineering Solutions</a>
                                <a href="#" className="text-white font-poppins">Property and Facility Management</a>
                                <a href="#" className="text-white font-poppins">Logistics</a>
                                <a href="#" className="text-white font-poppins">Procurement</a>
                                <a href="#" className="text-white font-poppins">Construction</a>
                                <a href="#" className="text-white font-poppins">Energy Consumption</a>
                            </div> : ""
                        }
                            

                    </li>
                    <li><a href="#" className="text-text-default hover:text-secondary font-medium font-poppins hover:text-shadow-md hover:scale-105">Projects</a></li>
                    <li><a href="#" className="text-text-default hover:text-secondary font-medium font-poppins hover:text-shadow-md hover:scale-105">Trainings</a></li>
                    <li><a href="#" className="text-text-default hover:text-secondary font-medium font-poppins hover:text-shadow-md hover:scale-105">Blog</a></li>
                    {/* <li><a href="#" className="font-medium font-poppins bg-green border-0.5 rounded-[5px] border-green text-white py-[2px] px-[5px]">Consultation</a></li> */}
                </ul>
            </nav>
            <a href="mailto:" className="items-center gap-2 hidden xl:flex ml-auto hover:text-shadow-md ">
                    <Image src={mail} height={14} alt="" />
                    <span className="font-poppins font-semibold">
                        Contact@strategemenergy.com
                    </span>
            </a>
        </header>
    )
}




