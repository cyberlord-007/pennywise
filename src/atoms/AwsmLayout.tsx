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

export const AwsmFlexCol = styled.div<{height?: number}>`
    width: 100%;
    height: ${({height}) => height ? `${height}%`: '100%'};
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`

export const AwsmFlexRow = styled.div<{width?: number, ai?: string, jc?: string, gap?: number, wrap?: boolean}>`
    width: ${({width}) => width ? `${width}%`: '100%'};
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: ${({jc}) => jc ? jc: 'center'};
    align-items: ${({ai}) => ai ? ai: 'center'};
    gap: ${({gap}) => gap ? `${gap}rem`: '1.5rem'};
    flex-wrap: ${({wrap}) => wrap ? 'wrap': 'no-wrap'}
`