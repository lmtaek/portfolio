import type { Metadata } from "next";
import "@/app/_styles/styles.scss";
import { Roboto_Mono } from "next/font/google";
import NavBar from "@/app/_components/NavBar/NavBar";
import { NAV_BAR_LINKS } from "@/app/_lib/constants/navbar";
import Footer from "@/app/_components/Footer/Footer";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: ["200", "400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Lauren's Portfolio",
  description: "Lauren Taekman's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={robotoMono.variable}>
      <body>
        <header>
          <NavBar links={NAV_BAR_LINKS} />
        </header>
        {children}
        <Footer />
        {/* <footer>Here's my footer</footer> */}
      </body>
    </html>
  );
}
