import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo2.png";
import facebook_logo from "../../../assets/facebook_logo.png";
import instagram_logo from "../../../assets/instagram_logo.png";
import youtube_logo from "../../../assets/youtube_logo.png";
import twitter_logo from "../../../assets/twitter_logo.png";
import linkedin_logo from "../../../assets/linkedin_logo.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.logo}>
              <img src={logo} width="200px" alt="" />
            </div>
            <div className={styles.social}>
            <a href="https://www.facebook.com/" target="_blank">
              <img src={facebook_logo} width="30px" alt="" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img src={instagram_logo} width="30px" alt="" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img src={youtube_logo} width="30px" alt="" />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <img src={twitter_logo} width="30px" alt="" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <img src={linkedin_logo} width="30px" alt="" />
            </a>
            </div>
          </div>
          <div className={styles.column}>
            Customer service:
            <br />
            <span className={styles.phones}>0810 222 5342</span>
            <br />
            <span className={styles.hours}>
              Mon-Fri from 09 am to 6 pm
              <br />
              Sat from 09 am to 1 pm
            </span>
          </div>
          <div className={styles.column}>
            Sales:
            <br />
            <span className={styles.phones}>0810 333 2137</span>
            <br />
            <span className={styles.hours}>
              Mon-Fri from 09 am to 8 pm
              <br />
              Sat from 09 am to 7 pm
            </span>
          </div>
          <div className={styles.column}>
            Corporate Sales:
            <br />
            <span className={styles.phones}>0810 555 5724</span>
            <br />
            <span className={styles.hours}>Mon-Fri from 09 am to 6 pm</span>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <span className={styles.titles}>Subscribe to our newsletter:</span>
            <br />
            <input
              type="text"
              // value={name}
              className={styles.input}
              placeholder="Enter your email"
              // onChange={(e) => handleInputChange(e)}
            />
            {/* <button className={styles.go} type='submit' onClick={(e) => handleSubmit(e)}>SUBSCRIBE</button> */}
            <button className={styles.go} type="submit">
              SUBSCRIBE
            </button>
          </div>
          <div className={styles.column}>
            <span className={styles.titles}>About</span>
            <br />
            <Link to="/about">
            <span className={styles.text}>SmartTech</span>
            </Link>
            <br />
            <Link to="/terms">
            <span className={styles.text}>Terms & Conditions</span>
            </Link>
            <br />
            <Link to="/sustainability">
            <span className={styles.text}>Sustainability</span>
            </Link>
          </div>
          <div className={styles.column}>
            <span className={styles.titles}>My account</span>
            <br />
            <span className={styles.text}>Overview</span>
            <br />
            <span className={styles.text}>Cart</span>
            <br />
            <span className={styles.text}>Favourites</span>
          </div>
          <div className={styles.column}>
            <span className={styles.titles}>Help</span>
            <br />
            <Link to="/faq">
            <span className={styles.text}>Frequently asked questions</span>
            </Link>
            <br />
            <Link to="/contact">
            <span className={styles.text}>Contact us</span>
            </Link>
            <br />
            <Link to="/careers">
            <span className={styles.text}>Work with us</span>
            </Link>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.legal}>
            Copyright © 2022 SmartTech | All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
}
