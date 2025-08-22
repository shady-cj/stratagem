import Image from 'next/image'
import React, { ReactNode } from 'react'
import wind from "@/assets/icons/wind.svg"

const ServiceWrapper = ({title, children}: {title: string, children: ReactNode}) => {
  return (
    <section className='flex flex-col gap-[3rem]'>
        <div className='flex justify-center'>
            <div className='flex flex-col gap-4 items-center'>
                <Image src={wind} alt="wind"/>
                <h2 className='font-poppins text-2xl font-medium'>
                    {title}
                </h2>
                
            </div>
            
        </div>
        {children}
    </section>
  )
}

export default ServiceWrapper
