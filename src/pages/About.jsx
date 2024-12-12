import React from 'react'
import GISGlobe from '../assets/About/GISGlobe.webp'
import './About.css'
import Globe from '../assets/About/canva.png'

const About = () => {
  return (
    <>
      {/* <div className='bg-[#0c315b] h-[20rem] flex pr-20'>
        <div className='ml-10 pl-10 py-4'>
          <img src={GISGlobe} alt="GIS Globe" className="h-[18rem] rounded-xl object-cover border-white border-[2px]" />
        </div>
        <div className="container flex items-center">
          <div className="text-3xl font-bold text-gray-400 pl-20">We Deliver Quality <span className='text-white'>IT Services and Data</span> <span className='text-[#e84343]'>Across the World</span>.</div>
        </div>
      </div> */}
      <div className='py-4 flex items-center'>
        <img src={Globe} alt="GIS Globe" className="h-[30rem] rounded-xl object-covers" />
        <div className="text-xl p-10 mr-10 text-justify">
          ML Infomap develops solutions for corporate and government sectors in ESRI ArcGIS and MERN stack. It creates high-quality vector maps, ensuring customers benefit from accurate geocoding, geofencing, linear referencing and routing. ML Infomap focuses on solutions for several verticals like fleet management, digital transformation, infrastructure, defence, agriculture, skilling and healthcare.
        </div>
      </div>
      <div className='py-4 flex items-center'>
        <div className="text-xl mx-10 p-10 text-justify">
          ML Infomap develops solutions for corporate and government sectors in ESRI ArcGIS and MERN stack. It creates high-quality vector maps, ensuring customers benefit from accurate geocoding, geofencing, linear referencing and routing. ML Infomap focuses on solutions for several verticals like fleet management, digital transformation, infrastructure, defence, agriculture, skilling and healthcare.
        </div>
        <img src={Globe} alt="GIS Globe" className="h-[30rem] rounded-xl object-covers" />
      </div>
    </>
  )
}

export default About

