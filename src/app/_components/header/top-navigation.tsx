"use client";

import { NavigationMenuItem } from "@/types/navigation-menu-items";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems: NavigationMenuItem[] = [
  { title: "صفحه اصلی", href: "/" },
  { title: "دوره های ری اکت و نکست", href: "/courses" },
  { title: "مطالب و مقالات", href: "/blog" },
];
export const TopNavigation: React.FC = () => {
  const pathname = usePathname();
  return (
    <>
      <ul className=" flex gap-x-8 mr-12 ">
        {menuItems.map((items) => {
          const isActive = pathname === items.href;
          return (
            <li key={`navigation-${items.href}`}>
              <Link
                href={items.href}
                className={`dark:hover:text-primary transition-colors pb-2 ${
                  isActive && "border-b-2 dark:text-primary border-primary/30"
                }`}
              >
                {items.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
