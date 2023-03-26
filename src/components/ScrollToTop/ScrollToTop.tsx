import React, { useState } from 'react'
import './ScrollToTop.scss'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'

const ScrollToHeaderButton: React.FC = () => {
    const [showButton, setShowButton] = useState(false)

    const handleScroll = () => {
        if (window.pageYOffset > 100) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('scroll', handleScroll)

    return (
        <>
            {showButton && (
                <button onClick={scrollToTop} className="to-top-btn">
                    <KeyboardDoubleArrowUpIcon />
                </button>
            )}
        </>
    )
}

export default ScrollToHeaderButton
