import { useEffect, useState } from 'react'

import * as Styled from './StyledCalculator'

import { btnValues, ops } from 'utils/data'

const Calculator: React.FC = () => {
    const [calc, setCalc] = useState<string>('')

    // there shouldnt be any
    const updateCalc = (e: any) => {
        const value = e.target.value
        if (ops.includes(value) && (calc === '' || ops.includes(calc.slice(-1)))) return null
        else if (value === 'AC') return setCalc('')
        else if (value === '=') return setCalc(eval(calc).toString())
        else if (value === '^2') {
        } else return setCalc(calc + e.target.value)
    }

    useEffect(() => {
        console.log('calc', calc)
    }, [calc])

    return (
        <Styled.Wrapper>
            <Styled.Screen>
                {/* <Styled.Result>({result ? result : '0'})</Styled.Result> */}
                <Styled.Text>{calc ? calc : '0'}</Styled.Text>
            </Styled.Screen>
            <Styled.Panel>
                {btnValues.flat().map((btn) => {
                    return (
                        <Styled.Button key={btn.value} value={btn.value} className={btn.class} onClick={updateCalc}>
                            {btn.text}
                        </Styled.Button>
                    )
                })}
            </Styled.Panel>
        </Styled.Wrapper>
    )
}

export default Calculator
