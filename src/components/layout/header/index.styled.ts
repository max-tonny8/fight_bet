import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 12px 32px;
  background-color: #fff;
  gap: 12px;

  .connect-btn {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .hamburger {
    display: none;
    cursor: pointer;
  }

  @media (max-width: 920px) {
    a,
    .connect-btn {
      display: none;
    }

    .hamburger {
      display: block !important;
      cursor: pointer;
    }
  }
`;
