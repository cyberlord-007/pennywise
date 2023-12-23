import styled from "styled-components";

export const AwsmHeading = styled.h1`
    color: ${({theme}) => theme.foreground.primary};
    font-size: 2.5rem;
`
export const AwsmText = styled.p`
    color: ${({theme}) => theme.foreground.primary};
    font-size: 1rem;
`

export const AwsmTinyText = styled.p`
    color: ${({theme}) => theme.foreground.secondary};
    font-size: 1rem;
`