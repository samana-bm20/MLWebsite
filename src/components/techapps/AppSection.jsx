import React from "react";
import AppsBg from "../../assets/TechApps/Appsbg.png";
import CRIS from "../../assets/TechApps/CRIS.JPG";
import IOCL from "../../assets/TechApps/IOCL.JPG";
import MSSDS from "../../assets/TechApps/MSSDS.JPG";
import nsdcPresident from "../../assets/TechApps/shrestha-president-india-nsdc.jpeg";
import gapAnalysis from "../../assets/TechApps/gap-analysis-nsdc.png";
import mapNsdc from "../../assets/TechApps/map-nsdc.jpg";
import { Button } from "@mui/material";

const AppSection = () => {
  return (
    <div>
      <div className="px-8 md:px-10 lg:px-20 pt-5 lg:pt-20 flex flex-col justify-center items-center">
        <p className="text-primary font-semibold text-lg md:text-2xl font-inter">
          Our Services
        </p>
        <p className="text-contrast text-2xl md:text-4xl font-semibold font-inter text-center">
          Geospatial Solutions for Real-World Challenges
        </p>
      </div>
      <div
        className="px-8 md:px-10 lg:px-20 py-8 lg:py-16 mt-[5rem] flex flex-col gap-8 md:gap-12"
        style={{
          backgroundImage: `url(${AppsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full rounded-xl bg-primary-light shadow-custom p-6 md:py-8 md:px-12">
          <p className="text-primary text-base sm:text-lg md:text-2xl font-semibold font-inter pb-4 md:pb-6">
            The Skill India Digital Project
          </p>
          <div className="flex flex-col-reverse md:flex-row">
            <div className="md:w-1/3 flex flex-col justify-start md:pr-6">
              <img
                src={nsdcPresident}
                alt="NSDC with President"
                className="rounded-sm"
              />
              <div className="flex flex-row-reverse pt-4 md:pt-6">
                <Button variant="contained" size="small" color="secondary">
                  Visit Website
                </Button>
              </div>
            </div>
            <div className="md:w-2/3 flex items-start md:pl-6 pb-4 md:pb-0">
              <p className="text-contrast text-xs sm:text-sm md:text-lg font-inter">
                ML Infomap used geospatial technology in the Skill India Digital
                project to accurately map the skills ecosystem for the{" "}
                <span className="text-primary font-medium">
                  National Skill Development Corporation
                </span>
                . This technology provided real-time updates on skill centers,
                training programs, and industry collaborations, ensuring the
                platform stayed current. It empowered stakeholders with insights
                for better planning and decision-making, helping improve access
                to quality skill development. The use of GIS also boosted
                skilled talent hiring, supported lifelong learning, and advanced
                career growth opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full rounded-xl bg-secondary-light shadow-custom p-6 md:py-8 md:px-12">
          <p className="text-secondary text-base sm:text-lg md:text-2xl font-semibold font-inter pb-4 md:pb-6">
            Center for Railway Information System
          </p>
          <div className="flex flex-col-reverse md:flex-row">
            <div className="md:w-1/3 flex flex-col justify-start md:pr-6">
              <img src={CRIS} alt="CRIS" className="rounded-sm" />
              <div className="flex flex-row-reverse pt-4 md:pt-6">
                <Button variant="contained" size="small" color="primary">
                  Visit Website
                </Button>
              </div>
            </div>
            <div className="md:w-2/3 flex items-start md:pl-6 pb-4 md:pb-0">
              <p className="text-contrast text-xs sm:text-sm md:text-lg font-inter">
                The model is now being implemented in{" "}
                <span className="text-secondary font-medium">
                  Bihar, Jharkhand, Odisha, and West Bengal
                </span>
                . The success of the project relies on providing a seamless
                IT/GIS solution, integrating components such as GPS, GIS
                software, digital maps, voice triggers, telecom, geo-database,
                spatial analytics, SAP interface, and text messaging. All
                systems must work together in the Data Centre and Cloud, with a
                reliable telecom network for real-time data transfer. Indian Oil
                can monitor the entire truck fleet online, and transporters view
                it as a compliance measure. Drivers are aware that deviations
                from approved routes will be detected. This ongoing project,
                delivered through a Service Delivery Model, has significantly
                improved LPG transport compliance and safety.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full rounded-xl bg-primary-light shadow-custom p-6 md:py-8 md:px-12">
          <p className="text-primary text-base sm:text-lg md:text-2xl font-semibold font-inter pb-4 md:pb-6">
            Geospatial Technology For Safe Movement of LPG
          </p>
          <div className="flex flex-col-reverse md:flex-row">
            <div className="md:w-1/3 flex flex-col justify-start md:pr-6">
              <img src={IOCL} alt="IOCL" className="rounded-sm" />
              <div className="flex flex-row-reverse pt-4 md:pt-6">
                <Button variant="contained" size="small" color="secondary">
                  Visit Website
                </Button>
              </div>
            </div>
            <div className="md:w-2/3 flex items-start md:pl-6 pb-4 md:pb-0">
              <p className="text-contrast text-xs sm:text-sm md:text-lg font-inter">
                ML Infomap used geospatial technology in the Skill India Digital
                project to accurately map the skills ecosystem for the{" "}
                <span className="text-primary font-medium">
                  National Skill Development Corporation
                </span>
                . This technology provided real-time updates on skill centers,
                training programs, and industry collaborations, ensuring the
                platform stayed current. It empowered stakeholders with insights
                for better planning and decision-making, helping improve access
                to quality skill development. The use of GIS also boosted
                skilled talent hiring, supported lifelong learning, and advanced
                career growth opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full rounded-xl bg-secondary-light shadow-custom p-6 md:py-8 md:px-12">
          <p className="text-secondary text-base sm:text-lg md:text-2xl font-semibold font-inter pb-4 md:pb-6">
            Mahaswayam Analytical Dashboard
          </p>
          <div className="flex flex-col-reverse md:flex-row">
            <div className="md:w-1/3 flex flex-col justify-start md:pr-6">
              <img src={MSSDS} alt="MSSDS" className="rounded-sm" />
              <div className="flex flex-row-reverse pt-4 md:pt-6">
                <Button variant="contained" size="small" color="primary">
                  Visit Website
                </Button>
              </div>
            </div>
            <div className="md:w-2/3 flex items-start md:pl-6 pb-4 md:pb-0">
              <p className="text-contrast text-xs sm:text-sm md:text-lg font-inter">
                The model is now being implemented in{" "}
                <span className="text-secondary font-medium">
                  Bihar, Jharkhand, Odisha, and West Bengal
                </span>
                . The success of the project relies on providing a seamless
                IT/GIS solution, integrating components such as GPS, GIS
                software, digital maps, voice triggers, telecom, geo-database,
                spatial analytics, SAP interface, and text messaging. All
                systems must work together in the Data Centre and Cloud, with a
                reliable telecom network for real-time data transfer. Indian Oil
                can monitor the entire truck fleet online, and transporters view
                it as a compliance measure. Drivers are aware that deviations
                from approved routes will be detected. This ongoing project,
                delivered through a Service Delivery Model, has significantly
                improved LPG transport compliance and safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
