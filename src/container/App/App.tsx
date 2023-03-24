import React from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import { CssBaseline } from '@mui/material'
import './App.scss'
type Props = {}

const App = (props: Props) => {
    return (
        <CssBaseline>
            <Header />
            <Main />
            <Footer />
        </CssBaseline>
    )
}

export default App
