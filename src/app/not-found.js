import Link from "next/link";
import "src/styles/style.scss";
import styles from "./not-found.module.scss";

export default async function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h2>Oops....</h2>
      <p>Could not find requested resource</p>
      
        <Link href="/" className="button">
          <span className="button__label">Take me back</span>
        </Link>
      
    </div>
  );
}
