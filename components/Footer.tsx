import { RxVercelLogo } from "react-icons/rx";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="mt-16 flex justify-between text-xl">
      {" "}
      <div className="flex items-center p-3 text-sm text-stone-500 [&_span]:mx-2">
        {" "}
        Built with
        <span>
          <RiNextjsFill />
        </span>
        deployed on <span>{<RxVercelLogo />}</span>{" "}
      </div>
      <div className="flex items-center gap-x-3">
        {" "}
        <a
          className="hover:text-stone-500"
          href="https://github.com/elinoza"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />{" "}
        </a>
        <a
          className="hover:text-stone-500"
          href="https://www.linkedin.com/in/hilalsemercioglu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          className="hover:text-stone-500"
          href="https://medium.com/@hilalsem"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMedium />{" "}
        </a>
      </div>
    </footer>
  );
};
export default Footer;
