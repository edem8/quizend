import styled from "styled-components";

export const ScoreContentWrapper = styled.div`
  display: grid;
  padding: 32px 24px 0px 24px;
  grid-template-columns: 1fr;
  grid-template-rows: 88px 310px;
  row-gap: 40px;
  justify-self: center;

  @media (min-width: 426px) {
    row-gap: 64px;
    grid-template-rows: 136px 512px;
  }

  @media (min-width: 769px) {
    width: 1157px;
    height: 512px;
    grid-template-columns: 450px 564px;
    column-gap: 143px;
    row-gap: none;
    justify-content: center;
    padding: 0px 0px 0px 0px;
  }

  .text-box {
    grid-row: 1;
    color: ${(props) => props.theme.text.primary};
    display: grid;
    grid-template-rows: auto;

    @media (min-width: 426px) {
      width: 450px;
      height: 136px;
    }

    .lg-text-box {
      display: grid;
      grid-template-rows: auto auto;
      width: 281px;
      row-gap: 8px;
      font-size: 40px;
      line-height: 100%;
      row-gap: 16px;

      @media (min-width: 426px) {
        grid-template-rows: 64px 64px;
        font-size: 64px;
        width: 100%;
      }

      .lg-1 {
        width: 100%;
        font-weight: 300;
        align-self: center;
        margin: 0;
      }
      .lg-2 {
        grid-row: 2;
        width: 100%;
        font-weight: 600;
        margin: 0;
      }
    }
  }

  .score-box {
    grid-row: 2;
    display: grid;
    row-gap: 12px;
    grid-template-rows: 242px 56px;
    width: 327px;

    @media (min-width: 426px) {
      grid-template-rows: 388px 92px;
      row-gap: 32px;
      width: 640px;
    }

    @media (min-width: 769px) {
      height: 512px;
      width: 564px;
      grid-column: 2;
      grid-row: 1;
      grid-template-rows: 388px 92px;
      row-gap: 24px;
    }
  }
`;
