import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
    gap: 70px;

    .game-control {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }

    .game-setting {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .bonus {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }

    .bonus span {
        font-weight: 700;
    }
`;