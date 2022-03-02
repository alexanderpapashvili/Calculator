import styled from 'styled-components'

import Header from 'components/header/Header'

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const Main = styled.main`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
    return (
        <Container>
            <Header />
            <Main>{children}</Main>
        </Container>
    )
}

export default Layout
