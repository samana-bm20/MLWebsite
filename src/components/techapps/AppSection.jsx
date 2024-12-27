import React from 'react'
import nsdcPresident from '../../assets/TechApps/shrestha-president-india-nsdc.jpeg'
import gapAnalysis from '../../assets/TechApps/gap-analysis-nsdc.png'
import mapNsdc from '../../assets/TechApps/map-nsdc.jpg'
import { Button } from '@mui/material'

const AppSection = () => {
    return (
        <div className='px-8 py-2 md:px-10 md:py-4 lg:px-20 lg:py-8'> USECASES:
            <div className="app-content bg-gray-100 p-6 rounded-md shadow-custom mt-2">
                <p className='text-md md:text-3xl font-parkinsans font-bold text-[#0c315b] mb-2'>The Skills India Digital Project</p>
                <div className="photos w-full mt-2 grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                    <div className="flex items-center">
                        <img src={mapNsdc} alt="map" className='border-2 border-[#b20000] rounded-md shadow-lg'/>
                    </div>
                    <div className="flex items-center">
                        <img src={nsdcPresident} alt="nsdcPresident" className='border-2 border-[#b20000] rounded-md shadow-lg'/>
                    </div>
                    <div className="flex items-center">
                        <img src={gapAnalysis} alt="gapAnalysis" className='border-2 border-[#b20000] rounded-md shadow-lg'/>
                    </div>
                </div>
                <p className='text-xs md:text-[1rem] leading-normal md:leading-relaxed text-[#3f3f3f] text-justify font-parkinsans pt-4'>Innovative use of geospatial technology by ML Infomap in the Skill India Digital project of National Skill Development Corporation facilitated accurate mapping of the skills ecosystem. It also empowered stakeholders with actionable insights for strategic planning and decision-making in the realm of access to quality skill development. Geospatial technology enabled real-time updates of skill development centres, training programs, and industry collaborations. This dynamic mapping ensured that the platform reflected the current state of the skills ecosystem, fostering accuracy, relevant opportunities, and entrepreneurial support. Use of GIS resulted in a breakthrough in accelerating skilled talent hiring, facilitating lifelong learning and career advancement.</p>
                <p className='text-xs md:text-[1rem] leading-normal md:leading-relaxed text-[#3f3f3f] text-justify font-parkinsans pt-2'>Hon’ble President of India, Smt. Draupadi Murmu, at the inauguration of Skills India Digital. Shreshtha Gupta, EVP NSDC, explaining salient features of mapping the skills ecosystem.</p>
            </div>
        </div>
    )
}

export default AppSection