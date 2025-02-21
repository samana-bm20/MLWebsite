"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/tech-apps";
import sidhImage from "../../assets/Maps/SIDH.png";
import MarketsIndia from "../../assets/Maps/MarketsIndia.JPG";
import GapAnalysisNSDC from "../../assets/Maps/gap-analysis-nsdc.png";
import VtsUsecase from "../../assets/Maps/VTS-usecase.png";
import Satellite from "../../assets/Maps/immunization-satellite.png";

export function TechApps() {
  return (
    <div className="h-[33rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden pt-2 md:pt-8">
      <div className="flex flex-col items-center">
        <div className="text-primary font-semibold text-lg md:text-2xl font-inter">
          Use Cases in
        </div>
        <div className="text-contrast text-2xl md:text-4xl font-semibold font-inter pb-6">
          GIS Solutions
        </div>
      </div>
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    image: GapAnalysisNSDC,
    name: "PROBLEM SOLVING WITH GEOSPATIAL TECHNOLOGY",
    title: "The Skills India Digital Project",
  },
  {
    image: VtsUsecase,
    name: "INDIA’S LARGEST COMPANY INDIANOIL USES GIS FOR FLEET MANAGEMENT",
    title: "Geospatial Technology For Safe Movement of LPG",
  },
  {
    image: MarketsIndia,
    name: "GEOSPATIAL APP FOR MARKET DISCOVERY",
    title: "Markets India",
  },
  {
    image: Satellite,
    name: "REACHING HEALTHCARE TO REMOTE AREAS",
    title: "Immunization Coverage & Vaccine Consumption In Rural India",
  },
  {
    image: sidhImage,
    name: "URBAN LOCAL BODIES USE GEO APP FOR WASTE COLLECTION",
    title: "Swachh Nagar Engineer App",
  },
];
