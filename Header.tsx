import * as React from "react";

export const Header: React.FC = () => {
  return (
    <header className="flex overflow-hidden flex-col pt-7 bg-white">
      <nav className="flex flex-wrap gap-5 justify-between self-center ml-6 w-full max-w-[1792px] max-md:max-w-full">
        <h1 className="gap-2 text-4xl font-semibold whitespace-nowrap text-sky-950">
          Academi
        </h1>
        <div className="self-start mt-2 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-10 items-start my-auto text-lg font-semibold leading-none text-sky-950 max-md:max-w-full">
              <a href="#" className="text-blue-600">
                Home
              </a>
              <a href="#">About Us</a>
              <a href="#">App Features</a>
              <a href="#">Contact US</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Refund Policy</a>
            </div>
            <div className="flex gap-4 items-center">
              <a href="#" aria-label="Social Media Link">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6ae9291dbb2ea153a5d1d53b6eeb35dd679a7ebfa89db853d3d3443679ecccf?placeholderIfAbsent=true&apiKey=337d83a4aabe4b87b97ed3b760536e67"
                  alt="Social Media Icon"
                  className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
                />
              </a>
              <a href="#" aria-label="Social Media Link">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/aebbe51b04912d1bf0b6cf25ea23873436be0436be9febd2b1517873d2ea924f?placeholderIfAbsent=true&apiKey=337d83a4aabe4b87b97ed3b760536e67"
                  alt="Social Media Icon"
                  className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
                />
              </a>
              <a href="#" aria-label="Social Media Link">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/125db1bef1bdb8303ec98ca7adfed962707514946badea0035e2d6583e07ff56?placeholderIfAbsent=true&apiKey=337d83a4aabe4b87b97ed3b760536e67"
                  alt="Social Media Icon"
                  className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
                />
              </a>
              <a href="#" aria-label="Social Media Link">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/12097e550ed1191bb1b9c4cca581216607fe554ed3ff30fc114f1f5be6cb60f2?placeholderIfAbsent=true&apiKey=337d83a4aabe4b87b97ed3b760536e67"
                  alt="Social Media Icon"
                  className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
                />
              </a>
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/43733b1d1687e022102990dada392d37efedb460f28300ecfd11c7dc9128d010?placeholderIfAbsent=true&apiKey=337d83a4aabe4b87b97ed3b760536e67"
            alt="Decorative Element"
            className="object-contain mt-1 aspect-[16.39] w-[49px]"
          />
        </div>
      </nav>
    </header>
  );
};
