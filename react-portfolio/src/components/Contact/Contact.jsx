import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:anushka11072003@email.com">anushka11072003@email.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/anushka-gupta-074a4222a">linkedin.com/anushka-gupta-074a4222a</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/AnUsHkAIT">github.com/AnUsHkAIT</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/wordpress.png")} alt="Wordpress icon" style={{ width: '30px', marginLeft: '5px' }} />
          <a href="https://anushka593.wordpress.com">wordpress.com/anushka593</a>
        </li>
      </ul>
    </footer>
  );
};
