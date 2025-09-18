import "./globals.scss";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { navMenus } from "@/data/navMenus";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "arial",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Fira Sans",
    "Droid Sans",
  ],
});
export const metadata: Metadata = {
  title: "Sabbir Bin Abbas",
  description:
    "Sabbir Bin Abbas is a proficient Software Engineer and Full Stack Developer from Bangladesh, skilled in front-end and back-end development using modern tech stacks.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    {
      url: "/logo.svg",
      rel: "icon",
      type: "image/svg+xml",
    },
    {
      url: "/logo.svg",
      rel: "apple-touch-icon",
      type: "image/svg+xml",
    },
    {
      url: "/logo.svg",
      rel: "shortcut icon",
      type: "image/svg+xml",
    },
  ],
  keywords: [
    "sabbir bin abbas",
    "sabbirba.com",
    "sabbirba.pages.dev",
    "sabbir",
    "sabbirba",
    "sabbir-bin-abbas",
    "sabbir b a",
    "lamppost.org.bd",
    "lamppost org bd",
    "full stack developer",
    "bangladeshi developer",
    "sabbirba github",
  ],
};
const GoogleAnalytics = dynamic(
  () => import("@/components/common/GoogleAnalytics"),
  {
    ssr: false,
  },
);
const WebVitals = dynamic(() => import("@/components/common/WebVitals"), {
  ssr: false,
});
const FloatingNavbar = dynamic(
  () => import("@/components/navbar/FloatingNavbar"),
);
const ScrollToTop = dynamic(() => import("@/components/common/ScrollToTop"));
const UnregisterSW = dynamic(
  () => import("@/components/common/UnregisterServiceWorker"),
  {
    ssr: false,
  },
);
const isDebug = process.env.NODE_ENV === "development";
const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en" className={poppins.className}>
      {isDebug ? null : <GoogleAnalytics />}

      <body className={isDebug ? "debug-screens" : ""}>
        {}
        <UnregisterSW />
        {isDebug ? <WebVitals /> : null}
        <FloatingNavbar className="app_nav" navItems={navMenus} />
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
};
export default RootLayout;
