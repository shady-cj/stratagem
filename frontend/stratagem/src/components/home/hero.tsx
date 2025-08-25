"use client"
import React, { useEffect, useRef, useState } from 'react'
import slide1 from "@/assets/hero-slide-1.jpg"
import slide2 from "@/assets/construction-services.jpg"
import slide3 from "@/assets/procurement-services.jpg"
import slide4 from "@/assets/logistics-haulage.jpg"
import slide5 from "@/assets/general-engineering.jpg"
import Image from 'next/image'
import previous from "@/assets/icons/prev-arrow.svg"
import next from "@/assets/icons/next-arrow.svg"

const slides = [
  {
    "title": "Solving Nigeria's Energy Needs",
    "description": "As a team of certified energy engineers, we are committed to building and delivering value-adding energy solutions for economic growth",
    "image": slide1
  }, 
  {"title": "Construction Services",
    "description": "As a team of certified energy engineers , we are committed to building and delivering value-adding energy solutions for economic growth",
    "image": slide2
  }, 
  {"title": "Procurement Services",
    "description": "As a team of certified energy engineers , we are committed to building and delivering value-adding energy solutions for economic growth",
    "image": slide3
  }, 
  {"title": "Logistics & Haulage Services",
    "description": "As a team of certified energy engineers , we are committed to building and delivering value-adding energy solutions for economic growth",
    "image": slide4
  }, 
  {"title": "General Engineering Services",
    "description": "As a team of certified energy engineers , we are committed to building and delivering value-adding energy solutions for economic growth",
    "image": slide5
  }, 
]

const Hero = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const intervalId = useRef<NodeJS.Timeout | null>(null)

  const moveSlideForward = () => {
    setCurrentSlideIndex(prev => {
        let newIndex = prev + 1
        if (newIndex >= slides.length) newIndex = 0
        return newIndex
      })
  }
  const moveSlideBackward = () => {
     setCurrentSlideIndex(prev => {
        let newIndex = prev - 1
        if (newIndex < 0) newIndex = slides.length - 1
        return newIndex
      })
  }

  const moveSlide = (type: "forward" | "backward") =>{
    if (intervalId.current) clearInterval(intervalId.current)
    if (type === "forward") moveSlideForward()
    else moveSlideBackward()
    
    intervalId.current = setInterval(moveSlideForward, 3000)

  }

  useEffect(() => {
    intervalId.current = setInterval(moveSlideForward, 3000)
    return () => {
      if (intervalId.current)
        clearInterval(intervalId.current)
    }
  }, [])
  return (
    <section className='h-[240px] md:h-[400px] xl:h-[485px] 3xl:h-[600px] 4xl:h-[900px] w-full rounded-[20px] overflow-hidden relative'>
      <Image src={previous} width={75} onClick={()=>moveSlide("backward")} className='h-auto w-[30px] lg:w-[75px] absolute top-1/2 left-2 md:left-5 -translate-y-1/2 z-1 cursor-pointer' alt=""/>
      <Image src={next} width={75} onClick={()=>moveSlide("forward")} className='h-auto w-[30px] lg:w-[75px] absolute top-1/2 right-2 md:right-5 -translate-y-1/2 z-1 cursor-pointer' alt=""/>

      {
        slides.map((slide, index) => {
          const active = index === currentSlideIndex
          return <React.Fragment key={index}>
            <div className={`absolute z-1 left-12 md:left-20 lg:left-30 top-5 md:top-10 flex flex-col max-w-[250px] md:max-w-[500px] lg:max-w-[700px] transition-opacity duration-500 ease-in ${active ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className='text-2xl md:text-[3rem] xl:text-[4rem] font-poppins font-medium'>{slide.title}</h1>
              <p className='mt-3 mb-3 md:mb-8 text-sm/5 md:text-base/7 xl:text-lg/8 font-normal font-pontano-sans md:max-w-[450px] xl:max-w-[530px]'>{slide.description}</p>
              <a href="#" className='py-2 px-5 bg-hero-button w-fit rounded-[10px] text-xs md:text-base lg:text-xl font-medium font-poppins'>Learn More</a>
            </div>
            <Image src={slide.image} height={470} className={`${active ? 'opacity-30' : 'opacity-0'} transition-opacity duration-500 ease-in w-full h-full md:h-auto absolute lg:-top-[7rem] xl:-top-[9rem] 2xl:-top-[16.5rem] 3xl:-top-[20rem] 4xl:-top-[35rem]`} alt=""/>
          </React.Fragment>
        })
    }
    </section>
  )
}

export default Hero
