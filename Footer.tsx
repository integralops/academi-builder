import * as React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="overflow-hidden w-full bg-slate-900 max-md:mt-10 max-md:max-w-full">
      <div className="flex relative flex-col justify-center items-center px-16 py-32 w-full min-h-[595px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/78c53b8063ee70c99cc13d5ee338d467746ac3a6d579592cb512e4612c41e119?placeholderIfAbsent=true&apiKey=337d83a4aabe4b87b97ed3b760536e67"
          alt="Footer Background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-wrap gap-10 items-start mb-0 w-full max-w-[1412px] min-h-[335px] max-md:mb-2.5 max-md:max-w-full">
          <div className="flex flex-col grow shrink min-w-60 w-[479px] max-md:max-w-full">
            <div className="flex flex-col w-full min-h-[184px] max-md:max-w-full">
              <h2 className="gap-2 self-start text-4xl font-semibold text-white whitespace-nowrap">
                Academi
              </h2>
              <p className="mt-5 text-lg text-white max-md:max-w-full">
                Academi Al is your Al-powered study companion, revolutionizing
                the way you learn, study, and absorb information. Embrace the
                future of education with intelligent, personalized learning
                experiences
              </p>
            </div>
            <div className="flex gap-4 items-center self-start mt-10">
              {[
                "https://cdn.builder.io/api/v1/image/assets/TEMP/78435619852ab84598a2b14f1744f58fd299773411d857f7036bc3001a0b8cf1?placeholderIfAbsent=true&apiKey=337d83a4aabe4b87b97ed3b760536e67",
                "https://cdn.builder.io/api/v1/image/assets/TEMP/8b4270df88cde7d9658edb445820f49fabc8ac41f6db87b3b193206745bf0728?placeholderIfAbsent=true&apiKey=337d83a4aabe4b87b97ed3b760536e67",
                "https://cdn.builder.io/api/v1/image/assets/TEMP/e91fd980562f0e1ec28d3c47a30494721143952a240dd00cb6b79642f8a16f68?placeholderIfAbsent=true&apiKey=337d83a4aabe4b87b97ed3b760536e67",
                "https://cdn.builder.io/api/v1/image/assets/TEMP/15bbc87950b2773f6fc1a3b41445489d4f584cc4050dac836ac723359cf84954?placeholderIfAbsent=true&apiKey=337d83a4aabe4b87b97ed3b760536e67",
              ].map((url, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={`Social Media Link ${index + 1}`}
                >
                  <img
                    src={url}
                    alt="Social Media Icon"
                    className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
                  />
                </a>
              ))}
            </div>
          </div>

          <nav className="grow shrink text-white w-[118px]">
            <h3 className="text-2xl font-bold">About Us</h3>
            <ul className="mt-5 w-full text-lg font-medium">
              <li>
                <a href="#" className="block mt-6">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block mt-6">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="block mt-6">
                  App Features
                </a>
              </li>
              <li>
                <a href="#" className="block mt-6">
                  Try Our App
                </a>
              </li>
              <li>
                <a href="#" className="block mt-6">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="block mt-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="block mt-6">
                  Refund Policy
                </a>
              </li>
            </ul>
          </nav>

          <div className="grow shrink text-white min-w-60 w-[392px] max-md:max-w-full">
            <h3 className="text-2xl font-bold">Location</h3>
            <address className="mt-5 max-w-full text-lg font-medium w-[258px] not-italic">
              Locify, Inc990 Biscayne Blvd, Office 503MiamiFL 33132. USA
            </address>
          </div>

          <div className="grow shrink text-white w-[118px]">
            <h3 className="text-2xl font-medium">Home</h3>
            <a
              href="mailto:info@academiai.org"
              className="block mt-6 text-lg leading-8"
            >
              info@academiai.org
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
