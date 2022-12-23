import Head from 'next/head';
import Link from 'next/link';
import { PageTitles } from './utilities/constant';

import Styles from '../styles/MentionsLegales.module.css';

export default function legales() {
    return (
        <>
            <Head>
				<title>{ PageTitles.legals }</title>
				<meta name="description" content="ferme-taurine, soirée Camarguaise, c'est dans ce cadre atypique situé sur la commune de St André d'Olérargues dans le Gard, que nous vous acceuillons pour vous faire découvrir notre passion des taureaux. Mentions Légales du site." />
			</Head>


                <main>

                    <section className={Styles.mentions}>
                        <div className={Styles.mentions__header}>
                            <h1 className={Styles.mentions__title}>
                                mentions Légales</h1>
                            <div className={Styles.mentions__separ}>
                                <div className={Styles.mentions__separUnderline}></div>
                            </div>
                        </div>
                    </section>
                    <section className={Styles.description}>
                        <p className={Styles.description__para}>
                            La Manade du Joncas au capital de **** euros, immatriculée au Registre du commerce et des sociétés de
                            ********* sous le numéro ************* et ayant son siège social situé Tour Europa, Avenue de L’europe
                            94320 Thiais

                            Directeur de la publication : Monsieur ***********

                            Le site Internet est hébergé par la société AMEN 12-14 Rond Point des Champs Elysées 75008 Paris.

                            Le site Internet https://La Manade du Joncas.fr (le Site) est la propriété exclusive de la Dj Ms
                            Mariage.

                            La consultation du Site est subordonnée à l’acceptation intégrale et au respect par les internautes, des
                            mentions d’utilisation suivantes.

                            L’internaute s’engage à faire un usage personnel et non commercial des informations contenues sur le
                            Site. En cas de non-respect des dispositions des présentes mentions légales, par l’internaute, sa
                            responsabilité civile et/ou pénale pourrai(en)t se voir engagée(s).
                        </p>
                        <hr/>
                        <h2 className={Styles.description__title}>
                            1. CONTENU DU SITE
                        </h2>
                        <p className={Styles.description__para}>
                            Le site est exploité par la société La Manade du Joncas.
                        </p>
                        <hr/>
                        <h2 className={Styles.description__title}>
                            2. PROPRIÉTÉ INTELLECTUELLE
                        </h2>
                        <p className={Styles.description__para}>
                            De manière générale, les données, les programmes, les échantillons musicaux, les textes, les
                            informations, les logos, les identités visuelles, les images animées ou non et leurs mises en forme, les
                            vidéos, apparaissant sur le Site sont la propriété de La Manade du Joncas et sont protégées à ce titre
                            par les dispositions du Code de la propriété intellectuelle.

                            Tout internaute s’engage à ne pas les utiliser que dans le strict cadre offert par le Site.
                        </p>
                        <hr/>
                        <h2 className={Styles.description__title}>
                            3. PROTECTION DES DONNÉES PERSONNELLES
                        </h2>
                        <p className={Styles.description__para}>
                            L’internaute peut être amené à fournir certaines données personnelles en répondant aux formulaires qui
                            lui sont proposés sur le Site. La saisie de ces données est nécessaire au traitement de la demande de
                            l’internaute, par La Manade du Joncas.

                            La Manade du Joncas s’engage à respecter les dispositions de la loi n°78-17 du 6 janvier 1978 relative à
                            l’informatique, aux fichiers et aux libertés modifiées et au Règlement (UE) 2016/679 du Parlement
                            européen et du Conseil du 27 avril 2016 dit « RGPD » et prendre toute précaution nécessaire pour
                            préserver la sécurité des informations nominatives confiées.
                        </p>
                        <hr/>
                        <h2 className={Styles.description__title}>
                            1. CONTENU DU SITE
                        </h2>
                        <p className={Styles.description__para}>
                            Le site est exploité par la société La Manade du Joncas.
                        </p>
                        <h3 className={Styles.description__titlevar}>
                            Responsable de traitement
                        </h3>
                        <p className={Styles.description__para}>
                            La Manade du Joncas traite les données personnelles des internautes en qualité de responsable de
                            traitement.
                        </p>
                        <h3 className={Styles.description__titlevar}>
                            Données personnelles traitées et finalités de traitement
                        </h3>
                        <p className={Styles.description__para}>
                            La Manade du Joncas recueille sur le Site des données personnelles d’internautes ayant pris contact avec
                            elle notamment via le formulaire de contact en ligne. Ces données
                            sont nécessaires afin de répondre à la sollicitation des internautes. Dans le cadre de la fourniture de
                            ses services, La Manade du Joncas traite uniquement les données personnelles suivantes strictement
                            nécessaires à leur demande de prise de contact : nom, prénom et adresse email.

                            La finalité de traitement de ces données personnelles est de permettre à La Manade du Joncas de répondre
                            aux sollicitations des internautes.

                            Destinataires des données personnelles

                            Les données personnelles collectées sur le Site sont traitées uniquement par les membres de l’équipe
                            La Manade du Joncas.

                            Les données personnelles sont stockées en grande majorité sur des serveurs d’hébergement situés dans
                            l’Union européenne.
                        </p>
                        <h3 className={Styles.description__titlevar}>
                            Durée de conservation des données personnelles
                        </h3>
                        <p className={Styles.description__para}>
                            La Manade du Joncas s’engage à conserver ces données personnelles, sauf obligation légale ou
                            réglementaire contraire, pour une durée maximale de trois ans à compter du dernier contact avec
                            l’internaute, qu’il soit à l’initiative de Dj Mariage Oriental ou de l’internaute (ex : envoi de la
                            newsletter).

                            A l’issue de cette durée ou en cas d’exercice de ses droits par les internautes, La Manade du Joncas
                            s’engage à détruire toute copie des données personnelles des internautes qu’il détiendrait.
                        </p>
                        <h3 className={Styles.description__titlevar}>
                            Sécurité des données personnelles
                        </h3>
                        <p className={Styles.description__para}>
                            La Manade du Joncas s’engage, au titre de son obligation de moyens, à prendre toutes les précautions utiles et
                            met en œuvre des mesures techniques et organisationnelles appropriées en la matière pour garantir un
                            niveau de sécurité adapté et pour protéger les données personnelles des internautes contre les
                            altérations, destructions et accès non autorisés.
                        </p>
                        <h3 className={Styles.description__titlevar}>
                            Droits des internautes sur leurs données personnelles
                        </h3>
                        <p className={Styles.description__para}>
                            Les internautes ont la possibilité d’exercer leurs droits d’accès, de rectification, d’effacement,
                            d’opposition, de limitation du traitement, de portabilité de leurs données personnelles, droit de ne pas
                            faire l’objet d’une décision individuelle automatisée et droit de révocation de leur consentement,
                            concernant les données personnelles qu’ils fournissent.

                            Pour exercer l’un de ces droits, il convient d’adresser sa demande par email à l’adresse suivante :
                            contact.djms@gmail.fr

                            La Manade du Joncas s’engage à y répondre dans les meilleurs délais et au plus tard dans un délai d’un
                            mois à compter de la réception de la demande.

                            Si les internautes considèrent que le traitement de leurs données personnelles constitue une violation
                            de la législation en vigueur, les internautes ont la possibilité d’introduire une réclamation auprès de
                            la CNIL.
                        </p>
                        <h3 className={Styles.description__titlevar}>
                            Confidentialité des données personnelles
                        </h3>
                        <p className={Styles.description__para}>
                            La Manade du Joncas garantit la confidentialité des données personnelles traitées et veille à ce que les
                            personnes autorisées à traiter lesdites données personnelles s’engagent également à respecter cette
                            obligation de confidentialité.
                        </p>
                        <hr/>
                        <h2 className={Styles.description__title}>
                            4. COOKIES
                        </h2>
                        <p className={Styles.description__para}>
                            La navigation sur le Site est susceptible d’entraîner l’installation de cookies sur l’ordinateur de
                            l’utilisateur.

                            Les données obtenues par le biais de ces cookies visent à faciliter la navigation ultérieure sur le Site
                            et ont vocation à permettre diverses mesures de fréquentation sur le Site.

                            L’utilisateur du Site a la possibilité de désactiver les cookies en se rendant dans les options de son
                            navigateur.
                        </p>
                        <hr/>
                        <h2 className={Styles.description__title}>
                            5. GOOGLE ANALYTICS
                        </h2>
                        <p className={Styles.description__para}>
                            La Manade du Joncas utilise Google Analytics pour suivre les internautes sur ce Site.

                            Des cookies sont utilisés par Google Analytics pour collecter ces données.

                            Afin de se conformer à la nouvelle réglementation, Google ont inclus une modification au traitement des
                            données que les internautes peuvent consulter sur les pages suivantes :

                            Google Analytics
                            La Manade du Joncas s’engage à traiter anonymement les données collectées et à désactiver le « partage
                            de données » .
                        </p>
                        <hr/>
                        <h2 className={Styles.description__title}>
                            7. RESPONSABILITÉ
                        </h2>
                        <p className={Styles.description__para}>
                            La Manade du Joncas décline toute responsabilité quant aux éventuels dysfonctionnements pouvant survenir
                            sur le Site et entraîner une perte de données ou une indisponibilité de l’accès aux informations
                            produites sur celui-ci. La Manade du Joncas ne peut garantir l’exhaustivité et la véracité des
                            informations présentes sur le Site ainsi que l’absence de modification par un tiers (intrusion, virus).
                            L’internaute est seul responsable de l’utilisation qu’il fait du contenu du Site.

                            Les éléments présentés sur le Site sont susceptibles de modification sans préavis et sont mis à la
                            disposition des internautes, sans aucune garantie d’aucune sorte, expresse ou tacite.

                            La présence de liens hypertextes présents sur le Site ne crée pas une solidarité de responsabilité entre
                            La Manade du Joncas et les propriétaires des autres sites, quant au contenu des sites sur lesquels est
                            redirigé l’internaute. Seule la responsabilité desdits sites peut être engagée.
                        </p>

                        <Link href="/"><button className={Styles.goHome}>Retourner à l'acceuil</button></Link>

                        </section>

                    </main>

            </>

    )
}
