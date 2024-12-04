"use client";

import { NavBarTypes } from "@/app/_components/NavBar/NavBar.types";
import { useEffect, useState } from "react";
import NavBarMobile from "@/app/_components/NavBar/NavBarMobile/NavBarMobile";
import NavBarDesktop from "@/app/_components/NavBar/NavBarDesktop/NavBarDesktop";
import { MIN_DESKTOP_WIDTH } from "@/app/_lib/constants/constants";
import { usePathname } from "next/navigation";

export default function NavBar({ links }: NavBarTypes.NavBar) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(true);
  const [formattedLinks, setFormattedLinks] = useState(
    findActiveLink(pathname, links)
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(
        typeof window !== "undefined" && window.innerWidth < MIN_DESKTOP_WIDTH
      );
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    findActiveLink(pathname, links);
  }, [links]);

  function findActiveLink(pathname: string, links: NavBarTypes.NavBarLinks[]) {
    if (!pathname || links?.length <= 0) return links;

    return links.map((link) => {
      if (pathname === link.linkURL) return { ...link, isActive: true };
      return link;
    });
  }

  return (
    <>
      {isMobile ? (
        <NavBarMobile links={formattedLinks} />
      ) : (
        <NavBarDesktop links={formattedLinks} />
      )}
    </>
  );
}
