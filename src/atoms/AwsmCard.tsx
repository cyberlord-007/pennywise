import styled from "styled-components";

type dimension = {
    w: number,
    h: number
}

export const AwsmCard = styled.div<{dimensions: dimension}>`
    height: ${({dimensions}) => dimensions.h ? `${dimensions.h}rem` : '10rem'};
    width: ${({dimensions}) => dimensions.w ? `${dimensions.w}rem` : '10rem'};
    border: 1px solid ${({theme}) => theme.background.secondary};
    border-radius: 1.5rem;
    box-shadow: 0 0 10px ${({theme}) => theme.background.secondary};
    padding: 1rem;
    display: flex;
    flex-direction: column;
`

export const AwsmCardTop = styled.div<{maxH: number}>`
`

