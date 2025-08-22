import React from 'react'
import greenEnergyIcon from "@/assets/icons/green-energy-icon.png"
import greenEnergyEngineeringIcon from "@/assets/icons/green-energy-engineering.png"
import greenTransportIcon from "@/assets/icons/green-transport.png"
import facilityManagementIcon from "@/assets/icons/facility-management.png"
import greenConstructionIcon from "@/assets/icons/green-construction.png"
import greenProcurementIcon from "@/assets/icons/green-procurement.png"
import ServiceCard from './helpers/ServiceCard'
import ServiceWrapper from './helpers/ServiceWrapper'


const serviceCardEntries = [
    {
        title: "Energy Solutions",
        icon: greenEnergyIcon,
        desc: "we help our customers identify, proritize  and implement energy saving measures"
        
    },
    {
        title: "General Engineering",
        icon: greenEnergyEngineeringIcon,
        desc: "Stratagem specializes in providing first class commercial mechanical and electrical services."
    },
    {
        title: "Logistics",
        icon: greenTransportIcon,
        desc: "We provide logistics services that offer a high degree of reliability while remaining cost-effective"
    },
    {
        title: "Facility Management",
        icon: facilityManagementIcon,
        desc: "Stratagem Energy offers Integrated facilities management by taking care of your end-to-end facility’s needs."
    },
    {
        title: "Construction",
        icon: greenConstructionIcon,
        desc: "Construction services offered by Stratagem utilize specialized safety procedures."
    },
    {
        title: "Procurement",
        icon: greenProcurementIcon,
        desc: "Stratagem offers an extensive range of commercial, industrial and technical procurement and supply services."
    
    }
]

const Services = () => {
  return (
    <ServiceWrapper title="Our Services">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]'>
            {
                serviceCardEntries.map((entry) => <ServiceCard key={entry.title} desc={entry.desc} title={entry.title} icon={entry.icon} />)

            }
        </div>
      
    </ServiceWrapper>
  )
}

export default Services
