import Head from 'next/head';
import Link from 'next/link';
import Styles from '../styles/Sitemap.module.css';
import { PageTitles } from './utilities/constant';

export default function sitemap() {
    return (
        <>
            <Head>
                <title>{PageTitles.sitemap}</title>
                <meta
                    name="description"
                    content="ferme-taurine, soirée Camarguaise, c'est dans ce cadre atypique situé sur la commune de St André d'Olérargues dans le Gard, que nous vous acceuillons pour vous faire découvrir notre passion des taureaux. Plan du site."
                />
            </Head>

            <main className={Styles.container}>
                <h1 className={Styles.title}>Plan du site</h1>
                <ul className={Styles.link}>
                    <li>
                        <Link href="/">- Accueil</Link>
                    </li>
                    <li>
                        <Link href="/hebergements">- Hébergements</Link>
                    </li>
                    <li>
                        <Link href="/actuality">- Nos Actualitées</Link>
                    </li>
                    <li>
                        <Link href="/contact">- Contact</Link>
                    </li>
                    <li>
                        <Link href="/mentions-legales">- Mentions Légales</Link>
                    </li>
                    <li>
                        <Link href="/activities/soirée-camarguaise">
                            - Soirée Camarguaise
                        </Link>
                    </li>
                    <li>
                        <Link href="/activities/courses-camarguaise">
                            - Les courses camarguaises
                        </Link>
                    </li>
                    <li>
                        <Link href="/activities/animations">
                            - Les animations taurine
                        </Link>
                    </li>
                    <li>
                        <Link href="/activities/réception">
                            - La sallle de réception
                        </Link>
                    </li>
                    <li>
                        <Link href="/activities/produits-fermiers">
                            - Nos produits fermiers
                        </Link>
                    </li>
                </ul>
            </main>
        </>
    );
}
