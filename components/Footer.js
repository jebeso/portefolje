import Link from 'next/link';
import { footerContainer, footerDescription, footerLinkDecoration, footerLinks, footerLeft, footerRight } from '../styles/Footer.module.scss'

const Footer = props =>
    <footer className={footerContainer}>
        <div className={footerLeft}>
            <p>myName</p>
        </div>

        <div className={footerRight}>
            <div className={footerDescription}>
                <p>{props.siteDescription}</p>
            </div>
        </div>
    </footer>

export default Footer;