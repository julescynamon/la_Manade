import { useState, useEffect } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Styles from '../styles/Actualities.module.css';

import { getActualities } from './api/actualitiesAPI';
import { API_URL } from '../config/config';


export default function Actuality() {

	const [isLoading, setIsLoading] = useState(true);
	const [ actualities, setActualities ] = useState([]);

	const fetchActualities = async () => {
		const data = await getActualities();
		const lastActualities = data.data[data.data.length - 1];
		setActualities(lastActualities);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchActualities();
	}, []);

	const image = actualities.attributes?.image.data;
	const newImg = image?.attributes.formats.small.url.toString();


    return (
        <>
            <Head>
                    <title>La Manade du Joncas - Actualitées</title>
                    <meta name="description" content="ferme-taurine, soirée Camarguaise, c'est dans ce cadre atypique situé sur la commune de St André d'Olérargues dans le Gard, que nous vous acceuillons pour vous faire découvrir notre passion des taureaux, ainnsi que nos produits fermiers direct producteur. Découvrez nos dérnières actualitées" />
            </Head>

            <Header />

            <main>

				<div className={Styles.actualitiesContainer}>

					<div className={Styles.card}>
						<div className={Styles.image}>
						{ isLoading ? <p>Chargement...</p> : <Image src={API_URL + newImg} alt="image" width={500} height={500} /> }
							
						</div>
						<h1>{actualities.attributes?.title}</h1>
						<p>{actualities.attributes?.content}</p>
						<h3>Suivez nos actualités <a href="https://www.facebook.com/manadedu.joncas">ici</a></h3>
					</div>
					</div>

            </main>

            <Footer />
        </>
    )
}