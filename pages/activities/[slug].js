import ReactMarkdown from 'react-markdown';

import Head from 'next/head';
import Image from 'next/image';
import Styles from '../../styles/Activities.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { PageTitles } from '../utilities/constant';

import { motion } from 'framer-motion';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

import { getActivities } from '../api/activitiesAPI';

export async function getStaticPaths() {
    const activities = await getActivities();
    const paths = activities.data.map((activity) => {
        return {
            params: { slug: activity.attributes.slug },
        };
    });
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const activities = await getActivities();
    const activity = activities.data.find((activity) => {
        return activity.attributes.slug === params.slug;
    });
    return {
        props: {
            activity,
        },
        revalidate: 10,
    };
}

export default function Activities({ activity }) {
    return (
        <>
            <Head>
                <title>{PageTitles.activity}</title>
                <meta
                    name="description"
                    content="ferme-taurine, soirée Camarguaise, c'est dans ce cadre atypique situé sur la commune de St André d'Olérargues dans le Gard, que nous vous acceuillons pour vous faire découvrir notre passion des taureaux, ainnsi que nos produits fermiers direct producteur. Découvrez nos activitées"
                />
            </Head>

            <main>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                        staggerChildren: 0.5,
                    }}
                    className={Styles.activitiesContainer}
                >
                    {activity.attributes.image.data.length >= 2 ? (
                        <Swiper
                            modules={[Pagination, Navigation]}
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            className={Styles.swiper}
                        >
                            {activity.attributes.image.data.map((image) => (
                                <SwiperSlide key={image.id}>
                                    <div className={Styles.imgActivities}>
                                        <Image
                                            src={
                                                process.env
                                                    .NEXT_PUBLIC_API_URL +
                                                image.attributes.formats.small.url.toString()
                                            }
                                            alt=""
                                            width="600"
                                            height="500"
                                            quality={70}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <div className={Styles.imgActivities}>
                            <Image
                                src={
                                    process.env.NEXT_PUBLIC_API_URL +
                                    activity.attributes.image.data[0].attributes.formats.small.url.toString()
                                }
                                alt=""
                                width="600"
                                height="500"
                            />
                        </div>
                    )}
                    <div className={Styles.attractActivities}>
                        <motion.h1
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.5,
                            }}
                        >
                            {activity.attributes.title}
                        </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.5,
                            }}
                        >
                            {activity.attributes.subtitle}
                        </motion.h2>
                        <div>
                            <AiOutlineArrowRight className={Styles.fleche} />
                        </div>
                    </div>
                    <div className={Styles.contentActivities}>
                        <ReactMarkdown children={activity.attributes.content} />
                    </div>
                </motion.div>
            </main>
        </>
    );
}
