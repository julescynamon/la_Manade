import { motion } from 'framer-motion';

import Head from 'next/head';
import Image from 'next/image';
import Styles from '../styles/Actualities.module.css';

import { getActualities } from './api/actualitiesAPI';
const API_URL = process.env.API_URL;
import { PageTitles } from './utilities/constant';

export async function getStaticProps() {
    try {
        const actualities = await getActualities();
        if (!actualities)
            return {
                actualities: [],
            };
        return {
            props: {
                actualities,
            },
            revalidate: 10,
        };
    } catch (error) {
        return console.log(error);
    }
}

export default function Actuality({ actualities }) {
    if (actualities.length > 0) {
        const lastActualities = actualities.slice(-1)[0].attributes;
        const image = lastActualities.image.data;
        const newImg = image?.attributes.formats.small.url.toString();

        return (
            <>
                <Head>
                    <title>{PageTitles.actuality}</title>
                    <meta
                        name="description"
                        content="ferme-taurine, soirée Camarguaise, c'est dans ce cadre atypique situé sur la commune de St André d'Olérargues dans le Gard, que nous vous acceuillons pour vous faire découvrir notre passion des taureaux, ainnsi que nos produits fermiers direct producteur. Découvrez nos dérnières actualitées"
                    />
                </Head>

                <main>
                    <div className={Styles.actualitiesContainer}>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                staggierChildren: 0.75,
                            }}
                            className={Styles.card}
                        >
                            <div className={Styles.image}>
                                {newImg ? (
                                    <Image
                                        src={API_URL + newImg}
                                        alt={image.attributes.alternativeText}
                                        width={500}
                                        height={500}
                                    />
                                ) : (
                                    <Image
                                        src="/images/manuel-lopez-Eao2P-T8_NU-unsplash.webp"
                                        alt="taureaux dans la plaine"
                                        width={500}
                                        height={500}
                                    />
                                )}
                            </div>
                            <motion.h1
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                {lastActualities.title}
                            </motion.h1>
                            <p>{lastActualities.content}</p>
                            <h3>
                                Suivez nos actualités{' '}
                                <a href="https://www.facebook.com/manadedu.joncas">
                                    ici
                                </a>
                            </h3>
                        </motion.div>
                    </div>
                </main>
            </>
        );
    } else {
        return (
            <>
                <Head>
                    <title>La Manade du Joncas - Actualitées</title>
                    <meta
                        name="description"
                        content="ferme-taurine, soirée Camarguaise, c'est dans ce cadre atypique situé sur la commune de St André d'Olérargues dans le Gard, que nous vous acceuillons pour vous faire découvrir notre passion des taureaux, ainnsi que nos produits fermiers direct producteur. Découvrez nos dérnières actualitées"
                    />
                </Head>

                <main>
                    <div className={Styles.actualitiesContainer}>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className={Styles.card}
                        >
                            <div className={Styles.image}>
                                <Image
                                    src="/images/priscilla-du-preez-tGtWKDdicn4-unsplash.jpg"
                                    alt="image"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <motion.h1
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                Actualités
                            </motion.h1>
                            <p>Il n'y a pas d'actualitées pour le moment</p>
                            <h3>
                                Suivez nos actualités{' '}
                                <a href="https://www.facebook.com/manadedu.joncas">
                                    ici
                                </a>{' '}
                                😉
                            </h3>
                        </motion.div>
                    </div>
                </main>
            </>
        );
    }
}
