import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiTwotoneMail,
} from "react-icons/ai";
import ThemeChanger from "./theme-changer";
import { FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { VscGithubAlt } from "react-icons/vsc";

const size = 28;
const iconCSS = "transition-colors hover:text-violet-500";

const Icons = () => {
  return (
    <div className={"flex gap-4 justify-center md:justify-start"}>
      <a target="_blank" href="https://www.linkedin.com/in/jensbs/">
        <FaLinkedinIn size={size} className={iconCSS} />
      </a>
      <a target="_blank" href="mailto:jens@bechsor.no">
        <MdAlternateEmail size={size} className={iconCSS} />
      </a>
      <a target="_blank" href="https://github.com/jensbech">
        <VscGithubAlt size={size} className={iconCSS} />
      </a>
      <div>
        <ThemeChanger />
      </div>
    </div>
  );
};

export default Icons;
