import Head from 'next/head';
import Image from 'next/image';
import Styles from '../styles/Home.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { ImQuotesRight } from 'react-icons/im';


export default function Home() {
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
							<img className={Styles.image__back} src="/images/imgBack.jpg" alt=""/>
							<img className={Styles.image__front} src="/images/imgFront.jpg" alt=""/>
						</div>
					</div>
				</section>

				<section className={Styles.activities}>
					<h2>Nos Services ...</h2>
					<div className={Styles.separate__services}></div>
					<div className={Styles.container__activities}>
						<div className={Styles.card__activities}>
							<h3>Soirée Camarguaise</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facere tempora non vitae
								magnam
								dolores inventore. Repellendus beatae voluptate et!</p>
							<button className={Styles.btnAction}><a href="#">Voire plus ...</a></button>
						</div>
						<div className={Styles.card__activities}>
							<h3>Salle de réception</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae neque molestias saepe nisi
								suscipit ipsum culpa, dolor temporibus quisquam quod.</p>
							<button className={Styles.btnAction}><a href="#">Voire plus ...</a></button>
						</div>
						<div className={Styles.card__activities}>
							<h3>Course Camarguaise</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem vel
								obcaecati
								necessitatibus illo consequatur officiis hic optio sequi recusandae.</p>
							<button className={Styles.btnAction}><a href="/activities.html">Voire plus ...</a></button>
						</div>
						<div className={Styles.card__activities}>
							<h3>Animations Taurine</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem vel
								obcaecati
								necessitatibus illo consequatur officiis hic optio sequi recusandae.</p>
							<button className={Styles.btnAction}><a href="#">Voire plus ...</a></button>
						</div>
						<div className={Styles.card__activities}>
							<h3>Nos Hébergements</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem vel
								obcaecati
								necessitatibus illo consequatur officiis hic optio sequi recusandae.</p>
							<button className={Styles.btnAction}><a href="#">Voire plus ...</a></button>
						</div>
						<div className={Styles.card__activities}>
							<h3>Produits Fermiers</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem vel obcaecati
								necessitatibus illo consequatur officiis hic optio sequi recusandae.</p>
							<button className={Styles.btnAction}><a href="#">Voire plus ...</a></button>
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
					<button className={Styles.btn__all}><a href="#">Voire d'autres actualités</a></button>
				</section>

        		<section className={Styles.testimonials}>
					<h2>Témoignages ...</h2>
					<div className={Styles.separate__testimonials}></div>
					<div>
						<div className={Styles.testimonials__container}>
							<ImQuotesRight className={Styles.quotes} /> 
							<p>Nous nous sommes mariés le 21 mai 2022 à la Manade du Joncas. C’était le lieu que nous
								recherchions, la nature, les animaux, le cadre idyllique tout en simplicité ! Chrystelle nous a
								régalé pour le cocktail du midi et le repas du soir. Une journée inoubliable, merci beaucoup!!
							</p>
							<h2>Claire G.</h2>
						</div>
					</div>
				</section>
				
			</main>

			<Footer />
		</>
	)
}



