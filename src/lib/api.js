import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { remark } from "remark";
import html from "remark-html";

export const DIR_PROJECTS = "_content/projects";
export const DIR_PEOPLE = "_content/people";
export const DIR_SERVICES = "_content/services";


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

export async function getAllProjects() {
  const projects = await Promise.all(
    fs.readdirSync(DIR_PROJECTS).map((id) => {
      return getPostById(id, DIR_PROJECTS);
    })
  );
  return projects;
}
export async function getAllServices() {
  const files = await fs.promises.readdir(DIR_SERVICES);
  const services = await Promise.all(
    files.map((id) => getPostById(id, DIR_SERVICES))
  );
  return services;
}

export async function getAllPeople() {
  return await Promise.all(
    fs.readdirSync(DIR_PEOPLE).map((id) => {
      return getPostById(id, DIR_PEOPLE);
    })
  );
}