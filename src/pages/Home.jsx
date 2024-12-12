import React from 'react'
import { Skeleton } from '@mui/material';
import { TopMaskElement } from '../components/home/TopMaskElement';
import { TabScroll } from '../components/home/TabScroll';
import About from '../components/home/About';
import { TechApps } from '../components/home/TechApps';
import { DataMaps } from '../components/home/DataMaps';

const Home = () => {
  return (
    <div>
      <TopMaskElement />
      <TabScroll />
      {/* <div className='p-16'>
        <Skeleton
          sx={{ bgcolor: '#85a2c1' }}
          variant="rectangular"
          className='w-full'
          height={100} />
      </div> */}
      <div className="px-8 md:px-10 lg:px-20 py-5 lg:py-10 flex justify-center bg-gray-300">
        <About />
        {/* <Skeleton
          sx={{ bgcolor: '#e59090' }}
          variant="rectangular"
          className='w-[40rem]'
          height={300} /> */}
      </div>
      <TechApps />
      <div className="mt-6 flex justify-center bg-gray-300">
        <DataMaps />
        {/* <Skeleton
          sx={{ bgcolor: '#e59090' }}
          variant="rectangular"
          className='w-[40rem]'
          height={300} /> */}
      </div>    </div>
  )
}

export default Home