import Head from 'next/head';
import Image from 'next/image';
import '../styles/Home.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function Home() {
	return (
		<>
			<Head>
				<title>La Manade du Joncas - Ferme Taurine</title>
				<meta name="description" content="ferme-taurine, soirée Camarguaise, c'est dans ce cadre atypique situé sur la commune de St André d'Olérargues dans le Gard, que nous vous acceuillons pour vous faire découvrir notre passion des taureaux, ainnsi que nos produits fermiers direct producteur." />
			</Head>

			<Header />
		</>
	)
}
