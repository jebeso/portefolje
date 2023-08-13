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
            className="dark:hover:text-gray-300 hover:text-gray-600 transition flex items-center"
          >
            <BiArrowBack className="mr-2" />
            <div className="flex-grow">Back</div>
          </Link>
          <div className="pt-1 pr-3">
            <ThemeChanger />
          </div>
        </div>
      </h2>
    </>
  );
};

export default SlugHeader;
