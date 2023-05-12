import Link from "next/link";
import { FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative bottom-4 mt-auto z-10 flex justify-center gap-4">
      <div className="flex items-center">
        <h5 className="text-sm font-light">✲ Made by Harv.</h5>
      </div>
      <ul className="flex items-center gap-2 text-sm">
        <li>
          <Link href="https://twitter.com/haroldjeshua">
            <FiTwitter />
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/haroldjeshua">
            <FiInstagram />
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/haroldjeshua">
            <FiLinkedin />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
