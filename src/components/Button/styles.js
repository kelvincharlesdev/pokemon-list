import styled from "styled-components";


export const ButtonContent = styled.button`
    color: ${({theme}) => theme.textSecondary};
    box-shadow: 2px 3px 13px -5px ${({theme}) => theme.cardBackground};
    padding: 20px 100px;
    margin-top: 20px;
`