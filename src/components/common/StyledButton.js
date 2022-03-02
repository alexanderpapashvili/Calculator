import styled from 'styled-components'

export const Btn = styled.button`
    width: 55px;
    height: 55px;

    border-radius: 50%;
    border: none;

    font-family: 'Montserrat', sans-serif;
    font-size: 25px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    transition: 0.4s;

    &.top {
        font-size: 23px;
    }

    &.right {
        color: white;
        background-color: hsl(37deg 96% 59%);
    }

    &.number {
        color: white;
        background-color: #503cd1;
        font-weight: bold;
    }

    &.zero {
        width: 120px;
        border-radius: 100px;
    }

    &.bigBtn {
        width: 185px;
        border-radius: 100px;
    }

    &.equal {
        color: white;
        background-color: #f33d1d;
    }

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        opacity: 0.8;
    }
`
