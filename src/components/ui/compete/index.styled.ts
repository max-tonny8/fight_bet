import styled from "styled-components";

export const Wrapper = styled.div`
  &.fighter-part {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .game-condition {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .game-condition h2 {
    font-size: 64px;
    padding-top: 30px;
    padding-bottom: 80px;
  }

  .game-condition .account-state {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    gap: 30px;
  }

  .state-bold {
    font-weight: 700;
  }

  .game-condition .state {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .game-condition .vs-amount {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .game-condition .vs-amount p {
    text-align: center;
  }

  .game-member {
    width: 85%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 40px;
  }
`;
