import { DefaultButton } from "../../Components/DefaultButton";
import ScoreCard from "../../Components/ScoreCard";
import { ScoreContentWrapper } from "./ScoreStyles";

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

type ScoreProps = {
  score: number;
  onPlayAgain: () => void;
  subject: Subject;
};

function Score({ score, onPlayAgain, subject }: ScoreProps) {
  return (
    <ScoreContentWrapper>
      <div className="text-box">
        <div className="lg-text-box">
          <p className="lg-1"> Quiz completed</p>
          <p className="lg-2">You scored...</p>
        </div>
      </div>

      <div className="score-box">
        <ScoreCard score={score} subject={subject} />
        <DefaultButton onClick={onPlayAgain}>Play Again</DefaultButton>
      </div>
    </ScoreContentWrapper>
  );
}

export default Score;
