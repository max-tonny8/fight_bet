import styled from "styled-components";

export const Wrapper = styled.div<{$width: string}>`
    width: ${({$width}) => $width};
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    padding: 8px 24px;
    border-radius: 22px;
    background-color: #000;
    color: #fff;
`;