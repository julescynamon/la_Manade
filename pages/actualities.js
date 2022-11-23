import React from 'react';

import Head from 'next/head';
import Image from 'next/image';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Styles from '../styles/Actualities.module.css';


export default function actualities() {
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
							<Image src="/images/actualitiesImg.jpg" alt="" width="150" height="150" />
						</div>
						<h1>NEWS ....</h1>
						<h2>Notre marchée</h2>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam beatae voluptas eaque aut ipsum
							earum
							minus nobis vel consequuntur impedit voluptatibus qui, facilis enim quasi voluptate dignissimos sint
							nihil temporibus adipisci quam et? Quia ea veritatis excepturi, minus in impedit similique quidem et
							nihil sapiente architecto quasi ex laborum ab! Temporibus autem impedit voluptas obcaecati, dolore
							voluptate laboriosam consequuntur ad eaque, iusto voluptatum? Ipsa architecto culpa debitis vel illo
							provident maiores facilis et, nemo unde eaque sit vero reiciendis in. Doloribus, ea officiis. Ullam
							fuga
							rerum iste dignissimos reprehenderit! Mollitia nostrum pariatur cumque voluptatum error doloribus
							ipsum
							quis iste. Sed, architecto ad. Quidem similique quibusdam maiores quae expedita, sequi numquam
							totam!
							Minima architecto possimus modi quia quasi tempore! Hic exercitationem sit ratione, praesentium
							aperiam
							necessitatibus vero laudantium quam eaque rerum autem earum laboriosam similique eos, corrupti nemo
							architecto tempore veniam. Beatae eos a perferendis fugiat laborum alias harum pariatur perspiciatis
							placeat? Temporibus dolores incidunt natus totam fugiat ullam nemo harum in, alias, porro cumque,
							ratione quibusdam! Laborum molestias temporibus beatae quisquam officia consequatur hic, debitis
							deleniti voluptatem, enim nemo ex sint nam nulla tempora, suscipit ad ea. Vero, cumque a vitae
							similique
							animi cum libero, nobis totam mollitia deserunt quaerat.</p>


						<h3>Suivez nos actualités <a href="https://www.facebook.com/manadedu.joncas">ici</a></h3>
					</div>
					</div>

            </main>

            <Footer />
        </>
    )
}