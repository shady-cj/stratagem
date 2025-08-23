// import Image from "next/image";
import Header from "@/components/header"
import EnergyServices from "@/components/home/energy-services"
import Hero from "@/components/home/hero"
import Services from "@/components/home/services"
export default function Home() {
  return (
    <div className="py-home-padding-y px-home-padding-x xl:py-home-padding-lg-y xl:px-home-padding-lg-x flex flex-col gap-[4rem]">
        <Header />
        <Hero />
        <Services />
        <EnergyServices />
    </div>     
  )
}
