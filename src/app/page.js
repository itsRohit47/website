"use client";
import HomePage from "../components/HomePage";
import Education from "../components/Education";
import Work from "../components/Work";
import Love from "../components/Love";
import { useState, useEffect } from "react";

const Welcome = [<HomePage key={1} />, <Education key={2} />];
const projectComponents = [<Work key={1} />, <Love key={2} />];

export default function Home() {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const [currentComponentArray, setCurrentComponentArray] = useState(Welcome);
  const [animationClass, setAnimationClass] = useState("fade-in");

  function handleKeyDown(event) {
    if (
      ["ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp"].includes(event.key)
    ) {
      setAnimationClass("fade-out");

      setTimeout(() => {
        if (event.key === "ArrowLeft") {
          setCurrentComponentArray(Welcome);
          setCurrentComponentIndex(0);
        } else if (event.key === "ArrowRight") {
          setCurrentComponentArray(projectComponents);
          setCurrentComponentIndex(0);
        } else if (event.key === "ArrowDown") {
          setCurrentComponentIndex((prevIndex) =>
            prevIndex === currentComponentArray.length - 1 ? 0 : prevIndex + 1
          );
        } else if (event.key === "ArrowUp") {
          setCurrentComponentIndex((prevIndex) =>
            prevIndex === 0 ? currentComponentArray.length - 1 : prevIndex - 1
          );
        }
        setAnimationClass("fade-in");
      }, 500); // Match the transition duration in the CSS
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const CurrentComponent = currentComponentArray[currentComponentIndex];

  return <main className={animationClass}>{CurrentComponent}</main>;
}
