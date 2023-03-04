import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

const size = 30;
const iconCSS =
  "transition-colors duration-200 ease-in-out text-violet-500 hover:text-black";

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
    </div>
  );
};

export default Icons;
