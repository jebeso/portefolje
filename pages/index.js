import matter from 'gray-matter'
import Layout from '../components/Layout'
import BlogList from '../components/BlogList'
import { indexContainer } from '../styles/Index.module.scss'

const Index = props =>
  <Layout
    pathname="/"
    siteTitle={props.title}
    siteDescription={props.siteDescription}
    social={props?.social}
  >
    <section className={indexContainer}>
      <BlogList allBlogs={props.allBlogs} siteTitle={props.title}/>
    </section>
  </Layout>


export default Index

export async function getStaticProps() {
  const siteConfig = await import(`../data/config.json`)
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

  })(require.context(`../posts`, true, /\.md$/))

  return {
    props: {
      allBlogs: posts.sort((a, b) => a.frontmatter.date < b.frontmatter.date ? 1 : -1),
      title: siteConfig.default.title,
      siteDescription: siteConfig.default.siteDescription,
      social: siteConfig.default.social
    },
  }
}
