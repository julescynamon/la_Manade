import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Styles from '../../styles/Activities.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { getActivities } from '../api/activitiesAPI';

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
                    {/* <div className={Styles.imgActivities}>
                        <Image src="/course.960190e5.jpg" alt="" width="600" height="500" />
                    </div> */}
                    <div className={Styles.attractActivities}>
                        <h1>{ activity.attributes.title }</h1>
                        <h2>{ activity.attributes.subtitle }</h2>
                        <div>
                            <AiOutlineArrowRight className={Styles.fleche}/>
                        </div>
                    </div>
                    <div className={Styles.contentActivities}>
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