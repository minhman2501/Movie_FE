import clsx from "clsx";
import React from "react";
import styles from "./css/Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={clsx("section", styles.footer)}>
      <div className="container px-0">
        <div className={clsx(styles["footer-nav__wrapper"])}>
          <div className="row flex-column flex-md-row">
            <div
              className={clsx(
                "col col-md-4 text-md-left",
                styles["footer-col"]
              )}
            >
              <div className={clsx(styles["footer-title"])}>Information</div>
              <a href="/" className={clsx("link", styles["footer-link"])}>
                Our Group
              </a>
              <a href="/" className={clsx("link", styles["footer-link"])}>
                Our Report
              </a>
            </div>
            <div className={clsx("col col-md-4", styles["footer-col"])}>
              <div className={clsx(styles["footer-title"])}>Discover</div>
              <a href="/" className={clsx("link", styles["footer-link"])}>
                All movies
              </a>
              <a href="/" className={clsx("link", styles["footer-link"])}>
                Category
              </a>
              <a href="/" className={clsx("link", styles["footer-link"])}>
                My List
              </a>
            </div>
            <div className={clsx("col col-md-4", styles["footer-col"])}>
              <div className={clsx(styles["footer-title"])}>Information</div>
              <a
                href="/"
                className={clsx("link", styles["footer-social-link"])}
              >
                <div
                  className={clsx(
                    styles["footer-social-title"],
                    styles["icon"]
                  )}
                >
                  <i class="fa-brands fa-square-facebook"></i>
                </div>
                <div className={clsx(styles["footer-social-title"])}>
                  Facebook
                </div>
              </a>
              <a
                href="/"
                className={clsx("link", styles["footer-social-link"])}
              >
                <div
                  className={clsx(
                    styles["footer-social-title"],
                    styles["icon"]
                  )}
                >
                  <i class="fa-brands fa-instagram"></i>
                </div>
                <div className={clsx(styles["footer-social-title"])}>
                  Instagram
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class={clsx(styles["bottom-footer"])}>
        <div class="container  px-0 ">
          <div class={clsx(styles["bottom-footer-paragraph"])}>
            Copyright © Movie Reviews
          </div>
          <div class={clsx(styles["bottom-footer-paragraph"])}>
            Template design by
            <a href="" class={clsx("link", styles["bottom-footer-link"])}>
              Studio Corvus
            </a>
            Powerd by
            <a href="" class={clsx("link", styles["bottom-footer-link"])}>
              Webflow
            </a>
          </div>
          <div class={clsx(styles["bottom-footer-paragraph"])}>
            <a href="" class={clsx("link", styles["bottom-footer-link"])}>
              Image Licensing Info
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
