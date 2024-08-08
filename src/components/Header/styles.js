import styled from "styled-components";


export const HeaderWrapper = styled.header`
    background-color: ${({theme}) => theme.cardBackground   };
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
   
`
export const HeaderContainer = styled.header`
   
    width: 100%;
    max-width: 950px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 60px;
    
`

export const ContentLogo = styled.div`
    max-width: 100px;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
    }



`