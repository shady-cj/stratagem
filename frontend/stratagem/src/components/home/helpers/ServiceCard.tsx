"use client"
import Image, { StaticImageData } from 'next/image'
import React, { useRef } from 'react'

const ServiceCard = ({icon, title, desc}: {icon: StaticImageData, title: string, desc: string}) => {
    const clipRef = useRef<HTMLDivElement>(null!)
    return (
        <div className='bg-white shadow-sm flex-center relative rounded-md' onMouseEnter={()=> clipRef.current.classList.add('clip-service-card-info-show')} onMouseLeave={() => clipRef.current.classList.remove('clip-service-card-info-show')}>  
            <div className='my-[2.5rem] flex flex-col gap-[2.5rem] items-center'>
                <div className='h-[150px] flex-center'>
                    <Image src={icon} alt="icon" height={100} className={"w-auto"} />

                </div>
                <div>
                    <div className='flex justify-content items-center border border-black border-dashed rounded-[5px] p-[0.625rem]'>
                        <p className='text-default'>{title}</p>
                    </div>
                </div>
            </div>
            <div className='absolute left-0 top-0 w-full h-full bg-secondary clip-service-card-info rounded-md' ref={clipRef} onMouseLeave={() => clipRef.current.classList.remove('clip-service-card-info-show')}>
                <div className='h-full flex flex-col justify-between items-center py-[3rem] px-[6rem] md:px-[3rem] gap-8'>
                    <h3 className='text-default text-white'>{title}</h3>
                    <p className='text-default text-center text-white'>
                        {desc}
                    </p>
                    <div className='text-center'>
                    
                        <a href="#" className='text-default text-white py-[5px] px-[10px] border-b-2'>Read More</a>

                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default ServiceCard
