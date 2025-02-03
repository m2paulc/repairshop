import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
export default function NotFound() {
  return (
    <div className="p-4">
      <Link
        className="mb-2 flex w-2/12 h-20 items-end justify-start rounded bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-40 md:w-60 text-white flex flex-row md:flow-col items-center md:justify-center">
          <Image src="/logo.svg" alt="logo" width={96} height={96} />
          <p className="text-lg font-medium ml-4 md:mt-2 text-nowrap md:text-wrap">
            New Bridge Garage
          </p>
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center gap-4 mt-24">
        <h2 className="text-2xl font-bold">Not Found</h2>
        <p className="text-sm text-muted-foreground">
          Could not find requested resource
        </p>
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
