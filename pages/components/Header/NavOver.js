import Link from 'next/link';
import Styles from './NavOver.module.css';


export default function NavOver(props) {

    return (
        <>
            <ul className={Styles.sub}>
                <li><Link href="/activities/soirée-camarguaise">Soirée Camarguaise</Link></li>
                <li><Link href="/activities/courses-camarguaise">La Course Camarguaise</Link></li>
                <li><Link href="/activities/animations">Les animations Taurine</Link></li>
                <li><Link href="/activities/réception">La salle de réception</Link></li>
                <li><Link href="/activities/produits-fermiers">Les produits fermiers</Link></li>
            </ul>
        </>
    )
}
