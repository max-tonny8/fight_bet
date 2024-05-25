import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 100vh;
  gap: 50px;

  h2 {
    text-align: center;
    font-size: 38px;
  }

  .container {
    background-color: #fff;
    border-radius: 16px;
    position: relative;
    height: auto;
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }

  .origin-bg {
    position: absolute;
    top: -5%;
    left: 50%;
    transform: translate(-50%, 0%);
    height: 780px;
    background: linear-gradient(
      90deg,
      #44ff9a -0.55%,
      #44b0ff 22.86%,
      #8b44ff 48.36%,
      #ff6644 73.33%,
      #ebff70 99.34%
    );
    border-radius: 20px;
    filter: blur(16px);
    z-index: -1;
  }

  @media (min-width: 1440px) {
    .container {
      width: 1370px;
    }

    .origin-bg {
      width: 1440px;
    }

    .share-text {
      font-size: 24px;
    }
  }

  @media (max-width: 1440px) {
    .container {
      width: 1210px;
    }

    .origin-bg {
      width: 1280px;
    }

    .share-text {
      font-size: 22px;
    }
  }

  @media (max-width: 1280px) {
    .container {
      width: 880px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .main {
      flex-direction: column;
      gap: 32px !important;
    }

    .game-condition {
      order: -1;
    }

    .origin-bg {
      width: 920px;
      top: -1.3%;
      height: 103%;
    }

    .game-member {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 920px) {
    .container {
      width: 738px;
    }

    .origin-bg {
      width: 768px;
    }

    .share-text {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    .main {
      padding: 50px 20px !important;
    }

    .container {
      width: 520px;
    }

    .origin-bg {
      width: 540px;
    }

    .setting div:first-child {
      width: 200px !important;
      font-size: 13px !important;
      text-align: center;
    }

    .main .game-condition h2 {
      font-size: 28px !important;
    }

    .share-text {
      text-align: center;
    }
  }

  @media (max-width: 540px) {
    .container {
      width: 355px;
    }

    .origin-bg {
      width: 375px;
    }

    .main {
      padding: 25px 15px !important;
    }

    .share-text {
      bottom: 5px !important;
    }
  }

  @media (max-width: 375px) {
    .container {
      width: 335px;
    }

    .origin-bg {
      width: 350px;
    }

    .game-condition .state .chain-part .desc {
      text-align: center;
    }
  }

  .main {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 50px 80px;
    gap: 8px;
    border-radius: 18px;
    background-color: #fff;
  }

  .main .game-condition {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .game-condition h2 {
    font-size: 64px;
    padding-top: 55px;
    padding-bottom: 40px;
  }

  .game-condition .account-state {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    gap: 30px;
  }

  .main .game-condition .state-bold {
    font-weight: 700;
  }

  .game-condition .state {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .game-condition .state p {
    text-align: center;
  }

  .game-condition .state p:first-child span:last-child {
    padding-left: 22px;
  }

  .main .game-condition .state .led {
    position: absolute;
    border-radius: 50%;
    top: 2px;
    width: 16px;
    height: 16px;
    background-color: green;
    margin-left: 3px;
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
