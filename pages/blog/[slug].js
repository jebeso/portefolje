import Head from 'next/head';
import { useEffect } from 'react'
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';
import BlogDate from '../../components/BlogDate';
import { renderers } from '../../util/renderers';
import Prism from 'prismjs';
import styles from '../../styles/Slug.module.scss';

const glob = require('glob')

const BlogTemplate = (props) => {
    useEffect(() => {
        Prism?.highlightAll()
    }, [])

    return (
        <>
            <Head>
                <title>{props.frontmatter.title}</title>
            </Head>
            <Layout
                siteTitle={props.siteTitle}
                siteDescription={props.siteDescription}
                social={props.social}
                postData={props.frontmatter}
            >
                <article className={styles.blogPage} id="blogArticle">
                    <h1 className={styles.postHeader}>{props.frontmatter.title}</h1>
                    <BlogDate date={props.frontmatter.date} />
                    <div>
                        <ReactMarkdown components={renderers} children={props.markdownBody} />
                    </div>
                </article>
                <hr />
            </Layout>
        </>
    )
}

export const getStaticProps = async ({ ...ctx }) => {
    const { slug } = ctx?.params;
    const content = await import(`../../posts/${slug}.md`)
    const config = await import('../../data/config.json')
    const data = matter(content.default)

    const posts = (context => {
        const keys = context.keys()
        const values = keys.map(context)
        const data = keys.map((key, index) => {
            const slug = key.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.')
            const value = values[index]
            const document = matter(value.default)

            return {
                frontmatter: document.data,
                markdownBody: document.content,
                slug
            }
        })

        return data

    })(require.context('../../posts', true, /\.md$/))

    return {
        props: {
            siteTitle: config.title,
            siteDescription: config.siteDescription,
            frontmatter: data.data,
            markdownBody: data.content,
            social: config.social
        }
    }
}

export const getStaticPaths = async () => {
    const blogs = glob.sync('posts/*.md')
    const blogSlugs = blogs.map(file => file.split('/')[1].replace(/ /g, '-').slice(0, -3).trim())
    const paths = blogSlugs.map(slug => `/blog/${slug}`)
    return { paths, fallback: false }
}

export default BlogTemplate