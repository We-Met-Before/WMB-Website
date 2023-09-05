import HeroProject from "../components/HeroProject/HeroProject";
import { ExtLoaderProvider } from "../root/loader";
import { ProjectProvider } from "../root/project";
// import "src/styles/style.scss";
import ExternalScripts  from "../components/externalScripts/externalScripts";

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
            <ExternalScripts />
            <main>{children}</main>
          </body>
        </ExtLoaderProvider>
      </ProjectProvider>
    </html>
  );
}


// useEffect(() => {
  //   if (hasScrollSmooth) {
  //     gsap.registerPlugin(ScrollSmoother);
  //     ScrollSmoother.create({
  //       smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  //       effects: true, // looks for data-speed and data-lag attributes on elements
  //       smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  //     });
  //   }
  // }, [hasScrollSmooth]);