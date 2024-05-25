import styled from "styled-components";

export const Wrapper = styled.div<{ $width: string }>`
  & {
    width: ${({ $width }) => $width};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    padding: 8px 24px;
    border-radius: 22px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    & {
      width: 200px !important;
      font-size: 13px !important;
      text-align: center;
    }
  }

  @media (max-width: 375px) {
    & {
      width: 150px !important;
      font-size: 12px !important;
      text-align: center;
    }
  }
`;
