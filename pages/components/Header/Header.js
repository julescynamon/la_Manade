import { useState, useEffect } from 'react';
import Link from 'next/link';
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


    const [showNav, setShowNav] = useState(false);
    const [addClass, setAddClass] = useState(`${Styles.menu}`);

    const toggleNav = () => {
        setShowNav(!showNav);
        !showNav ? setAddClass(`${Styles.menu} ${Styles.show}`) : setAddClass(`${Styles.menu}`);
    }


    return (
        <header className={Styles.header}>
            <div className={Styles.headerTitle}>
            <Link href="/">
                <h1>La Manade du Joncas</h1>
            </Link>
        </div>
        <div className={Styles.headerNav}>
            <nav>
                <ul className={addClass}>
                    <li><Link href="/">Accueil</Link></li>
                    <li onMouseEnter={ toggleNavOver }><Link href="/" id="activities-link">Nos Activitées{ showNavOver ?  <BsChevronDown className={Styles.chevronDown} /> : <BsChevronUp className={Styles.chevronUp}/> }</Link></li>
                    
                    { showNavOver ? <NavOver /> : null }
                    <li><Link href="/actualities">Nos Actualitées</Link></li>
                    <li><Link href="/hebergements">Nos Hébergements</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
        <div className={Styles.burger} onClick={toggleNav}>
            { showNav ? <AiOutlineClose className={Styles.close}/>  : <GiHamburgerMenu className={Styles.icon} />}
        </div>
        </header>
    )
}