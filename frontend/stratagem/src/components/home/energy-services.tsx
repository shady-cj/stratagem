import React from 'react'
import EnergyServiceCard from './helpers/EnergyServiceCard'
import ServiceWrapper from './helpers/ServiceWrapper'
import whiteEnergyAudit from "@/assets/icons/white-energy-audit.png"
import whitePowerEnergyMgt from "@/assets/icons/white-power-energy-mgt.png"
import whitePowerEnergyMgtConsultation from "@/assets/icons/white-energy-mgt-consultation.png"
import whiteEnergyPerformance from "@/assets/icons/white-energy-performance.png"

const cardEntries = [
  {
    title: "Energy Audits  (EA)",
    desc: "Our energy audits guidesour clients in determining the types and costs of energy to be used in their facility by evaluating how their facility uses energy and identifying opportunities to reduce consumption",
    icon: whiteEnergyAudit
  }, 
  {
    title: "Power Service Management",
    desc: "We offer Top Notch Energy Managed Services (Outsourced Energy Management) to our clients by directly managing their energy system , with the intention of ensuring the establishment of best practice",
    icon: whitePowerEnergyMgt
  }, 
  {
    title: "Energy Management Consultation",
    desc: "We Consult and provide advisory services to our clients by analyzing their energy consumption with the intention of reducing their energy costs.",
    icon: whitePowerEnergyMgtConsultation
  }, 
  {
    title: "Energy Performance Contracting",
    desc: "Energy Performance Contracting (EPC) is a contractual agreement between SEMC , an Energy Service Company and our clients for the purpose of saving energy in the clients facilities",
    icon: whiteEnergyPerformance
  }, 
]


const EnergyServices = () => {
  return (
    <ServiceWrapper title="Our Energy Services Lines">
        <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6 lg:gap-[2rem]'>
            {
                cardEntries.map((entry) => <EnergyServiceCard key={entry.title} desc={entry.desc} title={entry.title} icon={entry.icon} />)

            }
        </div>
    </ServiceWrapper>
  )
}

export default EnergyServices
