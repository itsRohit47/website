"use client";
import { useState, useEffect, useRef } from "react";
import HomePage from "../components/HomePage";
import Education from "../components/Education";
import Work from "../components/Work";
import Love from "../components/Love";

// Define your components arrays
const Welcome = [<HomePage key="home" />, <Education key="edu" />];
const projectComponents = [<Work key="work" />, <Love key="love" />];

// Define names and classes for arrays
const arrayNames = {
  Welcome: "Welcome",
  projectComponents: "Projects",
};

const arrayClasses = {
  Welcome: "welcome-class",
  projectComponents: "projects-class",
};

export default function Home() {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const [currentComponentArray, setCurrentComponentArray] = useState(Welcome);
  const [animationClass, setAnimationClass] = useState("fade-in");

  // Use useRef to create persistent references for the audio elements
  const sound = useRef(null);

  useEffect(() => {
    // Initialize the audio elements
    sound.current = new Audio("audio/sound.mp3");
  }, []);

  useEffect(() => {
    const pageNameElement = document.getElementById("page-name");
    if (pageNameElement) {
      pageNameElement.innerText = getCurrentArrayName();
      pageNameElement.className = getCurrentArrayClass();
    }
  }, [currentComponentArray]);

  const getCurrentArrayName = () => {
    return currentComponentArray === Welcome
      ? arrayNames.Welcome
      : arrayNames.projectComponents;
  };

  const getCurrentArrayClass = () => {
    return currentComponentArray === Welcome
      ? arrayClasses.Welcome
      : arrayClasses.projectComponents;
  };

  function handleKeyDown(event) {
    if (
      ["ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp"].includes(event.key)
    ) {
      setAnimationClass("fade-out");
      sound.current.play(); // Play switch sound

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
          navigateSoundRef.current.play(); // Play navigate sound
        } else if (event.key === "ArrowUp") {
          setCurrentComponentIndex((prevIndex) =>
            prevIndex === 0 ? currentComponentArray.length - 1 : prevIndex - 1
          );
          navigateSoundRef.current.play(); // Play navigate sound
        }
        setAnimationClass("fade-in");
      }, 500); // Ensure this matches your CSS transition duration
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const CurrentComponent = currentComponentArray[currentComponentIndex];

  return (
    <>
      <main className={animationClass}>{CurrentComponent}</main>
    </>
  );
}
