"use client"
import Image from "next/image";
import logo from "../assets/logo.png";
import arrowDown from "../assets/icons/arrow-down.svg"
import arrowUp from "../assets/icons/arrow-up.svg"
import arrowDownW from "../assets/icons/arrow-down-w.svg"
import arrowUpW from "../assets/icons/arrow-up-w.svg"
import hamburger from "../assets/icons/hamburger.svg"
import mail from "../assets/icons/mail.svg"
import { Dispatch, SetStateAction, useEffect, useState } from "react";


export default function Header() {
    const [openMoreServices, setOpenMoreServices] = useState(false)
    const [keepMoreServicesOpened, setKeepMoreServicesOpened] = useState(false)
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

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
        <header className="w-full flex items-center relative">
            <div className="w-[8rem] md:w-[9.5rem] lg:h-[3.2rem] lg:w-[10.8rem] aspect-[3.375/1] flex items-center justify-center">
                <Image src={logo} className="h-full w-full" alt="stratagem"/>
            </div>
            <div className="lg:hidden ml-auto">
                <Image src={hamburger} alt="hamburger" className="cursor-pointer" onClick={() =>setOpenMobileMenu(true)}/>
            </div>
            <nav className={`hidden lg:block ml-auto`}>
                <ul className="flex space-x-6 mr-4 xl:mr-0">
                    <li className="hover:scale-105"><a href="#" className="text-text-default hover:text-secondary hover:text-shadow-md">Home</a></li>
                    <li className="hover:scale-105"><a href="#" className="text-text-default hover:text-secondary hover:text-shadow-md">About Us</a></li>
                    {/* <li className="relative perspective-origin-center perspective-midrange" id="service-nav"> */}
                    <li className="relative" id="service-nav">
                        <a href="#" className="text-text-default hover:text-secondary hover:scale-105 flex items-center gap-x-1.5 hover:text-shadow-md" onMouseEnter={handleOpenMoreServices} onMouseLeave={handleCloseMoreServices} onClick={handleServiceClick}>Services <Image src={openMoreServices ? arrowUp : arrowDown} alt="show more services" /></a>
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
                    <li className="hover:scale-105"><a href="#" className="text-text-default hover:text-secondary hover:text-shadow-md">Projects</a></li>
                    <li className="hover:scale-105"><a href="#" className="text-text-default hover:text-secondary hover:text-shadow-md hover:scale-105">Trainings</a></li>
                    <li className="hover:scale-105"><a href="#" className="text-text-default hover:text-secondary hover:text-shadow-md hover:scale-105">Blog</a></li>
                    {/* <li><a href="#" className="font-medium font-poppins bg-green border-0.5 rounded-[5px] border-green text-white py-[2px] px-[5px]">Consultation</a></li> */}
                </ul>
            </nav>
            <a href="mailto:contact@strategemenergy.com" className="items-center gap-2 hidden xl:flex ml-auto hover:text-shadow-md hover:scale-105">
                    <Image src={mail} height={14} alt="" />
                    <span className="font-poppins font-semibold">
                        Contact@strategemenergy.com
                    </span>
            </a>
            {
                openMobileMenu ?<MobileNav menuOpen={openMobileMenu} setMenuOpen={setOpenMobileMenu} /> : <></>
            }
            
        </header>
    )
}




function MobileNav({menuOpen, setMenuOpen}: {menuOpen: boolean, setMenuOpen: Dispatch<SetStateAction<boolean>>}) {
    const [openMoreServices, setOpenMoreServices] = useState(false)
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto"
        
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [menuOpen])
    return (
        <nav className="block lg:hidden h-screen z-10 w-screen overflow-auto fixed bg-[rgba(50,70,131,0.2)] left-0 top-0 bottom-0" onClick={() => setMenuOpen(false)}>
                <ul className={`flex flex-col items-center bg-secondary duration-500 transition ${!menuOpen ? "-translate-[100%]": "translate-0"} w-[70vw] h-screen space-y-4 p-6`} onClick={(e) => e.stopPropagation()}>
                    <li className="hover:scale-105"><a href="#" className="text-text-default text-white text-xl hover:text-secondary hover:text-shadow-md">Home</a></li>
                    <li className="hover:scale-105"><a href="#" className="text-text-default text-white text-xl hover:text-secondary hover:text-shadow-md">About Us</a></li>
                    {/* <li className="relative perspective-origin-center perspective-midrange" id="service-nav"> */}
                    <li className="" id="service-nav-mobile">
                        <a href="#" className="text-text-default hover:text-secondary hover:scale-105 text-white text-xl flex items-center gap-x-1.5 hover:text-shadow-md">Services <Image src={openMoreServices ? arrowUpW : arrowDownW} alt="show more services" onClick={() => setOpenMoreServices((prev) => !prev)}/></a></li>

                     {
                        openMoreServices ? <div className="w-full animate-show-more-services transform-3d origin-top flex flex-col items-center bg-white gap-y-4 px-4 py-5 rounded-sm">
                            <a href="#" className="text-secondary font-poppins text-center border-b">Deep energy Expertise</a>
                            <a href="#" className="text-secondary font-poppins text-center border-b">Integrated Engineering Solutions</a>
                            <a href="#" className="text-secondary font-poppins text-center border-b">Property and Facility Management</a>
                            <a href="#" className="text-secondary font-poppins text-center border-b">Logistics</a>
                            <a href="#" className="text-secondary font-poppins text-center border-b">Procurement</a>
                            <a href="#" className="text-secondary font-poppins text-center border-b">Construction</a>
                            <a href="#" className="text-secondary font-poppins text-center border-b">Energy Consumption</a>
                        </div> : ""
                    }
                    <li className="hover:scale-105"><a href="#" className="text-text-default hover:text-secondary text-white text-xl hover:text-shadow-md">Projects</a></li>
                    <li className="hover:scale-105"><a href="#" className="text-text-default hover:text-secondary text-white text-xl hover:text-shadow-md hover:scale-105">Trainings</a></li>
                    <li className="hover:scale-105"><a href="#" className="text-text-default hover:text-secondary text-white text-xl hover:text-shadow-md hover:scale-105">Blog</a></li>
                    {/* <li><a href="#" className="font-medium font-poppins bg-green border-0.5 rounded-[5px] border-green text-white py-[2px] px-[5px]">Consultation</a></li> */}
                </ul>
            </nav>
     
    )
}
