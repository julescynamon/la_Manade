import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Head from 'next/head';
import Styles from '../styles/Custom404.module.css';

export default function custom404() {
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
                <div className={Styles.errorPage}>
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Oops !
                    </motion.h1>
                    <h2>La page que vous recherchez n'existe pas.</h2>
                    <p>
                        Retournez sur le site <Link href="/">ici</Link> ou{' '}
                        <Link href="/contact">Contactez-nous</Link> pour nous
                        parler du problème rencontré
                    </p>
                </div>
            </main>
        </>
    );
}
