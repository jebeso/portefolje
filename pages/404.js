import React from 'react';
import matter from 'gray-matter';
// import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/404.module.scss';

export const NotFoundPage = props => {
    return (
        <Layout
            noFooter
            pathname="/"
            siteTitle={props.title}
        >
            <div className={styles.notFoundContainer}>
                <div className={styles.notFoundContent}>
                    <h1>Ingen side her</h1>
                    <p><b>DEN NYE DRESSEN</b>,
                        <b> av Rudolf Nilsen</b></p>

                    <p>Det er ikke vår mer enn en gang om året.
                        Det er ikke hvert år en kjøper sig dress!
                        Han står foran speilet og klør sig i håret
                        og trekker i jakken og måler på låret
                        og ymter en tvil om at tøiet er tess.</p>

                    <p>For klæsjøder hør en behandle forsiktig
                        og ikke gi skinn av man liker et plagg!
                        Han syns den er dyr, og han vet ikke rigtig ...
                        Og egentlig er det jo ikke så viktig ...
                        Men hele hans sinn har forlengst firt flagg!</p>

                    <p>Og endelig får han et avslag i prisen
                        som nok er beregnet på prutningsmonn!
                        Da smiler han hemmelig: Heldige grisen! -
                        Og sier sakkyndig til ekspeditrisen:
                        Jeg synes den heller hør pakkes inn sånn!</p>

                    <p>Og hjemme har moren og broren og faren
                        beundrende kringsatt den blendende fyr!
                        - Ja, snittet, sir moren, men kjenn på den varen!
                        - Og slit den med helsa, men pass på å spare'n,
                        sir faren: for jamen er'n temmelig dyr!</p>

                    <p>Så slentret han ut til den hårdeste prøve,
                        for nede i porten står en han har kjær ...
                        Men piken hun flyver i fryd mot sin løve
                        og gir ham et kyss han har trodd han må røve,
                        og hvisker: - Så fryktelig fin som du er!</p >
                </div >
            </div >
        </Layout >
    )
}

export default NotFoundPage;

export async function getStaticProps() {
    const siteConfig = await import(`../data/config.json`);
    const posts = (context => {
        const keys = context.keys();
        const values = keys.map(context);
        const data = keys.map((key, index) => {
            const value = values[index];
            const document = matter(value.default);

            return {
                frontmatter: document.data
            }
        });

        return data;
    })(require.context(`../posts`, true, /\.md$/))

    return {
        props: {
            title: siteConfig.default.title,
        },
    }
}