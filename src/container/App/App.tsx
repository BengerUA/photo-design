import React from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import { CssBaseline } from '@mui/material'
import './App.scss'
import Container from '@mui/material/Container'

type Props = {}

const App = (props: Props) => {
    return (
        <CssBaseline>
            <Container maxWidth="xl">
                <Header />
                <Main />
                <Footer />
            </Container>
        </CssBaseline>
    )
}

export default App
