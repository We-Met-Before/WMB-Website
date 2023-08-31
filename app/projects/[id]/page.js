import {
  getPostById,
  getAllPosts,
  getAllProjects,
  DIR_PROJECTS,
} from "@/lib/api";
import Image from "next/image";
import "src/styles/style.scss";
import { Flip } from "gsap/Flip";
import HeroProject from "../../../src/components/HeroProject/HeroProject";


// Generate the post, note that this is a "react server component"! it is
// allowed to be async
export default async function Post({ params: { id } }) {
  const { content, title, date, image } = await getPostById(id, DIR_PROJECTS);
  console.log(image);
  
  return (
    <>
      <HeroProject image={image} />
      <article>
        <h1>{title}</h1>
        <h4>{date}</h4>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
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
