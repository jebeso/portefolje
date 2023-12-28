import Link from "next/link";
import { header } from '../styles/Header.module.scss'

const Header = (props) => {

  return (
    <header className={header}>
      <h1>
        <Link href={{ pathname: `/` }} passHref>
          {props.siteTitle}
        </Link>
      </h1>
    </header>
  );
}

export default Header;
