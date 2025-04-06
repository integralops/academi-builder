"use client";
import * as React from "react";

export const DownloadButtons: React.FC = () => {
  return (
    <div className="flex gap-2.5 items-center max-w-full text-white h-[68px] w-[419px]">
      <button className="flex overflow-hidden gap-4 self-stretch px-4 py-3.5 my-auto text-lg uppercase rounded-xl bg-sky-950 w-[205px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b62798da483c0f028dedba7fc335d3fafc220df12177ea5f6be4cebb6a364d3?placeholderIfAbsent=true&apiKey=337d83a4aabe4b87b97ed3b760536e67"
          alt="Google Play Store"
          className="object-contain shrink-0 self-start aspect-[0.87] w-[35px]"
        />
        <div className="flex flex-col justify-center">
          <span>GET IT ON</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4931ea60ed44fd74018ca1b8b9612b87b8aad8c8195620a5185f06c4a2d30f0c?placeholderIfAbsent=true&apiKey=337d83a4aabe4b87b97ed3b760536e67"
            alt="Google Play"
            className="object-contain mt-1.5 max-w-full aspect-[5.05] w-[126px]"
          />
        </div>
      </button>
      <button className="flex overflow-hidden gap-3.5 self-stretch p-3.5 my-auto rounded-xl bg-sky-950 w-[205px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/52014a2d4cb77a9d835e1ff61f4d796162d28e0b6a2c9f5af3306360ac5b8d3d?placeholderIfAbsent=true&apiKey=337d83a4aabe4b87b97ed3b760536e67"
          alt="App Store"
          className="object-contain shrink-0 self-start aspect-[0.85] w-[34px]"
        />
        <div>
          <p className="text-xs font-light leading-none">Download on the</p>
          <p className="text-2xl font-medium tracking-tighter leading-none">
            App Store
          </p>
        </div>
      </button>
    </div>
  );
};
