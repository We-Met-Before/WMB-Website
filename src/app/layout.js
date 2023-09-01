import Script from "next/script";
import HeroProject from "../components/HeroProject/HeroProject";
import { ProjectProvider } from "../root/project";
// import "src/styles/style.scss";

export const metadata = {
  title: "Home",
  description: "Generated by Next.js",
  openGraph: {
    title: "Blog",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script src="/about/packages/ScrollTrigger.min.js" />
      <Script src="/about/packages/SplitText.min.js" />
      <ProjectProvider>
        <body>
          <HeroProject id={"new"} />
          <main>{children}</main>
        </body>
      </ProjectProvider>
    </html>
  );
}
