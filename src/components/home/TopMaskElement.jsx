"use client";
import { MaskContainer } from "../ui/top-mask-element";

export function TopMaskElement() {
  return (
    (<div
      className=" w-full flex items-center justify-center overflow-hidden">
      <MaskContainer
        revealText={
          <p
            className="text-white px-10 md:px-20 text-center text-3xl md:text-5xl font-bold">
            <span className="text-[#e84343]">ML Infomap</span> brings you <span className="text-[#e84343]">GIS solutions</span>, data, maps and apps.
          </p>
        }
        className="">
            <span className="text-[#b20000]">ML Infomap</span> brings you <span className="text-[#b20000]">GIS solutions</span>, data, maps and apps.
            </MaskContainer>
    </div>)
  );
}
