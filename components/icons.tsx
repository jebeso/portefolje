import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import ThemeChanger from "./theme-changer";

const size = 28;
const iconCSS = "transition-colors hover:text-violet-500";

const Icons = () => {
  return (
    <div className={"flex gap-4 justify-center md:justify-start"}>
      <a target="_blank" href="https://www.linkedin.com/in/jensbs/">
        <AiOutlineLinkedin size={size} className={iconCSS}></AiOutlineLinkedin>
      </a>
      <a target="_blank" href="mailto:jens@bechsor.no">
        <AiOutlineMail size={size} className={iconCSS}></AiOutlineMail>
      </a>
      <a target="_blank" href="https://github.com/jensbech">
        <FiGithub size={size} className={iconCSS}></FiGithub>
      </a>
      <div className="">
        <ThemeChanger />
      </div>
    </div>
  );
};

export default Icons;
