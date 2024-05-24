import styled from "styled-components";

export const Wrapper = styled.div`
  & {
    position: absolute;
    top: 0;
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    padding: 40px 70px;
    border-radius: 4px;
    background-color: #fff;
    color: #000;
    box-shadow: 2px 2px 2px 2px grey;
    gap: 35px;
    z-index: 100;
  }

  @media (min-width: 920px) {
    & {
      display: none;
    }
  }

  h1 {
    font-size: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .close-icon {
    position: absolute;
    align-items: center;
    right: 10%;
    cursor: pointer;
  }

  .link-quest {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }

  .link-quest a {
    font-size: 18px;
  }

  .btn-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
`;
