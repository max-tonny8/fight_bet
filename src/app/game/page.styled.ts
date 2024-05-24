import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 100vh;

  @media (min-width: 1440px) {
    .container {
      width: 1440px;
      height: calc(100vh - 65px);
      display: flex;
      margin: auto;
      padding: 32px;
    }

    .share-text {
      font-size: 24px;
    }
  }

  @media (max-width: 1440px) {
    .container {
      width: 1280px;
      height: auto;
      display: flex;
      margin: auto;
      padding: 32px;
    }

    .share-text {
      font-size: 22px;
    }
  }

  @media (max-width: 1280px) {
    .container {
      width: 920px;
      display: flex;
      margin: auto;
      padding: 32px;
    }

    .game-member {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 920px) {
    .container {
      width: 768px;
      display: flex;
      margin: auto;
      padding: 32px;
    }

    .share-text {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    .container {
      width: 540px;
      display: flex;
      margin: auto;
      padding: 32px;
    }

    .setting div:first-child {
      width: 200px !important;
      font-size: 13px !important;
      text-align: center;
    }

    .main .game-condition h2 {
      font-size: 28px !important;
    }
  }

  @media (max-width: 540px) {
    .container {
      width: 375px;
      display: flex;
      margin: auto;
      padding: 32px;
    }

    .share-text {
      text-align: center;
    }

    .main {
      padding: 25px 15px !important;
    }
  }

  @media (max-width: 375px) {
    .container {
      width: 300px;
      display: flex;
      margin: auto;
      padding: 32px;
    }

    .game-condition .state .chain-part .desc {
      text-align: center;
    }
  }

  .main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 20px 20px lightblue;
    padding: 40px 110px;
    gap: 26px;
  }

  .main .game-condition {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    gap: 30px;
  }

  .main .game-condition h2 {
    font-size: 38px;
  }

  .main .game-condition .state-bold {
    font-weight: 700;
  }

  .game-condition .state {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .game-condition .state .chain-part {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .game-condition .state .chain-part .desc {
    font-size: 11px;
  }

  .game-condition .vs-amount {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  hr {
    width: 100%;
    border-color: #efeded4d;
  }

  .game-member {
    width: 85%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 40px;
  }

  .share-text {
    display: flex;
    justify-content: center;
    width: 80%;
    position: absolute;
    bottom: 20px;
    text-decoration: underline;
    align-items: center;
    font-weight: 600;
  }
`;
