import * as React from "react";
import { FeatureCard } from "./FeatureCard";

export const FeaturesGrid: React.FC = () => {
  const features = [
    {
      title: "AI Chat Tutor",
      description: "Get instant AI-powered learning assistance",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8b25eb5a0e605028113cec2db06c394bd4ee4af0e8a955634016b42250c28d7d?placeholderIfAbsent=true&apiKey=337d83a4aabe4b87b97ed3b760536e67",
      bgColor: "bg-white",
      iconBgColor: "bg-blue-400 bg-opacity-60",
      borderColor: "border-blue-600 border-opacity-60",
      shadowColor: "shadow-[0px_5px_0px_rgba(108,172,251,1)]",
      titleColor: "text-blue-600",
    },
    {
      title: "Quiz Generator",
      description: "Generate quizzes for efficient exam preparation",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d1091d51b635be84a241516b74429463b4b239a2f7244d2ac8d3840347f83269?placeholderIfAbsent=true&apiKey=337d83a4aabe4b87b97ed3b760536e67",
      bgColor: "bg-white",
      iconBgColor: "bg-fuchsia-200",
      borderColor: "border-fuchsia-400",
      shadowColor: "shadow-[0px_5px_0px_rgba(220,104,219,1)]",
      titleColor: "text-fuchsia-400",
    },
    // Add all other features here...
  ];

  return (
    <section className="flex flex-wrap gap-3.5 items-center mt-32 max-md:mt-10 max-md:max-w-full">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </section>
  );
};
