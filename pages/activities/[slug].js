import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Styles from '../../styles/Activities.module.css';





export default function Activities() {
    return (
        <>
            <Head>
                    <title>La Manade du Joncas - Actualitées</title>
                    <meta name="description" content="ferme-taurine, soirée Camarguaise, c'est dans ce cadre atypique situé sur la commune de St André d'Olérargues dans le Gard, que nous vous acceuillons pour vous faire découvrir notre passion des taureaux, ainnsi que nos produits fermiers direct producteur. Découvrez nos dérnières actualitées" />
            </Head>

            <Header />

            <main>

                <div className={Styles.activitiesContainer}>
                    <div className={Styles.imgActivities}>
                        <Image src="/course.960190e5.jpg" alt="" width="600" height="500" />
                    </div>
                    <div className={Styles.attractActivities}>
                        <h1>Les Courses Camarguaises</h1>
                        <h2>Un univers passionant</h2>
                        <div className={Styles.fleche}>
                            
                        </div>
                    </div>
                    <div className={Styles.contentActivities}>
                        <p>
                            La Course Camarguaise existe depuis le XIIe siècle, des jeux avec des taureaux sans brutalité ni
                            mise à mort.
                            Nous élevons des taureaux dans la pure tradition de la Camargue, et après chaque course ces derniers
                            rentrent au prés.

                            Vous pourrez découvrir une partie de nos différents taureaux en photo.

                            Un peu d'histoire et des explications que vous trouverez <a href="http://fr.wikipedia.org/wiki/Course_camarguaise">ici</a>.
                        </p>
                    </div>
                </div>

            </main>

            <Footer />
        </>
    )
}