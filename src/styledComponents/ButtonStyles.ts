import styled from "styled-components";

// Quiz submission buttons
export const DefaultButton = styled.button`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  padding: 12px 12px 12px 12px;
  border: 2px solid #a729f5;
  background-color: #a729f5;
  border-radius: 12px;
  width: 327px;
  height: 56px;
  cursor: pointer;

  &:hover {
    border: 2px solid #d394fa;
    background-color: #d394fa;
  }

  @media (min-width: 426px) {
    width: 640px;
    height: 92px;
    border-radius: 24px;
    padding: 32px 32px;
    font-size: 28px;
  }

  @media (min-width: 769px) {
    width: 564px;
    height: 92px;

    &:focus-visible {
      border: 2px solid #d394fa;
      background-color: #d394fa;
      outline: none;
      ${(props) =>
        props.theme
          ? `box-shadow: 4px 4px 4px 0px ${props.theme.background.tertiary}`
          : null};
    }
  }
`;

// Quiz topic selection buttons
export const SubjectButton = styled.button`
  background-color: ${(props) => props.theme.background.primary};
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.background.primary};
  border-radius: 12px;
  width: 327px;
  height: 64px;
  font-size: 18px;
  font-weight: 550;
  padding: 12px 12px 12px 12px;
  display: flex;
  gap: 16px;

  @media (min-width: 426px) {
    width: 640px;
    height: 80px;
    border-radius: 24px;
    row-gap: 32px;
    font-size: 28px;
  }

  @media (min-width: 769px) {
    grid-template-rows: 96px 96px 96px 96px;
    row-gap: 24px;
    width: 564px;
    height: 92px;

    &:focus-visible {
      outline: none;
      ${(props) =>
        props.theme
          ? `box-shadow: 4px 4px 4px 0px ${props.theme.background.tertiary}`
          : null};
    }
  }

  .topic-title {
    align-self: center;
    color: ${(props) => props.theme.text.primary};
  }
`;

// Quiz option buttons

export const OptionButton = styled.button`
  background-color: ${(props) => props.theme.background.primary};
  cursor: pointer;
  font-size: 15px;
  font-weight: 550;
  border-radius: 12px;
  border: 4px solid;
  width: auto;
  height: 64px;
  padding: 12px 12px 12px 12px;
  display: flex;
  gap: 16px;
  color: #626c7f;

  @media (min-width: 426px) {
    font-size: 28px;
    width: 640px;
    height: 80px;
  }

  @media (min-width: 769px) {
    width: 564px;
    height: 92px;
  }

  .option-letter {
    align-self: center;
    background-color: ${(props) => props.theme.background.tertiary};
    min-width: 40px;
    min-height: 40px;
    border-radius: 6px;
    text-align: center;
    align-content: center;

    @media (min-width: 426px) {
      min-width: 56px;
      min-height: 56px;
      border-radius: 12px;
    }
  }

  .option-value {
    color: ${(props) => props.theme.text.primary};
    align-self: center;
    margin-right: auto;
    text-align: left;
  }
`;

// Quiz option button extended
export const SelectedOptionsButton = styled(OptionButton)<{
  selected?: boolean;
  submitted?: boolean;
  resultsStatus?: "correct" | "wrong" | null;
}>`
  border: 4px solid;
  ${(props) =>
    props.selected
      ? props.resultsStatus === "correct"
        ? "border-color: #26d782"
        : props.resultsStatus === "wrong"
        ? "border-color: #ee5454"
        : "border-color: #a729f5"
      : `border-color: ${props.theme.background.primary}`};

  .option-letter {
    ${(props) =>
      props.selected
        ? props.resultsStatus === "correct"
          ? "background-color: #26d782"
          : props.resultsStatus === "wrong"
          ? "background-color: #ee5454"
          : "background-color: #a729f5"
        : "background-color: #F4F6FA"};

    &:hover {
      ${(props) => (!props.selected ? "background-color: #F6E7FF" : "none")}
    }
  }

  @media (min-width: 769px) {
    &:focus-visible {
      outline: none;
      ${(props) =>
        props.theme
          ? `box-shadow: 4px 4px 4px 0px ${props.theme.background.tertiary}`
          : null};
    }
  }
`;

// Quiz theme toggle button

export const TogglerButton = styled(DefaultButton)`
  border-radius: 990px;
  width: 34px;
  height: 22px;
  padding: 4px 4px 4px 4px;
  display: flex;
  align-items: center;
  margin: 0px;

  &:hover {
    border: 2px solid #a729f5;
    background-color: #a729f5;
  }
`;
