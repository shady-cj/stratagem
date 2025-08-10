// import Image from "next/image";
import Header from "@/components/header"
import Hero from "@/components/home/hero"
import Services from "@/components/home/services"
export default function Home() {
  return (
    <div className="py-home-padding-y px-home-padding-x lg:py-home-padding-lg-y lg:px-home-padding-lg-x">
        <Header />
        <Hero />
        <Services />
    </div>     
  )
}
