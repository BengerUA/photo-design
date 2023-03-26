import './Main.scss'
import Scelerisque from '../../components/Text/Scelerisque'
import Contact from '../../components/Text/Contact'
import Egestas from '../../components/Text/Egestas'
import Light from '../../components/Photo/Light/Light'
import ScrollToHeaderButton from '../../components/ScrollToTop/ScrollToTop'
import Dark from '../../components/Photo/Dark/Dark'
import Photographer from '../../components/Text/Photographer'

const Menu = () => {
    return (
        <>
            <Photographer />
            <Dark />
            <Scelerisque />
            <Light />
            <Egestas />
            <Contact />
            <ScrollToHeaderButton />
        </>
    )
}

export default Menu
