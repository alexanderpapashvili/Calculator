import styled from 'styled-components'

export const Header = styled.div`
    width: 100%;
    margin-bottom: 100px;

    display: flex;
    justify-content: center;

    @media (max-width: 900px) {
        margin-bottom: 50px;
    }
`

export const HeaderWrapper = styled.div`
    max-width: 1350px;
    width: 100%;
    margin: 0 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 900px) {
        justify-content: center;
    }
`

export const H1 = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 50px;
    color: #503cd1;

    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }

    @media (max-width: 900px) {
        font-size: 30px;
    }
`

export const Nav = styled.ul`
    list-style-type: none;
    padding: 0;

    display: flex;
    gap: 30px;

    @media (max-width: 900px) {
        gap: 20px;
    }
`

export const NavItem = styled.li`
    font-family: 'Montserrat', sans-serif;
    font-size: 25px;
    color: #503cd1;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }

    @media (max-width: 900px) {
        font-size: 18px;
    }
`

export const A = styled.a`
    text-decoration: none;
    color: #171515;
`
