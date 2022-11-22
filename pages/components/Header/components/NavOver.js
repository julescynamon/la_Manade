import Link from 'next/link';
import Styles from './NavOver.module.css';

export default function NavOver() {
    return (
        <div>
            <ul className={Styles.sub}>
                <li><Link href="activities/soiree-camarguaise">Soirée Camarguaise</Link></li>
                <li><Link href="activities/course-camarguaise">La Course Camarguaise</Link></li>
                <li><Link href="activities/animations-taurine">Les animations Taurine</Link></li>
                <li><Link href="activities/salle-de-reception">La salle de réception</Link></li>
                <li><Link href="activities/produits-fermiers">Les produits fermiers</Link></li>
                <li><Link href="activities/hebergements">Nos Hébergements</Link></li>
            </ul>
        </div>
    )
}
