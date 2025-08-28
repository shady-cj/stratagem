import Image from 'next/image'
import React from 'react'
import logo from "../assets/logo.png";
import twitter from "../assets/icons/twitter-logo.svg"
import facebook from "../assets/icons/fb-logo.svg"
import linkedIn from "../assets/icons/linkedin-logo.svg"
import instagram from "../assets/icons/ig-logo.svg"
const Footer = () => {
  return (
    <div className='py-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 space-x-6 space-y-10'>
            <div className='md:max-w-[280px] flex flex-col gap-4'>
                <div className='w-[250px] aspect-[3.375/1]'>
                    <Image src={logo} width={250} className="h-full w-full" alt="stratagem"/>
                </div>
                <p className='font-poppins text-base'>Using our emerging energy, engineering and logistics solutions to be a force of change in revolutionizing manufacturing industries, SME&apos;s and government agencies in Nigeria.</p>
            </div>
            <div className="flex flex-col gap-y-4">
                <h2 className='text-xl font-semibold font-poppins'>Navigation</h2>
                <p className='font-poppins'>About</p>
                <p className='font-poppins'>Energy Hub</p>
                <p className='font-poppins'>Projects</p>
                <p className='font-poppins'>Trainings</p>
            </div>
            <div className="flex flex-col gap-y-4 max-w-[184px]">
                <h2 className='text-xl font-semibold font-poppins'>What we do</h2>
                <p className='font-poppins'>Deep Energy Enterprise</p>
                <p className='font-poppins'>Integrated Engineering Solutions</p>
                <p className='font-poppins'>Logistics</p>
                <p className='font-poppins'>Construction</p>
                <p className='font-poppins'>Property & Facility Management</p>
            </div>
            <div className="flex flex-col gap-y-4">
                <h2 className='text-xl font-semibold font-poppins'>Find Us Here</h2>
                <p className='font-poppins'>7 Oluwaleimu street, Off Allen Avenue Ikeja, Lagos</p>
                <div className='flex'>
                    <div>
                        <h2 className='text-default-normal'>Tel:</h2>
                    </div>
                    <div className='px-2.5 flex flex-col space-y-2.5 text-default-normal'>
                        <a href="tel:09154494394">09154494394</a>
                        <a href="tel:09154494395">09154494395</a>
                        <a href="tel:08154494396">08154494396</a>
                        <a href="tel:09154494400">09154494400</a>
                    </div>
                </div>
                <p className='text-default-normal'>
                    <span>
                        Email: </span><a href="mailto:contact@strategemenergy.com">Contact@strategemenergy.com</a>

                </p>
                <div className='flex gap-x-[40px]'>
                    {
                        [twitter, facebook, linkedIn, instagram].map((icon, index) => {
                            return <Image src={icon} key={index} alt="" />
                        })
                    }
                </div>
            </div>
           
        </div>
      
    </div>
  )
}

export default Footer
