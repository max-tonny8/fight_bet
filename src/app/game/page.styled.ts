import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;

  .container {
    width: 1440px;
    display: flex;
    margin: auto;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .share-text {
    position: absolute;
    bottom: 60px;
    text-decoration: underline;
    font-size: 32px;
    font-weight: 600;
  }
`;
