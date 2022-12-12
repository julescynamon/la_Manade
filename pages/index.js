import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Styles from '../styles/Home.module.css';
import { RiStarSFill } from 'react-icons/ri';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";


import { getActualities } from './api/actualitiesAPI';
import { getActivities } from './api/activitiesAPI';
import { getGoogleReviews } from './api/googleReviewsAPI';

export async function getStaticProps() {
		const activitiesData = await getActivities();
		const activities = activitiesData.data;
		const data = await getActualities();
		const lastActualities = data.slice(-1)[0].attributes;
		const dataReviews = await getGoogleReviews();
		const googleReviewsData = dataReviews.result.reviews;
			return {
				props: {
					lastActualities,
					activities,
					googleReviewsData,
				},
				revalidate: 10,
			};
	}




export default function Home({ lastActualities, activities, googleReviewsData }) {

	const newReviews = googleReviewsData.filter((review) => review.rating >= 4);

	return (
		<>
			<Head>
				<title>La Manade du Joncas - Ferme Taurine</title>
				<meta name="description" content="ferme-taurine, soirée Camarguaise, c'est dans ce cadre atypique situé sur la commune de St André d'Olérargues dans le Gard, que nous vous acceuillons pour vous faire découvrir notre passion des taureaux, ainnsi que nos produits fermiers direct producteur." />
				<link rel="icon" href="/favicon.ico" />
			</Head>



			<main>

				<section className={Styles.hero}>
					<video src="/videos/test.mp4" className={Styles.backgroundVideo} autoPlay  loop muted></video>
					<motion.div
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
					className={Styles.context}>
						<p>Plus qu'un travail, une passion !</p>
						<div className={Styles.cornerRight}></div>
						<h1 className={Styles.welcomeHero}>Bienvenue, à la Manade du Joncas</h1>
						<p>Réception, animations, produits de la ferme et bien plus !</p>
						<a href="#about" className={Styles.moreHero}>Voir Plus ...</a>
						<div className={Styles.cornerLeft}></div>
					</motion.div>
				</section>

				<section className={Styles.about}>
					<div className={Styles.content__about} id="about">
						<motion.h2 
							initial={{ opacity: 0, y: 100 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}
						>À Propos de nous...</motion.h2>
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
							<Image className={Styles.image__back} src="/images/imgBack.jpg" alt="taureaux en pleine nature" width="600" height="500" alt="taureaux en plein nature"/>
							<Image className={Styles.image__front} src="/images/imgFront.jpg" alt="taureaux en pleine nature" width="600" height="500" alt="taureaux en plein nature"/>
						</div>
					</div>
				</section>

				<section className={Styles.activities}>
					<motion.h2
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					>Nos Services ...</motion.h2>
					<div className={Styles.separate__services}></div>
					<motion.div 
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
					className={Styles.containerActivities}>
						{activities.map((activity) => (
							<div className={Styles.cardActivities} key={activity.id}>
								<h3>{activity.attributes.title}</h3>
								<p>{activity.attributes.description}</p>
								<button className={Styles.btnAction}><Link href={`/activities/${activity.attributes.slug}`} >Voire plus ...</Link></button>
							</div>
						))}
							<div className={Styles.cardActivities}>
								<h3>Nos Hébergements</h3>
								<p>
									Afin de diversifier notre activité, nous vous proposons un hébergement insolite dans nos roulottes. Placées sur les bords du lac de 4 Ha, vous êtes aux premières loges pour apercevoir les taureaux qui viennent s'abreuver sur l'autre rive. 
								</p>
								<button className={Styles.btnAction}><Link href="/hebergements" >Voire plus ...</Link></button>
							</div>
					</motion.div>
				</section>

				<section className={Styles.actualities}>
					<motion.h2
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					>Dernières Actualitées ...</motion.h2>
					<div className={Styles.separate__actualities}></div>
						{ !lastActualities ?  (
							<div className={Styles.card__actualities}>
							<h3>Oops...</h3>
							<p>Pas d'actualtées pour le moment ...</p>
						</div>
						) : (
							<div className={Styles.card__actualities}>
							<h3>{lastActualities.title}</h3>
							<p>{lastActualities.content.substring(0, 200)} ...</p>
							<button className={Styles.btn__actualities}><Link href="/actuality" >Voir plus ...</Link></button>
						</div>
						) }
						
				</section>

        		<section className={Styles.testimonials}>
					<motion.h2
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					>Nos 5 derniers témoignages ...</motion.h2>
					<div className={Styles.separate__testimonials}></div>
						<Swiper
						slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation, Autoplay]}
						autoPlay={true}
                        className={Styles.swiper}
						>
							{newReviews.map((review) => (
								<SwiperSlide key={review.author_name}>
									<div className={Styles.testimonials__card}>
										<div className={Styles.card__header}>
											<div className={Styles.header__img}>
												<Image src={review.profile_photo_url} alt="photo de la personne" width="100" height="100"/>
												<h2>{review.author_name}</h2>
												{ review.rating === 5 ? (
													<div className={ Styles.star }>
														<RiStarSFill/> 
														<RiStarSFill/> 
														<RiStarSFill/> 
														<RiStarSFill/> 
														<RiStarSFill/>
													</div> ) : (
													<div className={ Styles.star }>
														<RiStarSFill/> 
														<RiStarSFill/> 
														<RiStarSFill/> 
														<RiStarSFill/>
													</div> ) }
											</div>
											<div className={Styles.card__text}>
												<p>{review.text}</p>
												<span className={Styles.date}>{review.relative_time_description}</span>
											</div>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
				</section>
				
			</main>

		</>
	)
}



