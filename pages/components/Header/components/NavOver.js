import Link from 'next/link';
import Styles from './NavOver.module.css';

export default function NavOver() {
    return (
        <div>
            <ul className={Styles.sub}>
                <li><Link href="/soiree-camarguaise">Soirée Camarguaise</Link></li>
                <li><Link href="/course-camarguaise">La Course Camarguaise</Link></li>
                <li><Link href="/animations-taurine">Les animations Taurine</Link></li>
                <li><Link href="/salle-de-reception">La salle de réception</Link></li>
                <li><Link href="/produits-fermiers">Les produits fermiers</Link></li>
                <li><Link href="/hebergements">Nos Hébergements</Link></li>
            </ul>
        </div>
    )
}
