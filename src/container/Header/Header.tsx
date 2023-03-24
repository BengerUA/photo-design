import React from 'react'
import './Header.scss'

type Props = {}

const Header = (props: Props) => {
    return (
        <div className="header">
            <h3 className="title">Amber Vi</h3> <br />
            <h1 className="subtitle">Photographer</h1> <br />
            <p className="subtitle-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                beatae at vitae illum qui non praesentium rem facere a
                explicabo?
            </p>
            <div className="hexagon">
                <div className="content">
                    <p>Ваш контент тут</p>
                </div>
            </div>
        </div>
    )
}

export default Header
