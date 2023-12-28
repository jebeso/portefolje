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
                    <h1>404</h1>
                    {/* <div className={styles.notFoundImage}>
                        <Image
                            src={xfiles}
                            alt="Page not found"
                            width={500}
                            height={285}
                            layout="fixed"
                        />
                    </div> */}
                </div>

            </div>
        </Layout>
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