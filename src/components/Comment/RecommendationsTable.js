import React from "react";
import { MdRecommend } from "react-icons/md"
const RecommendationsTable = ({ currentWeather }) => {
  const getRecommendations = () => {
    if (!currentWeather) {
      return "No weather information available.";
    }
    const temperature = currentWeather.main.temp;
    const weatherDescription = currentWeather.weather[0].description;

    const recommendations = {
      hot: "It's hot today, it's best to stay home and stay in the air conditioning.",
      lightRain: "If it's raining, bring an umbrella.",
      brokenClouds: "Partly cloudy.",
      cold: "Cold weather. Please wear warm clothes.",
      clearSky: "Today the sky is very beautiful.",
      overcastClouds: "It's likely to rain, bring an umbrella when going out.",
      default: "There are no specific suggestions."
    };

    if (temperature > 30) {
      return recommendations.hot;
    } else if (weatherDescription.includes("light rain")) {
      return recommendations.lightRain;
    } else if (weatherDescription.includes("broken clouds")) {
      return recommendations.brokenClouds;
    } else if (temperature < 21) {
      return recommendations.cold;
    } else if (weatherDescription.includes("clear sky")) {
      return recommendations.clearSky;
    } else if (weatherDescription.includes("overcast clouds")) {
      return recommendations.overcastClouds;
    } else {
      return recommendations.default;
    }
  };


  return (
    <div className=" items-center p-12 gap-2 w-1/2">
    <div className="flex text-3xl text-black font-bold italic">
  <MdRecommend fontSize={40} />
  <h2 className="text-3xl text-white font-bold italic"> Recommended for you: </h2>
  </div>
  <p className="text-white block font-semibold text-xl ml-20">{getRecommendations()}</p>
</div>
  );
}

export default RecommendationsTable;
