import React, { useRef } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import './Main.scss'
import Scelerisque from '../../components/Text/Scelerisque'
import Contact from '../../components/Text/Contact'
import Egestas from '../../components/Text/Egestas'
import DoublePhoto from '../../components/Photo/DoublePhoto'
import ScrollToHeaderButton from '../../components/ScrollToTop/ScrollToTop'

const Menu = () => {
    const componentRef = useRef<HTMLDivElement>(null)
    const handleButtonClick = () => {
        if (componentRef.current) {
            window.scrollTo({
                top: componentRef.current.offsetTop,
                behavior: 'smooth',
            })
        }
    }

    return (
        <>
            <button className="header-btn" onClick={handleButtonClick}>
                <KeyboardArrowDownIcon />
            </button>
            <div className="target-component" ref={componentRef}>
                <div className="left-photo"></div>
                <div className="right-photo"></div>
            </div>
            <Scelerisque />
            <DoublePhoto />
            <Egestas />
            <Contact />
            <ScrollToHeaderButton />
        </>
    )
}

export default Menu
