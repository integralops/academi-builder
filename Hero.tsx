import * as React from "react";
import { DownloadButtons } from "./DownloadButtons";

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-wrap gap-10 items-center self-center mt-28 max-md:mt-10 max-md:max-w-full">
      <div className="self-stretch my-auto min-w-60 w-[611px] max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <h2 className="text-8xl leading-[107px] text-zinc-800 max-md:max-w-full max-md:text-4xl max-md:leading-10">
            <span
              style={{
                fontFamily:
                  "Helvetica Rounded, -apple-system, Roboto, Helvetica, sans-serif",
                fontWeight: 700,
                color: "rgba(0,114,255,1)",
              }}
            >
              Smarter{" "}
            </span>
            <span
              style={{
                fontFamily:
                  "Helvetica Rounded, -apple-system, Roboto, Helvetica, sans-serif",
                fontWeight: 700,
                color: "rgba(14,42,76,1)",
              }}
            >
              Learning
            </span>{" "}
            <span
              style={{
                fontFamily:
                  "Helvetica Rounded, -apple-system, Roboto, Helvetica, sans-serif",
                fontWeight: 700,
                color: "rgba(14,42,76,1)",
              }}
            >
              Starts Here
            </span>
          </h2>
          <p className="mt-6 text-2xl leading-8 text-sky-950 max-md:max-w-full">
            Your AI-powered study assistant! Academi.AI helps students create
            notes, quizzes, presentations, and assignments effortlessly.
            Simplify your study experience with advanced AI tools
          </p>
        </div>
        <div className="mt-12 max-md:mt-10">
          <DownloadButtons />
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3061fccc45c88241156263873488f687f0d36a71650ef8a60e27579b762935c?placeholderIfAbsent=true&apiKey=337d83a4aabe4b87b97ed3b760536e67"
        alt="Learning Platform Preview"
        className="object-contain self-stretch my-auto aspect-[1.7] min-w-60 w-[887px] max-md:max-w-full"
      />
    </section>
  );
};
