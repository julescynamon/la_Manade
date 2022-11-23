import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script'
import Styles from '../styles/Home.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { ImQuotesRight } from 'react-icons/im';

import { getActualities } from './api/actualitiesAPI';
import { getActivities } from './api/activitiesAPI';


export default function Home() {

	const [isLoading, setIsLoading] = useState(true);
	const [ actualities, setActualities ] = useState([]);
	const [ activities, setActivities ] = useState([]);

	const fetchActualities = async () => {
		const data = await getActualities();
		setActualities(data.data);
		console.log(actualities);
		setIsLoading(false);
	};

	const fetchActivities = async () => {
		const data = await getActivities();
		setActivities(data.data);
		console.log(activities);
		setIsLoading(false);
	};



	useEffect(() => {
		fetchActualities();
		fetchActivities();
	}, []);





	return (
		<>
			<Head>
				<title>La Manade du Joncas - Ferme Taurine</title>
				<meta name="description" content="ferme-taurine, soirée Camarguaise, c'est dans ce cadre atypique situé sur la commune de St André d'Olérargues dans le Gard, que nous vous acceuillons pour vous faire découvrir notre passion des taureaux, ainnsi que nos produits fermiers direct producteur." />
			</Head>

			<Header />

			<main className={Styles.content}>

				<section className={Styles.hero}>
					<video src="https://assets.codepen.io/6093409/river.mp4" className={Styles.backgroundVideo} autoPlay  loop muted></video>
					<div className={Styles.context}>
						<p>Plus qu'un travail, une passion !</p>
						<div className={Styles.cornerRight}></div>
						<h1 className={Styles.welcomeHero}>Bienvenue, à la Manade du Joncas</h1>
						<p>Réception, animations, produits de la ferme et bien plus !</p>
						<a href="#" className={Styles.moreHero}>Voire Plus ...</a>
						<div className={Styles.cornerLeft}></div>
					</div>
				</section>

				<section className={Styles.about}>
					<div className={Styles.content__about}>
						<h2>À Propos de nous...</h2>
						<div className={Styles.separate}></div>
						<p>
							C'est dans ce cadre atypique situé sur la commune de St André d'Olérargues dans le Gard,
							découvert
							suite
							à une balade à cheval que Patrice Brouillet crée la manade en 1980.

							La sélection et l'élevage dans ces étendues de garrigues engendrent des petits taureaux robustes
							et
							endurants.

							Sa passion pour les taureaux le guide vers la course camarguaise et au fil du temps il est
							reconnu
							dans
							le monde de la bouvine.

							Aujourd’hui, ses taureaux courent sur les pistes de toutes les arènes de Provence et du
							Languedoc.
						</p>

						<div className={Styles.about__img}>
							<Image className={Styles.image__back} src="/images/imgBack.jpg" alt="taureaux en pleine nature" width="600" height="500"/>
							<Image className={Styles.image__front} src="/images/imgFront.jpg" alt="taureaux en pleine nature" width="600" height="500"/>
						</div>
					</div>
				</section>

				<section className={Styles.activities}>
					<h2>Nos Services ...</h2>
					<div className={Styles.separate__services}></div>
					<div className={Styles.container__activities}>
						{activities.map((activity) => (
							<div className={Styles.card__activities} key={activity.id}>
								<h3>{activity.attributes.title}</h3>
								<p>{activity.attributes.description}</p>
								<button className={Styles.btnAction}><Link href={`/activities/${activity.attributes.slug}`} >Voire plus ...</Link></button>
							</div>
						))}
							<div className={Styles.card__activities}>
								<h3>Nos Hébergements</h3>
								<p>
									Afin de diversifier notre activité, nous vous proposons un hébergement insolite dans nos roulottes. Placées sur les bords du lac de 4 Ha, vous êtes aux premières loges pour apercevoir les taureaux qui viennent s'abreuver sur l'autre rive. 
								</p>
								<button className={Styles.btnAction}><Link href="/hebergements" >Voire plus ...</Link></button>
							</div>
					</div>
				</section>

				<section className={Styles.actualities}>
					<h2>Dernières Actualitées ...</h2>
					<div className={Styles.separate__actualities}></div>
					<div className={Styles.card__actualities}>
						<h3>Soirée Camarguaise</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facere tempora non vitae
							magnam
							dolores inventore. Repellendus beatae voluptate et!</p>
						<button className={Styles.btn__actualities}><a href="#">Voire plus ...</a></button>
					</div>
				</section>

        		<section className={Styles.testimonials}>
					<h2>Témoignages ...</h2>
					<div className={Styles.separate__testimonials}></div>
					<div>
					
					</div>
				</section>
				
			</main>

			<Footer />
		</>
	)
}



