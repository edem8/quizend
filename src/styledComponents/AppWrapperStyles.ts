import styled from "styled-components";

//Entire app wrapper
export const AppWrapper = styled.div`
  width: 375px;
  height: auto;
  display: grid;
  grid-template-rows: 72px 740px;
  overflow: hidden;
  background-color: ${(props) => props.theme.background.secondary};
  background-image: ${(props) =>
    props.theme.src.bgPattern ? `url(${props.theme.src.bgPattern})` : "none"};
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media (min-width: 376px) {
    width: 425px;
  }

  @media (min-width: 426px) {
    width: 768px;
    height: 1024px;
    background-repeat: no-repeat;
    background-image: ${(props) =>
      props.theme.src.bgPatternTablet
        ? `url(${props.theme.src.bgPatternTablet}) `
        : "none"};
    background-size: 56% 48%;
  }

  @media (min-width: 769px) {
    width: 1440px;
    height: 960px;
    grid-template-rows: 72px auto;
    background-repeat: no-repeat;
    row-gap: 80px;
    background-image: ${(props) =>
      props.theme.src.bgPatternDesktop
        ? `url(${props.theme.src.bgPatternDesktop}) `
        : "none"};
    background-size: cover;
  }

  @media (min-width: 1441px) {
    width: 100%;
  }
`;

// App header wrapper
export const HeaderWrapper = styled.div`
  grid-row: 1;
  padding: 16px 24px;
  display: grid;
  align-content: center;
  grid-template-columns: auto 1fr auto;
  gap: auto;

  @media (min-width: 376px) {
    padding: 22px 50px;
  }

  @media (min-width: 426px) {
    padding: 32px 60px;
  }

  @media (min-width: 769px) {
    padding: 64px 140px;
  }
`;

// Toggle button and icon wrapper
export const ToggleWrapper = styled.div`
  grid-column: 3;
  display: grid;
  grid-template-columns: 16px 32px 16px;
  gap: 8px;
  align-self: center;
  justify-self: center;

  @media (min-width: 426px) {
    gap: 16px;
    grid-template-columns: 24px 48px 24px;
  }
`;

// Topic Heading Wrapper
export const TopicWrapper = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  grid-column: 1;
  gap: 16px;
  align-items: center;
  align-self: center;
  justify-self: center;

  .topic-title {
    grid-column: 2;
    font-weight: 550;
    font-size: 18px;
    line-height: 100%;
    color: ${(props) => props.theme.text.primary};

    @media (min-width: 426px) {
      font-size: 28px;
    }
  }

  @media (min-width: 426px) {
    gap: 24px;
  }
`;

// Submission Error wrapper
export const InvalidSubmissionWrapper = styled(TopicWrapper)`
  width: 241px;
  height: 32px;
  align-content: center;
  display: grid;
  grid-template-columns: 32px 201px;
  column-gap: 8px;

  @media (min-width: 426px) {
    height: 40px;
    width: 316px;
  }

  .invalid-text {
    width: 204px;
    grid-column: 2;
    font-weight: 300;
    font-size: 18px;
    line-height: 100%;
    color: ${(props) => props.theme.text.tertiary};

    @media (min-width: 426px) {
      width: 268px;
      font-size: 24px;
      line-height: 150%;
    }
  }
`;

// Score card Wrapper
export const ScoreCardWrapper = styled.div`
  background-color: ${(props) => props.theme.background.primary};
  align-content: center;
  padding: 32px 32px;
  display: grid;
  grid-template-rows: 40px 122px;
  row-gap: 16px;
  border-radius: 12px;

  @media (min-width: 426px) {
    padding: 48px 48px;
    grid-template-rows: 56px 196px;
    row-gap: 40px;
  }

  .score {
    align-self: center;
    justify-self: center;
    display: grid;
    grid-template-rows: 88px 18px;
    row-gap: 16px;
    line-height: 100%;
    font-size: 88px;
    font-weight: 550;
    color: ${(props) => props.theme.text.primary};

    @media (min-width: 426px) {
      grid-template-rows: 144px 36px;
      font-size: 144px;
    }

    .out-of {
      font-size: 18px;
      color: ${(props) => props.theme.text.secondary};
      font-weight: 500;
      align-self: center;
      justify-self: center;

      @media (min-width: 426px) {
        font-size: 24px;
      }
    }
  }
`;
