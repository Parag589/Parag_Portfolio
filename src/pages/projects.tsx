import { Fragment, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import classnames from 'classnames';

import data from '@/data/projects.data.json';

import ProjectCard from '@/components/pages/projects/project-card/project-card.component';

import styles from '@/styles/projects.module.scss';

const Projects: NextPage = () =>
{
    const [projects, setProjects] = useState({ cards: data.cards, category: 'All' });

    return (
        <Fragment>
            <Head>
                <meta name='Classification' content='Parag_Agarwal Project'/>
                <meta name='subject' content='Parag_Agarwal Project'/>
                <meta name='description' content='Parag_Agarwal Project'/>
                <meta name='keywords' content='Parag_Agarwal, PA, Parag, Agarwal, Project'/>
                <meta name='author' content='Parag_Agarwal'/>

                <meta property='og:type' content='website'/>
                <meta property='og:url' content='https://intelligentquantum.dev/projects'/>
                <meta property='og:title' content='Parag_Agarwal'/>
                <meta property='og:description' content='Parag_Agarwal Projects'/>
                <meta property='og:image' content='https://intelligentquantum.dev/favicon.png'/>

                <meta property='twitter:card' content='summary'/>
                <meta property='twitter:url' content='https://intelligentquantum.dev/Projects'/>
                <meta property='twitter:title' content='Parag_Agarwal'/>
                <meta property='twitter:description' content='Parag_Agarwal Projects'/>

                <title>Parag_Agarwal &mdash; Projects</title>
            </Head>

            <section className={styles.projects}>
                <h2 className={styles.projectsHeading}>Projects</h2>

               

                <div className={styles.projectsCards}>
                    {
                        projects.cards.map(card =>
                        {
                            return (
                                <ProjectCard
                                    key={card.id}
                                    image={card.image}
                                    alt={card.title}
                                    title={card.title}
                                    description={card.description}
                                    link={card.link}
                                />
                            );
                        })
                    }
                </div>
            </section>
        </Fragment>
    );
};

export default Projects;
