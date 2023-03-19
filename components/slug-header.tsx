import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import ThemeChanger from "./theme-changer";

const SlugHeader = () => {
  return (
    <>
      <h2 className="text-xl md:text-2xl tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="dark:hover:text-violet-300 hover:text-violet-600 transition decoration-violet-800 flex items-center"
          >
            <BiArrowBack className="mr-2" />
            <div className="flex-grow">Take me home</div>
          </Link>
          <div className="pt-1 pr-3">
            <ThemeChanger />
          </div>
        </div>
        <div className="dark:text-gray-900 text-violet-100 select-none pl-8">
          country roads
        </div>
      </h2>
    </>
  );
};

export default SlugHeader;
