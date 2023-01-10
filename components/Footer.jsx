import css from "../styles/Footer.module.css";
import { UilInstagram, UilGithub, UilFacebook } from "@iconscout/react-unicons";
import logo from "../assets/Logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={css.container}>
      <span>ALL RIGHT RESERVED</span>

      <div className={css.social}>
        <UilInstagram size={45} />
        <UilFacebook size={45} />
        <UilGithub size={45} />
      </div>

      <div className={css.logo}>
        <Image src={logo} alt="logo" width={50} height={50} />
        <span>Foodie</span>
      </div>
    </div>
  );
};

export default Footer;
