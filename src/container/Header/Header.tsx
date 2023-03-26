import React from 'react'
import { textArray } from '../../textArray'
import Photographer from '../../components/Text/Photographer'

interface TextArray {
    id: number
    title: string
    subtitle: string
    text: string
}

const Header: React.FC = () => {
    return <Photographer />
}

export default Header
