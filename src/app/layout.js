import HeroProject from "../components/HeroProject/HeroProject";
import { ExtLoaderProvider } from "../root/loader";
import { ProjectProvider } from "../root/project";
// import "src/styles/style.scss";
import { ExternalScripts } from "../components/externalScripts/externalScripts";
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ProjectProvider>
        <ExtLoaderProvider>
          <body>
            <HeroProject id={"new"} />
            <main>{children}</main>
          </body>
        </ExtLoaderProvider>
      </ProjectProvider>
    </html>
  );
}
