import React from 'react'
import './footer.module.scss'
import footerStyles from './footer.module.scss'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <small className={footerStyles.small}>
                joeysteel.com ©2021
                <SocialIcon url="https://www.linkedin.com/in/joseph-steel-6271a955/" className="social-icon" style={{ height: 30, width: 30, marginLeft: ".6rem"}}/>
                <SocialIcon url="https://github.com/SteelMasterJ" className="social-icon" style={{ height: 30, width: 30, marginLeft: ".6rem"}}/>
                <SocialIcon url="mailto:joseph.steel.iv@gmail.com" className="social-icon" style={{ height: 30, width: 30, marginLeft: ".6rem"}}/>
            </small>
        </footer>
    )
}

export default Footer