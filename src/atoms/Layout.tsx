import styled from "styled-components";

export const AwsmLayout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    background: ${({theme}) => theme.background.primary};
    padding: 0.5rem;
`

export const AwsmRouteElement = styled.div`
    width: 80%;
    height: 100%;
    padding: 1.5rem 2rem;
    color: ${({theme}) => theme.foreground.primary};
`

export const AwsmFlexCol = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const AwsmFlexRow = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`