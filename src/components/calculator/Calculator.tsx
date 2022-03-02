import { useState, MouseEvent } from 'react'

import * as Styled from './StyledCalculator'
import Button from 'components/common/button/Button'

import { btnValues, ops } from 'utils/data'

const Calculator: React.FC = () => {
    const [calc, setCalc] = useState<string>('')
    const [display, setDisplay] = useState<string>('')

    const updateCalc = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const target = e.target as HTMLTextAreaElement
        if (ops.includes(target.value) && (calc === '' || ops.includes(calc.slice(-1)))) return null
        else if (target.value === 'AC') {
            setCalc('')
            setDisplay('')
        } else if (target.value === '=') {
            setCalc(eval(calc).toString())
            setDisplay(eval(calc).toString())
        } else {
            setCalc(calc + target.value)
            setDisplay(display + target.innerText)
        }
    }

    return (
        <Styled.Wrapper>
            <Styled.Screen>
                <Styled.Text>{display ? display : '0'}</Styled.Text>
            </Styled.Screen>
            <Styled.Panel>
                {btnValues.flat().map((btn) => {
                    return <Button key={btn.value} btn={btn} updateCalc={updateCalc} />
                })}
            </Styled.Panel>
        </Styled.Wrapper>
    )
}

export default Calculator
