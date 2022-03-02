import { Route, Routes } from 'react-router-dom'

import Calculator from 'components/calculator/Calculator'
import Layout from 'components/Layout'
import Quote from 'components/Quote'

const App: React.FC = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/Calculator/' element={<Calculator />} />
                <Route path='/Calculator/Quote' element={<Quote />} />
            </Routes>
        </Layout>
    )
}

export default App
