import Image, { StaticImageData } from 'next/image'
import React from 'react'

const EnergyServiceCard = ({title, desc, icon}: {title: string, desc: string, icon: StaticImageData}) => {
  return (
    <div className='bg-secondary shadow-sm flex justify-center relative rounded-md'>  
        <div className='my-[2rem] flex flex-col gap-[1.5rem] items-center'>
            <div className='h-[100px] flex-center mt-4'>
                <Image src={icon} alt="icon" height={100} className={"w-auto"} />
            </div>

            <div>
                <h2 className='text-white text-center text-default mt-2 px-4'>{title}</h2>
            </div>
            <div>
                <p className='text-white text-center text-default-normal px-4 md:px-12 '>{desc}</p>
            </div>
        </div>
    </div>
  )
}

export default EnergyServiceCard
