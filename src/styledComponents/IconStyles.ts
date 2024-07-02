import styled from "styled-components";

// Default icon
export const Icon = styled.img<{
  src?: string;
  alt?: string;
  width: number;
  height: number;
  hidden?: boolean;
  bgColor?: string;
}>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
  display: ${(props) => (props.hidden ? "none" : "inline")};
  background-color: ${(props) => (props.bgColor ? props.bgColor : "none")};
  padding-bottom: 0px;
  align-self: center;
  justify-self: center;

  @media (min-width: 426px) {
    width: 30px;
    height: 30px;
  }
`;

// Toogle sun icon
export const SunIcon = styled(Icon)`
  color: ${(props) => props.theme.background.primary}; //
  grid-column: 1;
  display: inline;
  align-self: center;

  @media (min-width: 426px) {
    width: 24px;
    height: 24px;
  }
`;

// Toggle Moon icon
export const MoonIcon = styled(SunIcon)`
  align-self: center;
  grid-column: 3;

  @media (min-width: 426px) {
    width: 24px;
    height: 24px;
  }
`;

// Toggler icon
export const TogglerIcon = styled(Icon)`
  grid-column: 2;
  cursor: pointer;

  @media (min-width: 426px) {
    width: 48px;
    height: 28px;
  }

  @media (min-width: 769px) {
    &:focus-visible {
      outline: none;
      width: 64px;
      height: 42px;
    }
  }
`;

// Subject icon
export const SubjectIcon = styled(Icon)`
  align-self: center;
  display: inline;
  border-radius: 4px;
  padding: 4px 4px;

  @media (min-width: 426px) {
    width: 40px;
    height: 40px;
  }
`;

// Invalid submission Icon
export const InvalidSubmissionIcon = styled(Icon)`
  grid-column: 1;
  justify-self: flex-end;

  @media (min-width: 426px) {
    width: 30px;
    height: 30px;
  }
`;
