import React, { useRef, useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';

import Head from 'next/head';
import Styles from '../styles/Contact.module.css';
import { PageTitles } from './utilities/constant';

export default function Contact() {
    const form = useRef();
    const [validation, setValidation] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const defaultValues = {
        name: '',
        email: '',
        message: '',
    };

    const contactSchema = yup.object({
        name: yup
            .string()
            .required('Le nom est requis')
            .min(2, 'Le nom est trop court'),
        email: yup
            .string()
            .required("L'email est requis")
            .email("l'email est invalid"),
        message: yup
            .string()
            .required('Le message est requis')
            .min(5, 'Le message est trop court'),
    });

    const {
        formState: { errors, isSubmitting },
        register,
        handleSubmit,
        reset,
        clearErrors,
    } = useForm({
        defaultValues,
        resolver: yupResolver(contactSchema),
    });

    async function submit(values) {
        try {
            clearErrors();
            emailjs
                .sendForm(
                    'service_k4reqfk',
                    'template_1iotgam',
                    form.current,
                    'e3gyO09a_liHF4gjW'
                )
                .then(
                    (result) => {
                        reset(defaultValues);
                        setValidation('Merci pour votre message !');
                    },
                    (error) => {
                        setErrorMessage(
                            'Une erreur est survenue, veuillez réessayer.'
                        );
                    }
                );
        } catch (error) {
            setErrorMessage('Une erreur est survenue, veuillez réessayer.');
        }
    }

    return (
        <>
            <Head>
                <title>{PageTitles.contact}</title>
                <meta
                    name="description"
                    content="ferme-taurine, soirée Camarguaise, c'est dans ce cadre atypique situé sur la commune de St André d'Olérargues dans le Gard, que nous vous acceuillons pour vous faire découvrir notre passion des taureaux, ainnsi que nos produits fermiers direct producteur.Contactez nous pour plus d'infos."
                />
            </Head>

            <main>
                <div className={Styles.contactContainer}>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className={Styles.containerContent}
                    >
                        <h1>Contactez-nous</h1>
                        <div className={Styles.carte}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2862.2799521186203!2d4.470037515136579!3d44.1600891275237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b5ae00aebf3119%3A0x251650bf87108615!2sLa%20Manade%20du%20Joncas!5e0!3m2!1sfr!2sfr!4v1664437450437!5m2!1sfr!2sfr"
                                width="350"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className={Styles.containerForm}
                    >
                        <form ref={form} onSubmit={handleSubmit(submit)}>
                            <div className={Styles.group1}>
                                <div className={Styles.formGroup}>
                                    <label htmlFor="name">Nom</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Votre nom"
                                        {...register('name')}
                                    />
                                    {errors.name && (
                                        <p className={Styles.errorMessage}>
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>
                                <div className={Styles.formGroup}>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Votre email"
                                        {...register('email')}
                                    />
                                    {errors.email && (
                                        <p className={Styles.errorMessage}>
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className={Styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="10"
                                    placeholder="Votre message"
                                    {...register('message')}
                                ></textarea>
                                {errors.message && (
                                    <p className={Styles.errorMessage}>
                                        {errors.message.message}
                                    </p>
                                )}
                            </div>
                            <button
                                className={Styles.btnSub}
                                disabled={isSubmitting}
                            >
                                Envoyer
                            </button>
                            <p className={Styles.succesMessage}>{validation}</p>
                            <p className={Styles.errorMessage}>
                                {errorMessage}
                            </p>
                        </form>
                    </motion.div>
                </div>
            </main>
        </>
    );
}
