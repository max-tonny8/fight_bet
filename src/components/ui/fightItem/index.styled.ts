import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  font-size: 14px;
  gap: 60px;

  .game-control {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .fighter-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .fighter-info .fighter-name {
    font-size: 24px;
    font-weight: 500;
  }

  .game-control .setting {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .bonus {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }

  @media (max-width: 768px) {
    & {
      padding: 20px !important;
    }

    .bonus p {
      text-align: center;
    }

    .fighter-info .fighter-name {
      font-size: 18px;
    }
  }

  @media (max-width: 1280px) {
    & {
      padding: 40px;
    }
  }

  .bonus span {
    font-weight: 700;
  }
  .bonus p {
    text-align: center;
  }
`;
