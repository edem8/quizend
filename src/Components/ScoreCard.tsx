import React from "react";
import {
  ScoreCardWrapper,
  TopicWrapper,
} from "../styledComponents/AppWrapperStyles";
import { SubjectIcon } from "../styledComponents/IconStyles";

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
  subject: Subject;
};

function ScoreCard({ score, subject }: ScoreProps) {
  return (
    <ScoreCardWrapper>
      <TopicWrapper isVisible={true}>
        <SubjectIcon
          src={subject.icon}
          alt="icon"
          width={28.57}
          height={28.57}
          bgColor={subject.bgColor}
        />
        <div className="topic-title">{subject.title}</div>
      </TopicWrapper>

      <div className="score">
        {score}
        <div className="out-of">out of {subject.questions.length}</div>
      </div>
    </ScoreCardWrapper>
  );
}

export default ScoreCard;
