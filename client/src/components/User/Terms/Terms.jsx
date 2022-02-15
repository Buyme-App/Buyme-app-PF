import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Terms.module.css";

export default function Terms() {
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <div className={styles.title}>Terms & Conditions</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel metus quam. Ut sed consequat sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc auctor sapien ut ullamcorper feugiat. Donec augue libero, blandit sed ligula in, auctor tristique leo. Quisque eget tellus aliquam, tincidunt lectus ut, volutpat elit. Nulla facilisi. Quisque tempor feugiat lacus sed molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non dui dictum neque sagittis egestas dignissim nec nisl.</p>
        <p>Ut in varius ante. Curabitur malesuada neque in erat molestie euismod. Donec semper vulputate diam, vel porta nisi ultrices vitae. Quisque aliquam nunc et enim molestie, in dignissim turpis fermentum. Vestibulum mattis bibendum purus, in maximus mauris lacinia non. In eu lacus libero. Praesent at mauris varius, porta felis rutrum, facilisis quam. Duis scelerisque interdum ante, eget mattis nulla sodales ut.</p>
        <p>Nunc sit amet vehicula orci. Sed vel sagittis erat. Vestibulum accumsan velit at justo accumsan congue. Nunc lacinia ut nunc eget egestas. Proin semper arcu nec libero efficitur efficitur. Maecenas in dui lobortis, suscipit felis eget, tristique justo. Maecenas mattis vel dui quis sollicitudin.</p>
        <p>Nulla vitae mollis ex. Nullam commodo mauris nec lectus tincidunt semper. Donec id vestibulum ligula. Fusce at maximus neque, ac convallis purus. Sed felis lectus, elementum eu placerat quis, rutrum non magna. Praesent viverra dui dolor, at volutpat eros sagittis in. Aliquam pretium, orci a interdum vehicula, diam ligula sagittis nisl, eu ultrices libero sapien quis nisl. Morbi dolor velit, vulputate eget egestas id, consequat eget ante. Cras eget posuere arcu. Phasellus rhoncus volutpat tellus, ac blandit metus egestas sed. Mauris ut congue nunc, ac auctor tellus. Phasellus eleifend ultricies felis sit amet sodales. Mauris tincidunt purus at finibus tincidunt.</p>
      </div>
      <Footer />
    </div>
  );
}
