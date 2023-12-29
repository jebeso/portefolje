import React from 'react';
import Link from 'next/link';
import Image from 'next/future/image';
import BlogDate from './BlogDate';
import styles from "../styles/BlogList.module.scss"

const BannerImage = React.forwardRef(({ onClick, href, blog }, ref) =>
  <a href={href} onClick={onClick} ref={ref} className="bannerImage">
    <Image
      width={800}
      height={300}
      style={{ height: 'auto' }}
      alt={`${blog.frontmatter.title} banner`}
      src={`${blog.frontmatter.banner}`}
      priority
    />
  </a>
)

BannerImage.displayName = 'BannerImage'

const BlogList = ({ allBlogs }) => {
  return (
    <>
      {!allBlogs ?
        <div className={styles.blogListContainer}>
          <h3>Apparently there&apos;s nothing to see here...</h3>
        </div> : (
          <>
            {allBlogs.map((blog) => (
              !blog.frontmatter.ref && !/\.draft/.test(blog.slug) &&
              <div key={blog.slug} className={styles.blogPostContainer}>
                <BlogDate isList date={blog.frontmatter.date} />
                <h1>
                  <Link href={{ pathname: `/blog/${blog.slug}` }} passHref>
                    {blog.frontmatter.title}
                  </Link>
                </h1>
              </div>
            ))}
          </>
        )}
    </>
  )
}
export default BlogList
