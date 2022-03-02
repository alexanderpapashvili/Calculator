import styled from 'styled-components'

export const Content = styled.span`
    max-width: 1200px;
    padding: 0 20px;
    font-family: 'Montserrat', sans-serif;
    font-size: 35px;
    color: white;
    line-height: 45px;
    letter-spacing: 2px;
    font-weight: bold;
    text-align: center;

    @media (max-width: 900px) {
        font-size: 20px;
        line-height: 30px;
    }
`

const Quote: React.FC = () => {
    return (
        <Content>
            "Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding."-
            William Paul Thurston
        </Content>
    )
}

export default Quote
