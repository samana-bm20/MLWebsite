import React from 'react'

const TechApps = () => {
  return (
    <>
      <div className='py-4 flex items-center'>

        <div className='px-8 py-2 md:px-10 md:py-4 lg:px-20 lg:py-8'>

          <div className='tech content'>
            <p className='text-lg md:text-4xl font-bold text-[#0C315B] mb-2'><span className="text-[#b20000]">TECH</span>NOLOGY</p>
            <p className='text-sm md:text-lg text-justify font-parkinsans'>ML Infomap is a one-stop-shop for developing GIS solutions for informed decision making and ease of operations. With over three decades of experience in the geospatial sector, we are able to provide technological expertise and unmatched support to clients in their digital transformation experience in planning, implementation and operational functions.</p>
            <p className='text-sm md:text-lg text-justify font-parkinsans pt-2'>We develop real-time location-based apps for countrywide asset management and field operations. We have powerful enterprise solutions for road and railway transportation, management of the skills development ecosystem, health environment, digital mapping and imagery data processing.</p>
            <p className='text-sm md:text-lg text-justify font-parkinsans pt-2'>Our solutions offer complete automated work flows to ensure routine work is conducted smoothly. All routine functions like generation of orders, approvals, compliances, reports, alerts and contractual billing are all possible from our unified GIS platform.</p>
            <p className='text-sm md:text-lg text-justify font-parkinsans pt-2'>We design and develop :-</p>
            <ul className='list-disc pl-5'>
              <li className='text-sm md:text-lg font-parkinsans'>GIS solutions on ESRI technology and Open Source.</li>
              <li className='text-sm md:text-lg font-parkinsans'>Apps on Cloud, Desktop & Mobile platforms.</li>
            </ul>
          </div>

          <div className='tech-stack'>

            <div className="w-full mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="border-[#b20000] bg-gray-200 border-2 shadow-custom3D p-3">
                <p className='text-xs md:text-lg leading-normal md:leading-relaxed font-parkinsans'>Our Technology strengths are in modeling, cloud computing, database, data analytics, AI:ML processing satellite and drone images, Mixed Reality, full stack Web app development.</p>
              </div>
              <div className="border-[#b20000] bg-gray-200 border-2 shadow-custom3D p-3">
                <p className='text-xs md:text-lg leading-normal md:leading-relaxed font-parkinsans'>Our extensive Platform Experience includes AWS and Azure for cloud, and Android and iOS for mobiles.</p>
              </div>
              <div className="border-[#b20000] bg-gray-200 border-2 shadow-custom3D p-3">
                <p className='text-xs md:text-lg leading-normal md:leading-relaxed font-parkinsans'>Our System Integration capabilities include linking apps, platforms & technologies like GPS, images, database, SAP, video and other sensors.</p>
              </div>
              <div className="border-[#b20000] bg-gray-200 border-2 shadow-custom3D p-3">
                <p className='text-xs md:text-lg leading-normal md:leading-relaxed font-parkinsans'>Our IT/GIS solutions cover fleet management, management of healthcare and skills environment, digitizing, 3D visualization, pattern and change detection using AI:ML.</p>
              </div>
            </div>

            <div className='pt-8'>
              <p className='text-sm md:text-lg text-justify font-parkinsans py-4'>We have strong in-house programming capabilities. We offer:-</p>
              <div className="w-full mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border-[#0c315b] bg-gray-200 border-2 shadow-custom3D p-3">
                  <p className='text-xs md:text-lg leading-normal md:leading-relaxed font-parkinsans'>MERN & MEAN Stack Development</p>
                </div>
                <div className="border-[#0c315b] bg-gray-200 border-2 shadow-custom3D p-3">
                  <p className='text-xs md:text-lg leading-normal md:leading-relaxed font-parkinsans'>Technology: .NET, Python, JavaScript, Java, PHP</p>
                </div>
                <div className="border-[#0c315b] bg-gray-200 border-2 shadow-custom3D p-3">
                  <p className='text-xs md:text-lg leading-normal md:leading-relaxed font-parkinsans'>Databases: MS SQL, Mongo, Dynmo, Postgres, Oracle, MySQL</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default TechApps