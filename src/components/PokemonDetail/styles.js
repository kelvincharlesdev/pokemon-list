import styled from "styled-components"

export const NameId = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 0 20px;
    background-color:  ${({theme}) => theme.cardBackground};
    color: ${({theme}) => theme.textPrimary};
    border-radius: 10px;
`

export const ContainerPokemonDetails = styled.div`
    display: flex;
    margin-top: 30px;
    border-radius: 20px;
    box-shadow: 2px 3px 13px -5px ${({theme}) => theme.cardBackground};
    padding: 30px;
    gap: 30px;
    flex-direction: column;
    color: ${({theme}) => theme.textSecondary};

    @media (max-width: 1080px) {
       padding: 0 15px;
        
    }


    dl {
        display: flex;
        flex-direction: column;
    }

    h3 {
        font-size: 24px;
    }
    h4 {
        font-size: 18px;
        margin-bottom: 10px;
        color: ${({theme}) => theme.textSecondary} ;

   
    }

`

export const InfoWrapper = styled.div`
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
    }
   
`

export const ContentImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    position: relative;
    width: 40%;

    @media (max-width: 1080px) {
        width: 100%;
        height: 400px;
    }

    span {
        position: absolute;
        width: 260px;
        height: 260px;
        border-radius: 50%;
        box-shadow: 2px 3px 13px -5px ${({theme}) => theme.cardBackground};
        z-index: -1;
    }

    img {
        width: 70%;
        height: 70%;
      
    }

`
export const ContentInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 60%;
  

    @media (max-width: 1080px) {
        width: 100%;
    }

`

export const ListItems = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 6px; 
    margin-top: 10px;
    box-shadow: 2px 3px 13px -5px ${({theme}) => theme.cardBackground};
    padding: 20px;
    border-radius: 10px;
 
`
export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 15px 0;
    box-shadow: 2px 3px 13px -5px ${({theme}) => theme.cardBackground};
    padding: 20px;
    border-radius: 10px;
 
`
