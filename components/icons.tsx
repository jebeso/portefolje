import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

const size = 25;
const hoverCSS =
  "transition-colors duration-200 hover:scale-125 transition duration-150 ease-in-out text-violet-500";

const Icons = () => {
  return (
    <div className={"flex gap-2 justify-center md:justify-start"}>
      <a target="_blank" href="https://www.linkedin.com/in/jensbs/">
        <AiOutlineLinkedin size={size} className={hoverCSS}></AiOutlineLinkedin>
      </a>
      <a target="_blank" href="mailto:jens@bechsor.no">
        <AiOutlineMail size={size} className={hoverCSS}></AiOutlineMail>
      </a>
      <a target="_blank" href="https://github.com/jensbech">
        <FiGithub size={size} className={hoverCSS}></FiGithub>
      </a>
    </div>
  );
};

export default Icons;
