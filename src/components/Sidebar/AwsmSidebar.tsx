import { Link } from "react-router-dom";
import styled from "styled-components";

export const AwsmSidebarWrap = styled.div`
    width: 20%;
    height: calc(100vh - 1rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 2rem;
    background: ${({theme}) => theme.background.primary};
    margin: 0;
    border: 1px solid ${({theme}) => theme.background.secondary};
    border-radius: 1.5rem;
    box-shadow: 0 0 10px ${({theme}) => theme.background.secondary};
`

export const AwsmSidebarTop = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AwsmSidebarContent = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
`
export const AwsmSidebarItem = styled(Link)<{active: boolean}>`
    width: 100%;
    padding: 0.8rem;
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    color: ${({theme}) => theme.foreground.primary};
    border-radius: 10px;
    background: ${({active, theme}) => active ? theme.background.secondary : 'none'};

    &:hover {
        background: ${({theme}) => theme.background.secondary};
    }
`

export const AwsmNavText = styled.p`
    margin: 0;
    padding: 0;
`

export const AwsmSidebarBottom = styled.div`
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`