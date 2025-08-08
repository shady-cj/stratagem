import Image from "next/image";
import logo from "../assets/logo.png";

export default function Header() {
    return (
        <header className="w-full flex items-center">
            <div className="h-[3.2rem] w-[10.8rem] flex items-center justify-center">
                <Image src={logo} className="h-full w-full" alt="stratagem"/>
            </div>
            <nav className="flex ml-auto">
                <ul className="flex space-x-6">
                    <li><a href="#" className="text-text-default hover:text-gray-900 font-medium font-poppins">Home</a></li>
                    <li><a href="#" className="text-text-default hover:text-gray-900 font-medium font-poppins">About Us</a></li>
                    <li><a href="#" className="text-text-default hover:text-gray-900 font-medium font-poppins">Services</a></li>
                    <li><a href="#" className="text-text-default hover:text-gray-900 font-medium font-poppins">Projects</a></li>
                    <li><a href="#" className="text-text-default hover:text-gray-900 font-medium font-poppins">Trainings</a></li>
                    <li><a href="#" className="text-text-default hover:text-gray-900 font-medium font-poppins">Blog</a></li>
                    <li><a href="#" className="font-medium font-poppins bg-[#A4D141] border-0.5 rounded-[5px] border-[#A4D141] text-white py-[2px] px-[5px]">Consultation</a></li>
                </ul>
            </nav>
        </header>
    )
}
