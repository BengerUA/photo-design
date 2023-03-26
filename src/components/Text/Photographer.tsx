import React from 'react'
import { textArray } from '../../textArray'
import './Text.scss'

interface TextArray {
    id: number
    title: string
    subtitle: string
    text: string
}

const Photographer: React.FC = () => {
    const item = textArray.find((textArray: TextArray) => textArray.id === 1)
    return (
        <div className="text-component">
            <h3 className="title">{item?.title}</h3> <br />
            <h1 className="subtitle">{item?.subtitle}</h1> <br />
            <p className="subtitle-text">{item?.text}</p>
        </div>
    )
}

export default Photographer
