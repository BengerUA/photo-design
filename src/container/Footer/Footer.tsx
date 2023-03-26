import React from 'react'
import Social from '../../components/Social/Social'
import './Footer.scss'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className="footer">
            <h3>
                My <a href="/">Instagram</a>, <a href="/">Unsplash</a>, &
                <a href="/">Twitter</a>{' '}
            </h3>
            <p>
                Tempus egestas sed sed risus pretium. Tincidunt arcu non sodales
                neque sodales ut etiam sit amet. Faucibus purus in massa tempor
                nec feugiat nisl pretium.
            </p>
            <h1>Thank you!</h1>
            <Social />
        </div>
    )
}

export default Footer
