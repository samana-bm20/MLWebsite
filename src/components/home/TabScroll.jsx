"use client";
import React, {useState, useEffect} from "react";
import { ContainerScroll } from "../ui/tab-scroll";
import SIDH from '../../assets/Maps/SIDH.JPG'
import CRIS from '../../assets/Maps/CRIS.JPG'
import MSSDS from '../../assets/Maps/MSSDS.JPG'
import IOCL from '../../assets/Maps/IOCL.JPG'
import RouteGIF from '../../assets/Location Map.mp4'

const images = [SIDH, CRIS, MSSDS, IOCL];


export function TabScroll() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, 500); // Match this duration to the CSS transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover transform scale-25 opacity-80"
        src={RouteGIF} // Replace with the path to your .mp4 video file
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay content */}
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-xl md:text-3xl font-semibold text-black mb-0 lg:mb-4">
              Experience the ease of <span className="text-[#b20000]">ROUTES</span> with <br />
              <span className="text-3xl md:text-6xl font-bold mt-1 leading-none">
                ML Maps
              </span>
            </h1>
          </>
        }
      >
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          height={720}
          width={1400}
          className={`mx-auto rounded-2xl object-fill h-full object-left-top transition ease-in-out duration-300 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
          draggable={false}
        />
        {/* <div
          className={`mx-auto rounded-2xl overflow-hidden relative transition-transform duration-500 ease-in-out transform ${
            isFading ? "translate-x-[100%]" : "translate-x-0"
          }`}
          style={{ whiteSpace: "nowrap" }}
        >
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            height={720}
            width={1400}
            className="inline-block object-cover h-full object-left-top"
            draggable={false}
          />
        </div> */}
      </ContainerScroll>
    </div>
  );
}


// export function TabScroll() {
//   return (
//     (<div className="flex flex-col overflow-hidden">
//       <ContainerScroll
//         titleComponent={
//           <>
//             <h1 className="text-2xl md:text-4xl font-semibold text-black dark:text-white">
//               Experience the ease of <span className="text-[#b20000]">ROUTES</span> with <br />
//               <span className="text-4xl md:text-[5rem] font-bold mt-1 leading-none">
//                 ML Maps
//               </span>
//             </h1>
//           </>
//         }>
//         <img
//           src={MapImage}
//           alt="hero"
//           height={720}
//           width={1400}
//           className="mx-auto rounded-2xl object-cover h-full object-left-top"
//           draggable={false} />
//       </ContainerScroll>
//     </div>)
//   );
// }
