import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Wato Elle</h1>
        <p className={styles.description}>
          I'm a passionate software engineer and recent graduate with expertise in 
          React.js, JavaScript, Python, and Flask. I enjoy building interactive web 
          applications and solving real-world problems through code. 
          Check out my work and let's connect!
        </p>
        <a href="mailto:watoelle@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
