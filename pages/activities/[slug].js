import ReactMarkdown from "react-markdown";

import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Styles from '../../styles/Activities.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { motion } from 'framer-motion';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

import { getActivities } from '../api/activitiesAPI';

import { API_URL } from '../../config/config';



export async function getStaticPaths() {
    const activities = await getActivities();
    const paths = activities.data.map((activity) => {
        return {
            params: { slug: activity.attributes.slug }
        }
    });
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const activities = await getActivities();
    const activity = activities.data.find((activity) => {
        return activity.attributes.slug === params.slug;
    });
    return {
        props: {
            activity,
            fallback: false,
        }
    }
}




export default function Activities({ activity }) {

    console.log(activity);

    return (
        <>
            <Head>
                    <title>La Manade du Joncas - Activitées</title>
                    <meta name="description" content="ferme-taurine, soirée Camarguaise, c'est dans ce cadre atypique situé sur la commune de St André d'Olérargues dans le Gard, que nous vous acceuillons pour vous faire découvrir notre passion des taureaux, ainnsi que nos produits fermiers direct producteur. Découvrez nos activitées" />
            </Head>

            <Header />

            <main>

                <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                    duration: 1,
                    delay: 0.5,
                    staggerChildren: 0.5, 
                }}
                className={Styles.activitiesContainer}>
                    {activity.attributes.image.data.length >= 2 ? ( <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className={Styles.swiper}
                    >
                    {activity.attributes.image.data.map((image) => (
                        <SwiperSlide key={image.id}>
                            <div className={Styles.imgActivities}>
                                <Image src={API_URL + image.attributes.formats.small.url.toString()} alt="" width="600" height="500" quality={70} />
                            </div>
                        </SwiperSlide>
                    ))}
                    </Swiper> ) : (
                        <div className={Styles.imgActivities}>
                            <Image src={API_URL + activity.attributes.image.data[0].attributes.formats.small.url.toString()} alt="" width="600" height="500" />
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
                        >{ activity.attributes.title }</motion.h1>
                        <motion.h2
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                            duration: 1,
                            delay: 0.5, 
                        }}
                        >{ activity.attributes.subtitle }</motion.h2>
                        <div>
                            <AiOutlineArrowRight className={Styles.fleche}/>
                        </div>
                    </div>
                    <div className={Styles.contentActivities}>
                        <p>
                        <ReactMarkdown children={activity.attributes.content} />
                        </p>
                    </div>
                </motion.div>

            </main>

            <Footer />
        </>
    )
}