import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

import Link from 'next/link';
import Image from 'next/image';
import Styles from './Header.module.css';

import { BsChevronUp, BsChevronDown  } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

import NavOver from './components/NavOver';

export default function Header() {

    const [showNavOver, setShowNavOver] = useState(false);


    const toggleNavOver = () => {
        setShowNavOver(!showNavOver);
        addEventListener('click', () => {
            setShowNavOver(false);
        });
    }


    const [active , setActive] = useState(false);

    return (
        <header className={Styles.header}>
            <div className={Styles.headerTitle}>
            <Link href="/">
                <Image src="/images/icone.png" width="65" height="65" alt="logo" />
                <h1>La Manade du Joncas</h1>
            </Link>
        </div>
        <div className={Styles.burger} onClick={() => setActive(!active)}>
            { active ? <AiOutlineClose className={Styles.close}/>  : <GiHamburgerMenu className={Styles.icon} />}
        </div>
        <div className={Styles.headerNav}>
            <nav>
                <ul className={active ? Styles.show : Styles.menu}>
                    <li><Link href="/">Accueil</Link></li>
                    <li onMouseEnter={ toggleNavOver }><Link href="#" id="activities-link">Nos Activitées{ showNavOver ?  <BsChevronDown className={Styles.chevronDown} /> : <BsChevronUp className={Styles.chevronUp}/> }</Link></li>
                    { showNavOver ? <NavOver /> : null }
                    <li><Link href="/actuality">Nos Actualitées</Link></li>
                    <li><Link href="/hebergements">Nos Hébergements</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
        </header>
    )
}