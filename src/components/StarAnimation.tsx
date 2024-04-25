"use client";

import Starfield from "react-starfield";
import { useEffect, useState } from "react";

export default function StarAnimation() {
  const [starCount, setStarCount] = useState(5000);

  // after 5 seconds, change the star count
  useEffect(() => {
    const timer = setTimeout(() => {
      setStarCount(2000);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // after 10 seconds, change the star count back to 500
  useEffect(() => {
    const timer = setTimeout(() => {
      setStarCount(500);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Starfield
      starCount={starCount}
      starColor={[255, 255, 255]}
      speedFactor={0.08}
      backgroundColor="black"
    />
  );
}
