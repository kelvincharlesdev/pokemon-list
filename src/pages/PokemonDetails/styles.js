import styled from "styled-components";


export const ContentPokemonDetails = styled.div`
    min-height: calc(100vh - 60px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

export const Main = styled.main`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px;

    @media (max-width: 1080px) {
        width: 100%;
        padding: 20px;

    }
`

