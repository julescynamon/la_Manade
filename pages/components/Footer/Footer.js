import React from 'react';
import Styles from './Footer.module.css';
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className={Styles.footer}>
            <div className={Styles.socials}>
                <h3>Suivez nous sur facebook</h3>
                <Link href="https://fr-fr.facebook.com/lesproduitsfermiersdujoncas/"><FaFacebookF /></Link>
            </div>
            <div className={Styles.line}></div>
            <div className={Styles.contact}>
                <h3><Link className={Styles.contactUs} href="/contact">Contactez nous</Link></h3>
                <p>123 rue de la paix Paris </p>
                <p>04.66.89.30.42 ou 06.76.59.76.88</p>
                <p><a href="mailto:manadedujoncas@gmail.com">manadedujoncas@gmail.com</a></p>
            </div>
            <div className={Styles.line}></div>
            <div className={Styles.copyright}>
                <p>© 2021 - Tous droits réservés</p>
                <p><Link href="/mentions-legales">Mentions Légales</Link></p>
            </div>
        </footer>
    )
}
