import React from 'react'
import './DoublePhoto.scss'

type Props = {}

const DoublePhoto = (props: Props) => {
    return (
        <div className="photo-component">
            <div className="bottom-left-photo"></div>
            <div className="bottom-right-photo"></div>
        </div>
    )
}

export default DoublePhoto
