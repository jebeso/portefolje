import Link from 'next/link';
import { footerContainer, footerDescription, footerLinkDecoration, footerLinks, footerLeft, footerRight } from '../styles/Footer.module.scss'

const Footer = props =>
    <>
        <footer className={footerContainer}>

            <div className={footerLeft}>
                <a href='mailto:jens@bechsor.no'>
                    <p>Jens Bech-Sørensen</p>
                </a>
            </div>

            <div className={footerRight}>
                <div className={footerDescription}>
                    <p>
                        <a href='https://www.linkedin.com/in/jensbs/'>{props.siteDescription}</a>
                    </p>
                </div>
            </div>
        </footer>

    </>

export default Footer;