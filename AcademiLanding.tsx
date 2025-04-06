"use client";
import * as React from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { FeaturesGrid } from "./FeaturesGrid";
import { Reviews } from "./Reviews";
import { Footer } from "./Footer";
import { DownloadButtons } from "./DownloadButtons";

export const AcademiLanding: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col pt-7 bg-white">
      <Header />
      <Hero />
      <FeaturesGrid />

      <section className="overflow-hidden px-20 pt-28 rotate-[3.1415925661670165rad] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-2/5 max-md:ml-0 max-md:w-full">
            <div className="self-stretch my-auto mr-0 w-full rotate-[-3.1415925661670165rad] max-md:mt-10 max-md:max-w-full">
              <div className="w-full min-h-[250px] rotate-[7.782585242921414e-9rad] text-sky-950 max-md:max-w-full">
                <h2 className="text-6xl font-bold leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
                  Revolutionize Your Learning with AI
                </h2>
                <p className="mt-7 text-2xl leading-8 max-md:max-w-full">
                  Boost productivity and learn smarter with AI-powered tools.
                  Organize subjects, track progress, and achieve success
                  effortlessly.
                </p>
              </div>
              <div className="mt-12 max-md:mt-10">
                <DownloadButtons />
              </div>
            </div>
          </div>
          <div className="ml-5 w-3/5 max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f1e12bd180479e673c83f6b58d8eb65b6572ce3266fc3a8a196334b4903886b?placeholderIfAbsent=true&apiKey=337d83a4aabe4b87b97ed3b760536e67"
              alt="AI Learning Platform"
              className="object-contain grow w-full aspect-[1.26] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </section>

      <Reviews />

      <button className="overflow-hidden gap-10 self-center py-20 pr-48 pl-48 mt-32 max-w-full text-6xl font-medium leading-none text-white bg-blue-600 min-h-[241px] rounded-[500px] w-[703px] max-md:px-5 max-md:mt-10 max-md:text-4xl">
        All Features
      </button>

      <Footer />
    </div>
  );
};

export default AcademiLanding;
