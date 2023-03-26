import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import EmailIcon from '@mui/icons-material/Email'
import './Social.scss'

type Props = {}

const Social = (props: Props) => {
    return (
        <ul className="social">
            <li>
                <InstagramIcon />
            </li>
            <li>
                <FacebookIcon />
            </li>
            <li>
                <TwitterIcon />
            </li>
            <li>
                <EmailIcon />
            </li>
        </ul>
    )
}

export default Social
