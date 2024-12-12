"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/tech-apps";
import sidhImage from '../../assets/Maps/SIDH.png';
import nightRoute from '../../assets/nightRoute.jpg';
import GapAnalysisNSDC from '../../assets/gap-analysis-nsdc.png';
import VtsUsecase from '../../assets/VTS-usecase.png';
import Satellite from '../../assets/immunization-satellite.png';




export function TechApps() {
  return (
    (<div
      className="h-[33rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden pt-2 md:pt-8">
      <div className="flex flex-col items-center">
        <div className='text-xl md:text-2xl lg:text-3xl font-bold text-gray-600'>Use cases in</div>
        <div className='text-3xl md:text-4xl lg:text-6xl font-bold text-[#0C315B] pb-6'><span className="text-[#b20000]">GIS</span> Solutions</div>
      </div>
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </div>)
  );
}

const testimonials = [
  {
    image: sidhImage,
    name: "PROBLEM SOLVING WITH GEOSPATIAL TECHNOLOGY",
    title: "The Skills India Digital Project",
  },
  {
    image: VtsUsecase,
    name: "INDIA’S LARGEST COMPANY INDIANOIL USES GIS FOR FLEET MANAGEMENT",
    title: "Geospatial Technology For Safe Movement of LPG",
  },
  {
    image: GapAnalysisNSDC,
    name: "GEOSPATIAL APP FOR MARKET DISCOVERY",
    title: "Markets India",
  },
  {
    image: Satellite,
    name: "REACHING HEALTHCARE TO REMOTE AREAS",
    title: "Immunization Coverage & Vaccine Consumption In Rural India",
  },
  {
    image: nightRoute,
    name: "URBAN LOCAL BODIES USE GEO APP FOR WASTE COLLECTION",
    title: "Swachh Nagar Engineer App",
  },
];