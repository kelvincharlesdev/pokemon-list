import styled from "styled-components"

export const Card = styled.div`
        background-color: ${({theme}) => theme.cardBackground} ;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
        border-radius: 10px;
        width: 150px;
        height: 200px;
`
export const CardId = styled.div`
        background-color: blue;
        display: flex;
        justify-content: end;
        width: 100%;
`
export const CardIamge = styled.div`
        max-width: 150px;   
        max-height: 150px;

        img {
                width: 100%;
                height: 100%;
        }
`

export const CardInfo = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        h2{
            color: ${({theme}) => theme.textPrimary};
            font: 18px;
        }
`