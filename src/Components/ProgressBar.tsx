import React from "react";
import { ProgressBarContainer } from "../styledComponents/ProgressBarStyles";

type ProgressBarProp = {
  width: number;
};

function Progress({ width }: ProgressBarProp) {
  return (
    <>
      <ProgressBarContainer width={width}>
        <div className="progress-fill"> </div>
      </ProgressBarContainer>
    </>
  );
}

export default Progress;
