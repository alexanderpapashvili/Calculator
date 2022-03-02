import { MouseEvent } from 'react'

import * as Styled from './StyledButton'

interface btn {
    value: string
    class: string
    text: string
}

interface Props {
    btn: btn
    updateCalc: (e: MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<Props> = ({ btn, updateCalc }) => {
    return (
        <Styled.Btn key={btn.value} value={btn.value} className={btn.class} onClick={updateCalc}>
            {btn.text}
        </Styled.Btn>
    )
}

export default Button
