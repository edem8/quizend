<<<<<<< HEAD
import React, { useState } from "react";
import Onboarding from "./screens/onboarding/Onboarding";
import Quiz from "./screens/quiz/Quiz";
import Score from "./screens/score/Score";
import { lightTheme, darkTheme } from "./theme/theme";
import { DefaultTheme, ThemeProvider } from "styled-components";
import AppContainer from "./Components/AppContainer";

type Question = {
  question: string;
  options: string[];
  answer: string;
};

type Subject = {
  title: string;
  icon: string;
  bgColor: string;
  questions: Question[];
};
=======
import React from 'react';

>>>>>>> styledComponents

function App() {
  const [currentScreen, setCurrentScreen] = useState<
    "onboarding" | "quiz" | "score"
  >("onboarding");
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [score, setScore] = useState<number>(0);
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

  const handleStartQuiz = (subject: Subject) => {
    setSelectedSubject(subject);
    setCurrentScreen("quiz");
  };

  const handleQuizComplete = (score: number) => {
    setCurrentScreen("score");
    setScore(score);
  };

  const handlePlayAgain = () => {
    setSelectedSubject(null);
    setCurrentScreen("onboarding");
    setScore(0);
  };

  const handleThemeSwitch = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContainer
        isVisible={currentScreen !== "onboarding"}
        src={selectedSubject?.icon}
        title={selectedSubject?.title}
        bgColor={selectedSubject?.bgColor}
        handleThemeSwitch={handleThemeSwitch}
      >
        {currentScreen === "onboarding" && (
          <Onboarding onStartQuiz={handleStartQuiz} />
        )}
        {currentScreen === "quiz" && selectedSubject && (
          <Quiz subject={selectedSubject} onQuizComplete={handleQuizComplete} />
        )}
        {currentScreen === "score" && selectedSubject && (
          <Score
            score={score}
            onPlayAgain={handlePlayAgain}
            subject={selectedSubject}
          />
        )}
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
