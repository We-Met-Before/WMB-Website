import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { remark } from "remark";
import html from "remark-html";

export const DIR_PROJECTS = "content/projects";

export async function getPostById(id, source) {
  if(!source) source = DIR_PROJECTS;
  
  const realId = id.replace(/\.md$/, "");
  const fullPath = join(source, `${realId}.md`);

  const { data, content } = matter(
    await fs.promises.readFile(fullPath, "utf8")
  );

  const matterResult = matter(await fs.promises.readFile(fullPath, "utf8"));
    
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);


  return {
    ...matterResult.data,
    title: data.title,
    id: realId,
    content: processedContent.toString()
  };
}

export async function getAllPosts() {
  return [];
}

export async function getAllProjects() {
  const projects = await Promise.all(
    fs.readdirSync(DIR_PROJECTS).map((id) => {
      return getPostById(id, DIR_PROJECTS);
    })
  );
  return projects;
}
