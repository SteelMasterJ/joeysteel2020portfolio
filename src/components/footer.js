import React from 'react'
import './footer.module.scss'
import footerStyles from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <small className={footerStyles.small}>joeysteel.com ©2020</small>
        </footer>
    )
}

export default Footer