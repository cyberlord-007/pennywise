import styled from "styled-components";

export const AwsmInputWrap = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AwsmInputBox = styled.input`
    width: calc(1/4 * 100vw);
    height: 50px;
    border-radius: 1rem;
    padding: 0.5rem;
    border: 1px solid ${({theme}) => theme.background.secondary};
    box-shadow: 0 0 10px ${({theme}) => theme.background.secondary};
    background-color: ${({theme}) => theme.background.secondary};
    font-size: 1rem;
    text-align: center;
    color: ${({theme}) => theme.foreground.primary};
    outline: none;
    caret-color: #06f160;
    &::placeholder {
        color: ${({theme}) => theme.foreground.secondary};
    }
`