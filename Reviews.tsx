import * as React from "react";
import { ReviewCard } from "./ReviewCard";

export const Reviews: React.FC = () => {
  const reviews = [
    {
      name: "Amira Hussain",
      review:
        "Amazing writes your notes in seconds and saved me loads of times of watching videos or going through long PowerPoints. It is very helpful and saves so much time definitely recommend. The flashcards and quiz is also very helpful as it tests your knowledge as well it is truly amazing and a life saver",
      date: "1/6/25",
    },
    {
      name: "Ali Sayyid Umar",
      review:
        "Superhuman Al, could create presentation with diagram. I think it might be very well at English presentation but I'm not sure if it can convert to another language.",
      date: "1/6/25",
    },
    {
      name: "Nsikak Innocent umohubeng",
      review:
        "Very enjoyable and easy to use, I hope it is something I will be able to use with my data not until I subscribe. That's why I'm giving it 4 star for now.",
      date: "1/6/25",
    },
  ];

  return (
    <section className="mt-56 text-center max-md:mt-10">
      <div className="self-center max-w-full text-sky-950 w-[779px]">
        <h2 className="text-6xl font-bold leading-none rotate-[7.782585242921414e-9rad] max-md:max-w-full max-md:text-4xl">
          What Our Users Say
        </h2>
        <p className="mt-7 text-2xl leading-8 rotate-[7.782585242921414e-9rad] max-md:max-w-full">
          Real stories from learners who transformed their study experience with
          AI-powered tools. Smarter learning, better results!
        </p>
      </div>
      <div className="flex gap-5 items-start mt-12 text-sky-950 max-md:mt-10 max-md:max-w-full">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
};
