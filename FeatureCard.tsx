import * as React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  iconSrc: string;
  bgColor: string;
  iconBgColor: string;
  borderColor: string;
  shadowColor: string;
  titleColor: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  iconSrc,
  bgColor,
  iconBgColor,
  borderColor,
  shadowColor,
  titleColor,
}) => {
  return (
    <article
      className={`flex flex-col justify-center items-start self-stretch px-4 py-5 bg-white border-2 border-solid min-h-[194px] rounded-[32px] w-[228px] ${borderColor} ${shadowColor}`}
    >
      <div className="w-full max-w-[180px] min-h-[155px]">
        <div className="flex gap-10 items-center w-[73px]">
          <div
            className={`flex gap-2.5 items-center self-stretch p-2.5 my-auto ${iconBgColor} h-[73px] rounded-[40px] w-[73px]`}
          >
            <img
              src={iconSrc}
              alt={title}
              className="object-contain self-stretch my-auto aspect-square w-[53px]"
            />
          </div>
        </div>
        <div className="mt-5 w-full">
          <h3 className={`text-lg font-semibold leading-none ${titleColor}`}>
            {title}
          </h3>
          <p className="mt-1.5 text-sm leading-5 text-sky-950">{description}</p>
        </div>
      </div>
    </article>
  );
};
