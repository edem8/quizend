import styled from "styled-components";
import { ProgressBarContainer } from "../../styledComponents/ProgressBarStyles";

export const QuizContentWrapper = styled.div`
  padding: 32px 24px 0px 24px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  row-gap: 38px;
  justify-self: center;

  @media (min-width: 376px) {
    row-gap: 64px;
    grid-template-rows: 242px 516px;
  }

  @media (min-width: 769px) {
    width: 1160px;
    height: 636px;
    grid-template-columns: 465px 564px;
    column-gap: 131px;
    row-gap: none;
    justify-content: center;
    padding: 0px 0px 0px 0px;
  }

  .text-box {
    display: grid;
    width: 327px;
    height: 169px;
    grid-template-rows: auto auto;
    row-gap: 24px;

    @media (min-width: 376px) {
      grid-template-rows: 186px 16px;
      row-gap: 40px;
      width: 640px;
      height: 242px;
    }

    @media (min-width: 769px) {
      width: 465px;
      height: 452px;
      grid-column: 1;
      grid-row: 1;
      row-gap: 240px;
    }

    .lg-text-box {
      grid-row: 1;
      display: grid;
      grid-template-rows: auto auto;
      row-gap: 12px;
      margin: 0;

      @media (min-width: 376px) {
        row-gap: 27px;
        grid-template-rows: 30px 129px;
      }

      @media (min-width: 769px) {
        height: 272px;
        width: 465px;
        grid-template-rows: 30px 215px;
      }

      .lg-1 {
        width: 100%;
        font-weight: 300;
        font-size: 14px;
        font-style: italic;
        line-height: 150%;
        color: ${(props) => props.theme.text.secondary};
        align-content: center;
        margin: 0;

        @media (min-width: 376px) {
          font-size: 20px;
        }
      }
      .lg-2 {
        grid-row: 2;
        width: 100%;
        height: 129px;
        font-weight: 550;
        font-size: 20px;
        line-height: 120%;
        margin: 0;
        color: ${(props) => props.theme.text.primary};
        row-gap: none;
        justify-content: center;
        padding: 0px 0px 0px 0px;

        @media (min-width: 376px) {
          font-size: 36px;
        }

        @media (min-width: 769px) {
          align-content: normal;
        }
      }
    }

    ${ProgressBarContainer} {
      grid-row: 2;
      align-content: center;
      margin: 0;
      max-width: 327px;
      background-color: ${(props) => props.theme.background.primary};

      @media (min-width: 376px) {
        max-width: 640px;
        padding: 4px 4px;
      }
    }
  }

  .options-box {
    grid-row: 2;
    display: grid;
    row-gap: 12px;
    grid-template-rows: 64px 64px 64px 64px 54px 32px;
    width: 327px;

    @media (min-width: 376px) {
      width: 640px;
      height: 588px;
      grid-template-rows: 80px 80px 80px 80px 92px 40px;
      row-gap: 24px;
    }

    @media (min-width: 769px) {
      height: 636px;
      width: 564px;
      grid-column: 2;
      grid-row: 1;
      grid-template-rows: 96px 96px 96px;
      row-gap: 24px;
      width: 100%;
    }
  }
`;
