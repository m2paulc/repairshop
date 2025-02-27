"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  Cog8ToothIcon,
  TruckIcon,
  AdjustmentsHorizontalIcon,
  CogIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Customers", href: "/customers", icon: UserGroupIcon },
  {
    name: "Invoices",
    href: "/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Vehicles", href: "/vehicles", icon: TruckIcon },
  { name: "Parts Store", href: "/parts-store", icon: CogIcon },
  { name: "Labor Category", href: "/labor-description", icon: TagIcon },
  {
    name: "Labor Setting",
    href: "/labor-setting",
    icon: AdjustmentsHorizontalIcon,
  },
  { name: "Admin", href: "/admin", icon: Cog8ToothIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              { "bg-sky-100 text-blue-600": pathname === link.href }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
