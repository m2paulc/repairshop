import Link from "next/link";
import NavLinks from "@/app/ui/nav-links";
import Image from "next/image";
import { User } from "@/app/ui/user";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-40 md:w-60 text-white flex flex-row md:flow-col items-center md:justify-center">
          <Image src="/logo.svg" alt="logo" width={96} height={96} />
          <p className="text-lg font-medium ml-4 md:mt-2 text-nowrap md:text-wrap">
            New Bridge Garage
          </p>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded bg-gray-50 md:block"></div>
        <User />
      </div>
    </div>
  );
}
