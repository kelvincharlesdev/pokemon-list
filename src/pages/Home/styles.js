import styled from "styled-components";


export const WrapperHome = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
        
`

export const Main = styled.main`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;
        max-width: 950px;
        height: 100%;
        padding: 50px;
`

export const ContentInput = styled.div`
       
        height: 30px;
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
        padding: 0 10px ;
        box-shadow: 2px 3px 13px -5px ${({theme}) => theme.cardBackground};
        max-width: 400px;

        input { 
                border: none;
                width: 100%;
                height: 100%;
                color: ${({theme}) => theme.textSecondary};
        }
        
        input::placeholder { 
                color: ${({theme}) => theme.textSecondary};
        }

`


export const CardList = styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        align-items: center;
        justify-content: center;

`
