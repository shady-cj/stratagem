import React from 'react'
import hero1 from "@/assets/hero-slide-1.jpg"
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='h-[240px] md:h-[400px] xl:h-[465px] 3xl:h-[600px] 4xl:h-[900px] w-full rounded-[20px] overflow-hidden relative'>
      <Image src={hero1} height={470} className='w-full h-full md:h-auto absolute opacity-30 lg:-top-[7rem] 2xl:-top-[16.5rem] 3xl:-top-[20rem] 4xl:-top-[35rem]' alt=""/>
    </section>
  )
}

export default Hero
