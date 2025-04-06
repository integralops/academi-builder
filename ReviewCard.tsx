import * as React from "react";

interface ReviewCardProps {
  name: string;
  review: string;
  date: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  review,
  date,
}) => {
  return (
    <article className="flex overflow-hidden flex-col px-7 pt-12 pb-5 bg-amber-300 bg-opacity-10 min-w-60 rounded-[48px] w-[660px] max-md:px-5 max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        <h3 className="w-full text-2xl font-bold leading-none text-sky-950 max-md:max-w-full">
          {name}
        </h3>
        <p className="mt-8 text-2xl leading-8 text-sky-950 max-md:max-w-full">
          {review}
        </p>
      </div>
      <time className="gap-2.5 self-start p-2.5 mt-7 text-base font-medium text-sky-950 whitespace-nowrap bg-white rounded-[40px]">
        {date}
      </time>
    </article>
  );
};
