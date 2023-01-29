import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const size = 30;
const hoverCSS = "transition-colors duration-200 hover:text-violet-800";
const Icons = () => {
  return (
    <div className={"flex gap-2 justify-center md:justify-start"}>
      <a target="_blank" href="https://www.linkedin.com/in/jensbs/">
        <AiFillLinkedin size={size} className={hoverCSS}></AiFillLinkedin>
      </a>
      <a target="_blank" href="mailto:jens@bechsor.no">
        <AiFillMail size={size} className={hoverCSS}></AiFillMail>
      </a>
      <a target="_blank" href="https://github.com/jensbech">
        <AiFillGithub size={size} className={hoverCSS}></AiFillGithub>
      </a>
    </div>
  );
};

export default Icons;
