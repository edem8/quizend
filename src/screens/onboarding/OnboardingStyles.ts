import styled from "styled-components";

export const OnboardingContentWrapper = styled.div`
  padding: 32px 24px 0px 24px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 125px 292px;
  row-gap: 40px;
  justify-self: center;

  @media (min-width: 426px) {
    row-gap: 64px;
    grid-template-rows: 182px 392px;
  }

  @media (min-width: 769px) {
    width: 1160px;
    height: 456px;
    grid-template-columns: 465px 564px;

    column-gap: 131px;
    row-gap: none;
    justify-content: center;
    padding: 0px 0px 0px 0px;
  }

  .text-box {
    grid-row: 1;
    display: grid;
    grid-template-rows: auto auto;
    row-gap: 16px;

    @media (min-width: 426px) {
      grid-template-rows: 136px 30px;
    }

    @media (min-width: 769px) {
      height: 214px;
      grid-column: 1;
      grid-row: 1;
      row-gap: 48px;
    }

    .lg-text-box {
      display: grid;
      grid-template-rows: auto auto;
      row-gap: 8px;
      font-size: 40px;
      line-height: 100%;

      @media (min-width: 426px) {
        font-size: 64px;
        grid-template-rows: auto auto;
      }

      .lg-1 {
        width: 100%;
        font-weight: 300;
        align-self: center;
        color: ${(props) => props.theme.text.primary};
        margin: 0;
      }
      .lg-2 {
        grid-row: 2;
        width: 100%;
        font-weight: 600;
        margin: 0;
        color: ${(props) => props.theme.text.primary};
      }
    }

    .sm-text {
      grid-row: 2;
      font-style: italic;
      font-size: 14px;
      line-height: 150%;
      color: ${(props) => props.theme.text.secondary};
      margin: 0;

      @media (min-width: 426px) {
        font-size: 20px;
      }
    }
  }

  .topic-box {
    grid-row: 2;
    display: grid;
    row-gap: 12px;
    grid-template-rows: 64px 64px 64px 64px;
    width: 327px;

    @media (min-width: 426px) {
      grid-template-rows: 80px 80px 80px 80px;
      row-gap: 24px;
      width: 640px;
    }

     @media (min-width: 769px) {
      height: 456px;
      grid-column: 2;
      grid-row: 1;
      grid-template-rows: 96px 96px 96px;
      row-gap: 24px;
      width: 100%;
    }
  }
`;
