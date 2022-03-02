import { useNavigate } from 'react-router-dom'
import * as Styled from './StyledHeader'

const Header: React.FC = () => {
    const navigate = useNavigate()

    return (
        <Styled.Header>
            <Styled.HeaderWrapper>
                <Styled.H1 onClick={() => navigate('/')}>Math Magicians</Styled.H1>

                <Styled.Nav>
                    <Styled.NavItem onClick={() => navigate('/')}>Calculator</Styled.NavItem>
                    <Styled.NavItem onClick={() => navigate('/Quote')}>Quote</Styled.NavItem>
                    <Styled.NavItem>
                        <Styled.A
                            href='https://github.com/alexanderpapashvili/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            GitHub
                        </Styled.A>
                    </Styled.NavItem>
                </Styled.Nav>
            </Styled.HeaderWrapper>
        </Styled.Header>
    )
}

export default Header
