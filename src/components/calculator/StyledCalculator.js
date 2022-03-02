import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 280px;
    padding: 8px;

    background-color: #485461;
    border-radius: 25px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
`

export const Screen = styled.div`
    max-width: 100%;
    max-height: 250px;
    padding-right: 25px;

    background-color: #4357692d;
    border-radius: 25px;

    display: flex;
    justify-content: end;
    align-items: flex-end;
`

export const Text = styled.span`
    max-width: 100%;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 50px;
    word-break: break-all;
`

export const Panel = styled.div`
    max-width: 100%;
    height: 361px;
    padding-top: 15px;

    border-radius: 0 0 25px 25px;
    border-top: 1px solid hsl(208deg 16% 56% / 18%);

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
`
