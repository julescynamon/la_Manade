import React from 'react';
import { motion } from 'framer-motion';

import Head from 'next/head';
import Image from 'next/image';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Styles from '../styles/Hebergements.module.css';



export default function hebergements() {    // on recupere l'url de l'image


    return (
        <>
            <Head>
                    <title>La Manade du Joncas - Hébergements</title>
                    <meta name="description" content="ferme-taurine, soirée Camarguaise, c'est dans ce cadre atypique situé sur la commune de St André d'Olérargues dans le Gard, que nous vous acceuillons pour vous faire découvrir notre passion des taureaux, ainnsi que nos produits fermiers direct producteur. Venez découvrir nos roulottes pour passer un moment au calme coupé de la folie du monde extèrieur." />
            </Head>

            <Header />

            <main>

                <div className={Styles.containerHebergement}>
                    <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className={Styles.imgRoulotte}>
                        <Image src="/images/roulottes.6f76e8c4.jpg" alt="roulotte en pleine nature" width="600" height="500" />
                    </motion.div>
                    <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                        duration: 1,
                        staggierChildren: 0.75,

                    }}
                    className={Styles.contentRoulotte}>
                        <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        >Nos Hébergements ...</motion.h1>
                        <p>Afin de diversifier notre activité, nous vous proposons un hébergement insolite dans nos roulottes.

                            Placées sur les bords du lac de 4 Ha, vous êtes aux premières loges pour apercevoir les taureaux qui
                            viennent s'abreuver sur l'autre rive.

                            En fin d'après midi le soleil rasant sur la montagne offre un spectacle des plus étonnants...

                            Vous serez bercés par le chant des oiseaux, les passages fréquents de canards sauvages qui viennent
                            se poser sur le lac.

                            Tout autour de vous, la nature, le calme et la quiétude sont au rendez vous, le dépaysement total
                            est assuré.

                            Pour plus de renseignements visitez notre site : <a href="http://www.locationderoulotte.fr/">http://www.locationderoulotte.fr/</a></p>
                    </motion.div>
                </div>

            </main>

            <Footer />
        </>
    )
}
