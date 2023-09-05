import AboutContent from "@/components/about/aboutContent";
import "@/legacy/scss/main.scss";
import { getAllPeople } from "../../lib/api";

export const metadata = {
  title: "We Met Before - Digital Design & Development Studio",
  description:
    "A community of freelance creatives, co-creating new realities from infinite possibilities. We focus on branding, web-design and development.",
  openGraph: {
    title: "We Met Before - Digital Design & Development Studio",
    description:
      "A community of freelance creatives, co-creating new realities from infinite possibilities. We focus on branding, web-design and development.",
    type: "website",
  },
};

export default async function about() {
  return (
    <>
      <AboutContent portfolioItems={await getAllPeople()} />
    </>
  );
}
