import Header from "./Header";
import Footer from './Footer'
import Meta from './Meta'
import { layout, content } from '../styles/Layout.module.scss'

const Layout = (props) =>
  <section className={layout} >
    <Meta
      siteTitle={props.siteTitle}
      siteDescription={props.siteDescription}
      postData={props.postData}
    />

    <div className={content}>
      <Header siteTitle={props.siteTitle} />

      {props.children}
    </div>

    {!props.noFooter && <Footer siteDescription={props.siteDescription} social={props.social} />}
  </section>

export default Layout;