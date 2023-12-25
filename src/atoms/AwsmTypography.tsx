import styled from "styled-components";

export const AwsmHeading = styled.h1`
    color: ${({theme}) => theme.foreground.primary};
    font-size: 2.5rem;
`
export const AwsmText = styled.p<{size?: number, bold?: boolean}>`
    color: ${({theme}) => theme.foreground.primary};
    font-size: ${({size}) => size ? `${size}rem` : '1rem'};
    font-weight: ${({bold}) => bold ? 'bold' : 'normal'};
`

export const AwsmTinyText = styled.span`
    color: ${({theme}) => theme.foreground.secondary};
    font-size: 1rem;
`