import { DIR_PROJECTS, getAllProjects, getPostById } from "@/lib/api";
import "src/styles/style.scss";
import HeroProject from "../../../components/HeroProject/HeroProject";
import Footer from "../../../components/Footer/Footer";
import Image from "next/image";
import styles from "./page.module.scss";

// Generate the post, note that this is a "react server component"! it is
// allowed to be async
export default async function Post({ params: { id } }) {
  const { content, title, date, image } = await getPostById(id, DIR_PROJECTS);
  console.log(image);

  return (
    <>
      <HeroProject image={image} alt={title} />

      <header className={styles.header}>
        <div className="container">
          <h1 className="h3 text--uppercase">
            {title} - {new Date(date).getFullYear()}
          </h1>
        </div>
      </header>
      <div className="container">
        <div className={styles.container}>
          <aside>
            <h4>About the project</h4>
          </aside>

          <article
            className="article"
            dangerouslySetInnerHTML={{ __html: content }}
          ></article>
        </div>
      </div>
      <HeroProject image={image} alt={title} />
      <Footer />
    </>
  );
}

// This function can statically allow nextjs to find all the posts that you
// have made, and statically generate them
export async function generateStaticParams() {
  const posts = await getAllProjects();

  return posts.map((post) => ({
    id: post.id,
  }));
}

// Set the title of the page to be the post title, note that we no longer use
// e.g. next/head in app dir, and this can be async just like the server
// component
export async function generateMetadata({ params: { id } }) {
  const { title } = await getPostById(id);
  return {
    title,
  };
}