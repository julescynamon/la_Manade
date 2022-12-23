import React from 'react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

import Head from 'next/head';
import Image from 'next/image';
import Styles from '../styles/Hebergements.module.css';
import { PageTitles } from './utilities/constant';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
// import required modules
import { Pagination, Navigation } from 'swiper';

import { getHebergements } from './api/hebergementAPI';
import { API_URL } from '../config/config';

export async function getStaticProps() {
    const data = await getHebergements();
    const hebergements = data[0].attributes;

    return {
        props: {
            hebergements,
        },
        revalidate: 10,
    };
}

export default function hebergements({ hebergements }) {
    const newImages = hebergements.image.data.map((image) => {
        return image.attributes.formats;
    });

    const images = newImages.map((image) => {
        return image.medium.url.toString();
    });

    return (
        <>
            <Head>
                <title>{PageTitles.lodging}</title>
                <meta
                    name="description"
                    content="ferme-taurine, soirée Camarguaise, c'est dans ce cadre atypique situé sur la commune de St André d'Olérargues dans le Gard, que nous vous acceuillons pour vous faire découvrir notre passion des taureaux, ainnsi que nos produits fermiers direct producteur. Venez découvrir nos roulottes pour passer un moment au calme coupé de la folie du monde extèrieur."
                />
            </Head>

            <main>
                <div className={Styles.containerHebergement}>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className={Styles.imgRoulotte}
                    >
                        {hebergements.image.data.length >= 2 ? (
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className={Styles.imgRoulotte}
                            >
                                {images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <Image
                                            src={API_URL + image}
                                            alt="roulotte"
                                            width="600"
                                            height="500"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            <Image
                                src={
                                    API_URL +
                                    hebergements.image.data[0].attributes.formats.medium.url.toString()
                                }
                                alt=""
                                width="600"
                                height="500"
                            />
                        )}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1,
                            staggierChildren: 0.75,
                        }}
                        className={Styles.contentRoulotte}
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            {hebergements.title}
                        </motion.h1>

                        <ReactMarkdown children={hebergements.content} />
                    </motion.div>
                </div>
            </main>
        </>
    );
}
