import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

const Header = () => {
  return (
    <h2 className="text-xl md:text-2xl tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link
        href="/"
        className="hover:text-violet-600 transition decoration-violet-800 flex items-center"
      >
        <BiArrowBack className="mr-2" />
        Take me home
      </Link>
      <div className="text-violet-100 select-none pl-8">country roads</div>
    </h2>
  );
};

export default Header;
