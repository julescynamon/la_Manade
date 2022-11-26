import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Styles from '../../styles/Activities.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

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
            activity
        }
    }
}




export default function Activities({ activity }) {


    return (
        <>
            <Head>
                    <title>La Manade du Joncas - Actualitées</title>
                    <meta name="description" content="ferme-taurine, soirée Camarguaise, c'est dans ce cadre atypique situé sur la commune de St André d'Olérargues dans le Gard, que nous vous acceuillons pour vous faire découvrir notre passion des taureaux, ainnsi que nos produits fermiers direct producteur. Découvrez nos dérnières actualitées" />
            </Head>

            <Header />

            <main>

                <div className={Styles.activitiesContainer}>
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
                            <div className={Styles.imgActivities} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                <Image src={API_URL + image.attributes.formats.small.url.toString()} alt="" width="900" height="500" />
                            </div>
                        </SwiperSlide>
                    ))}
                    </Swiper> ) : (
                        <div className={Styles.imgActivities} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <Image src={API_URL + activity.attributes.image.data[0].attributes.formats.small.url.toString()} alt="" width="600" height="500" />
                        </div>
                    )}
                    <div className={Styles.attractActivities} data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <h1>{ activity.attributes.title }</h1>
                        <h2>{ activity.attributes.subtitle }</h2>
                        <div>
                            <AiOutlineArrowRight className={Styles.fleche}/>
                        </div>
                    </div>
                    <div className={Styles.contentActivities} data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <p>
                            { activity.attributes.content }
                        </p>
                    </div>
                </div>

            </main>

            <Footer />
        </>
    )
}