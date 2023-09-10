"use client";

import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className="backdrop--gradient"></div>
        <h2 className="text--center">(4) Ways to get in touch</h2>

        <ul className={styles.list}>
          <Link href="mailto:wemetbefore@info.com" className={"card cursor-trigger--external"}>
            <span className={"badge"}>Best One</span>

            <div>
              <h4>Email</h4>
              <p className="d--none--sm text--light">wemetbefore@info.com</p>
              <small className="d--sm d--none text--light">wemetbefore@info.com</small>
            </div>
          </Link>

          <Link href="https://www.instagram.com/wemetbefore.studio/" className={"card cursor-trigger--external"} target="_blank">
            <span className={"badge"}>Most inspiring</span>

            <div>
              <h4>Instagram</h4>
              <p className="d--none--sm text--light">@wemetbefore.studio</p>
              <small className="d--sm d--none text--light">@wemetbefore.studio</small>
            </div>
          </Link>

          <Link href="https://nl.linkedin.com/company/wemetbefore" className={"card cursor-trigger--external"} target="_blank">
            <span className={"badge"}>Super formal</span>

            <div>
              <h4>LinkedIn</h4>
              <p className="d--none--sm text--light">@wemetbefore.studio</p>
              <small className="d--sm d--none text--light">@wemetbefore.studio</small>
            </div>
          </Link>

          <Link href="mailto:wemetbefore@info.com" className={"card cursor-trigger--external"} target="_blank">
            <span className={"badge"}>Random updates (nog geen link)</span>

            <div>
              <h4>X</h4>
              <p className="d--none--sm text--light">@wemetbefore.studio</p>
              <small className="d--sm d--none text--light">@wemetbefore.studio</small>
            </div>
          </Link>
        </ul>
      </div>
    </footer>
  );
}
