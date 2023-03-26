import React from 'react'
import './Light.scss'

type Props = {}

const Light = (props: Props) => {
    return (
        <div className="light-component">
            <div className="light-left"></div>
            <div className="light-right"></div>
        </div>
    )
}

export default Light
