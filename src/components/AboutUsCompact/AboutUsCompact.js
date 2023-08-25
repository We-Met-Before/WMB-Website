import Image from "next/image";
import Link from "next/link";
import styles from "./AboutUsCompact.module.scss";

export default function AboutUsCompact() {
  return (
    <section>
      <div className="container">
        <Link className={styles.wrapper} href="/about">
          <ul className={styles.list}>
            <li className={styles.list__item}>
              <Image
                className={styles.list_img}
                src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2523&q=80"
                width={60}
                height={60}
              />
            </li>
            <li className={styles.list__item}>
              <Image
                className={styles.list_img}
                src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2523&q=80"
                width={60}
                height={60}
              />
            </li>
            <li className={styles.list__item}>
              <Image
                className={styles.list_img}
                src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2523&q=80"
                width={60}
                height={60}
              />
            </li>
          </ul>
          <p className="list--avatars__description text--light">
            Read <br /> about us +8;
          </p>
        </Link>
      </div>
    </section>
  );
}
