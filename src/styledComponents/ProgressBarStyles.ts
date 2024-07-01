import styled from "styled-components";

export const ProgressBarContainer = styled.div<{ width?: number }>`
  height: 16px;
  padding: 4px 4px 4px 4px;
  border-radius: 999px;
  background-color: red;

  .progress-fill {
    background-color: #a729f5;
    height: 8px;
    width: ${(props) => props.width}%;
    border-radius: 104px;
    transition: width 0.5s ease;
  }
`;
