import data from "../../data/data.json";
import { OnboardingContentWrapper } from "./OnboardingStyles";
import { SubjectButton } from "../../Components/SubjectButton";
import { SubjectIcon } from "../../styledComponents/IconStyles";

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

type OnboardingProps = {
  onStartQuiz: (subject: Subject) => void;
};

function Onboarding({ onStartQuiz }: OnboardingProps) {
  const size = 28.57;

  const handleSubjectClick = (subject: Subject) => {
    onStartQuiz(subject);
    console.log(subject);
  };

  return (
    <OnboardingContentWrapper>
      <div className="text-box">
        <div className="lg-text-box">
          <p className="lg-1"> Welcome to the</p>
          <p className="lg-2">Frontend Quiz!</p>
        </div>
        <p className="sm-text">Pick a subject to get started</p>
      </div>

      <div className="topic-box">
        {data.quizzes.map((subject, index) => (
          <SubjectButton
            onClick={() => handleSubjectClick(subject)}
            key={index}
          >
            <SubjectIcon
              src={subject.icon}
              alt="html-icon"
              width={size}
              height={size}
              bgColor={subject.bgColor}
            />
            <div className="topic-title">{subject.title}</div>
          </SubjectButton>
        ))}
      </div>
    </OnboardingContentWrapper>
  );
}

export default Onboarding;
