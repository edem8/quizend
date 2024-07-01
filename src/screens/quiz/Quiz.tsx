import { QuizContentWrapper } from "./QuizStyles";
import { useState } from "react";
import Progress from "../../Components/ProgressBar";
import { DefaultButton } from "../../Components/DefaultButton";
import { SelectedOptionsButton } from "../../Components/OptionsButton";
import { Icon, InvalidSubmissionIcon } from "../../styledComponents/IconStyles";
import { InvalidSubmissionWrapper } from "../../styledComponents/AppWrapperStyles";

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

type QuizProp = {
  subject: Subject;
  onQuizComplete: (score: number) => void;
};

type SelectedStatus = "correct" | "wrong";

const error = "/images/icon-error.svg";
const correct = "/images/icon-correct.svg";

function Quiz({ subject, onQuizComplete }: QuizProp) {
  const size: number = 24;
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [optionSelected, setOptionSelected] = useState<number | null>(null);
  const [selectedOptionStatus, setSelectedOptionStatus] =
    useState<SelectedStatus | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [invalidSubmission, setInvalidSubmission] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  // Retrieve index of correct answer for current question
  const correctAnswerIndex = subject.questions[
    currentQuestion
  ].options.findIndex(
    (option) => option === subject.questions[currentQuestion].answer
  );

  //handler for next question
  const handleNextQuestion = () => {
    console.log("current question index", currentQuestion);
    setIsAnswerSubmitted(false);
    setOptionSelected(null);
    setSelectedOptionStatus(null);
    setInvalidSubmission(false);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < subject.questions.length) {
      setCurrentQuestion(nextQuestion);
      setProgress((nextQuestion / subject.questions.length) * 100);
    } else {
      onQuizComplete(score);
    }
  };

  //handler for submittin selected option
  const handleSubmitAnswer = () => {
    if (optionSelected !== null) {
      setIsAnswerSubmitted(true);

      const isCorrect = optionSelected === correctAnswerIndex;
      setScore(isCorrect ? score + 1 : score);
      setSelectedOptionStatus(isCorrect ? "correct" : "wrong");
      setInvalidSubmission(false);
    } else {
      setInvalidSubmission(true);
    }
  };

  // handler for otpion clicking
  const handleOptionClick = (option: string, index: number): void => {
    if (isAnswerSubmitted) return;
    setOptionSelected(index);
  };

  // submission without option seelection
  const invalidSubmissionHandler = () => {
    return (
      <InvalidSubmissionWrapper isVisible={invalidSubmission}>
        <InvalidSubmissionIcon
          src={error}
          alt="error-icon"
          width={size}
          height={size}
        />
        <div className="invalid-text">Please select an answer</div>
      </InvalidSubmissionWrapper>
    );
  };

  return (
    <QuizContentWrapper>
      <div className="text-box">
        <div className="lg-text-box">
          <p className="lg-1">
            Question {currentQuestion + 1} out of {subject.questions.length}
          </p>
          <p className="lg-2">{subject.questions[currentQuestion].question}</p>
        </div>

        <Progress width={progress} />
      </div>

      <div className="options-box">
        {subject.questions[currentQuestion].options.map(
          (options: string, index: number) => (
            <SelectedOptionsButton
              resultsStatus={selectedOptionStatus}
              selected={optionSelected === index}
              submitted={isAnswerSubmitted}
              onClick={() => handleOptionClick(options, index)}
              key={index}
            >
              <div className="option-letter">
                {String.fromCharCode(65 + index)}
              </div>
              <div className="option-value">{options}</div>
              <Icon
                src={
                  selectedOptionStatus === "correct"
                    ? correct
                    : selectedOptionStatus === "wrong" &&
                      index === correctAnswerIndex
                    ? correct
                    : error
                }
                width={size}
                height={size}
                hidden={
                  isAnswerSubmitted
                    ? selectedOptionStatus &&
                      (index === correctAnswerIndex || index === optionSelected)
                      ? false
                      : true
                    : true
                }
              />
            </SelectedOptionsButton>
          )
        )}

        {isAnswerSubmitted ? (
          <DefaultButton onClick={handleNextQuestion}>
            Next Question
          </DefaultButton>
        ) : (
          <DefaultButton onClick={handleSubmitAnswer}>
            Submit Answer
          </DefaultButton>
        )}

        {invalidSubmission && invalidSubmissionHandler()}
      </div>
    </QuizContentWrapper>
  );
}

export default Quiz;
