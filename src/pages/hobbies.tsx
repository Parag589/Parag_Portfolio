import { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import hobbies from '@/data/hobbies.data.json';

import HobbyCard from '@/components/pages/hobbies/hobby-card/hobby-card.component';

import styles from '@/styles/hobbies.module.scss';

const Hobbies: NextPage = () =>
{

    return (
        <Fragment>
            <Head>
                <meta name='Classification' content='Portfolio Hobbies'/>
                <meta name='subject' content='Portfolio Hobbies'/>
                <meta name='description' content='Parag_Agarwal Hobbies'/>
                <meta name='keywords' content='Parag_Agarwal, PA, Parag, Agarwal, Hobbies'/>
                <meta name='author' content='Parag_Agarwal'/>

                <meta property='og:type' content='website'/>
                <meta property='og:url' content='https://intelligentquantum.dev/hobbies'/>
                <meta property='og:title' content='Parag_Agarwal'/>
                <meta property='og:description' content='Parag_Agarwal Hobbies'/>
                <meta property='og:image' content='https://intelligentquantum.dev/favicon.png'/>

                <meta property='twitter:card' content='summary'/>
                <meta property='twitter:url' content='https://intelligentquantum.dev/hobbies'/>
                <meta property='twitter:title' content='Parag_Agarwal'/>
                <meta property='twitter:description' content='Parag_Agarwal Hobbies'/>

                <title>Parag_Agarwal &mdash; Hobbies</title>
            </Head>

            <section className={styles.hobbies}>
                <h2 className={styles.hobbiesHeading}>Hobbies</h2>

                <div className={styles.hobbiesBoxes}>
                    {
                        hobbies.map(hobby =>
                        {
                            return (
                                <HobbyCard
                                    key={hobby.id}
                                    src={hobby.src}
                                    title={hobby.title}
                                    description={hobby.description}
                                    width={hobby.width}
                                    height={hobby.height}
                                />
                            );
                        })
                    }
                </div>
            </section>
        </Fragment>
    );
};

export default Hobbies;
