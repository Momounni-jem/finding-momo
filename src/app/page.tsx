"use client";

import { useCallback, useState } from "react";
import CompletionScreen from "@/components/CompletionScreen";
import FoundPopup from "@/components/FoundPopup";
import GameHeader from "@/components/GameHeader";
import LandingPage from "@/components/LandingPage";
import MomoStreetView from "@/components/MomoStreetView";
import { LANDMARKS, TOTAL_LANDMARKS } from "@/data/landmarks";

type Screen = "landing" | "game" | "complete";
type GameStatus = "loading-street-view" | "playing";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("landing");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gameStatus, setGameStatus] = useState<GameStatus>("loading-street-view");
  const [showFoundPopup, setShowFoundPopup] = useState(false);

  const currentLandmark = LANDMARKS[currentIndex];
  const isLastLandmark = currentIndex === TOTAL_LANDMARKS - 1;

  const handlePanoramaReady = useCallback(() => {
    setGameStatus("playing");
  }, []);

  function handleStart() {
    setCurrentIndex(0);
    setShowFoundPopup(false);
    setGameStatus("loading-street-view");
    setScreen("game");
  }

  function handleFindMomo() {
    setShowFoundPopup(true);
  }

  function handleNextMomo() {
    setShowFoundPopup(false);

    if (isLastLandmark) {
      setScreen("complete");
      return;
    }

    setCurrentIndex((index) => index + 1);
    setGameStatus("loading-street-view");
  }

  function handleStartOver() {
    setCurrentIndex(0);
    setShowFoundPopup(false);
    setGameStatus("loading-street-view");
    setScreen("game");
  }

  function handleBackToHome() {
    setScreen("landing");
    setCurrentIndex(0);
    setShowFoundPopup(false);
    setGameStatus("loading-street-view");
  }

  if (screen === "landing") {
    return <LandingPage onStart={handleStart} />;
  }

  if (screen === "complete") {
    return <CompletionScreen onStartOver={handleStartOver} />;
  }

  if (!currentLandmark) {
    return null;
  }

  return (
    <div className="relative h-dvh w-full overflow-hidden">
      <div className="absolute inset-0">
        <MomoStreetView
          key={currentLandmark.id}
          landmark={currentLandmark}
          hideMomo={showFoundPopup}
          onFindMomo={handleFindMomo}
          onPanoramaReady={handlePanoramaReady}
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 p-4">
        <GameHeader
          landmark={currentLandmark}
          currentIndex={currentIndex}
          total={TOTAL_LANDMARKS}
          isLoading={gameStatus === "loading-street-view"}
          onBackToHome={handleBackToHome}
        />
      </div>

      {showFoundPopup && (
        <FoundPopup
          image={currentLandmark.momoImage}
          foundText={currentLandmark.foundText}
          isLast={isLastLandmark}
          onNext={handleNextMomo}
          onBackToHome={handleBackToHome}
        />
      )}
    </div>
  );
}
