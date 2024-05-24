import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  gap: 60px;

  .game-control {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .game-control .setting {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .bonus {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }

  @media (max-width: 768px) {
    .bonus p {
      text-align: center;
    }
  }

  .bonus span {
    font-weight: 700;
  }
`;
