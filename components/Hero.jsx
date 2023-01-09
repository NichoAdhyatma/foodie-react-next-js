import React from "react";
import css from "../styles/Hero.module.css";
import Cherry from "../assets/Cherry.png";
import Image from "next/image";
import HeroImage from "../assets/HeroImage.png";
import { UilPhone } from "@iconscout/react-unicons";
import Pizza1 from "../assets/p1.jpg";

const Hero = () => {
  return (
    <div className={css.container}>
      {/* Left Side */}
      <div className={css.left}>
        <div className={css.cherryDiv}>
          <span>More than Faster</span>
          <Image src={Cherry} alt="cherry" width={40} height={25} />
        </div>
        <div className={css.heroText}>
          <span>Be The Fastest</span>
          <span>In Delivering</span>
          <span>
            Your <span style={{ color: "var(--themeRed)" }}>Fast Food</span>
          </span>
        </div>

        <span className={css.miniText}>
          Misi kami untuk menyajikan makanan cepat saji terenak di dunia , pesan
          sekarang juga , pengiriman secepat kilat
        </span>

        <button className={`btn ${css.btn}`}>Get Started</button>
      </div>

      {/* Right Side */}
      <div className={css.right}>
        <div className={css.imageContainer}>
          <Image src={HeroImage} alt="hero-img" layout="intrinsic" />
        </div>

        <div className={css.contactUs}>
          <span>Kontak kami</span>
          <div>
            <UilPhone color="white" />
          </div>
        </div>

        <div className={css.pizza}>
          <div>
            <Image src={Pizza1} alt="pizza" objectFit="cover" layout="intrinsic"/>
          </div>

          <div className={css.details}>
            <span>Italian Pizza</span>
            <span><span style={{  color: "var(--themeRed)" }}>Rp.</span>  25.000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
