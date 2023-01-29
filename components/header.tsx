import Link from "next/link";
import { BiArrowBack } from "react-icons/bi"

const Header = () => {
  return (
    <h2 className="text-xl md:text-2xl tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline decoration-violet-500 flex items-center">
        <BiArrowBack className="mr-2"/>
        Take me home!
      </Link>
    </h2>
  );
};

export default Header;
