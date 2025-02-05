import { Button } from "@/components/ui/button";
import {
  SignedOut,
  SignInButton,
  ClerkLoaded,
  ClerkLoading,
} from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function SignOutPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-screen gap-8 my-8 mx-4 lg:my-0 lg:mx-auto">
      <div className="h-full lg:flex flex-col items-center justify-center p-4">
        <h1 className="font-bold text-3xl text-center p-4">Signed Out!</h1>
        <p className="p-4 text-center">
          Sign in with your account to get back to your dashboard.
        </p>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignedOut />
            <Button asChild>
              <SignInButton />
            </Button>
          </ClerkLoaded>

          <ClerkLoading>
            <Loader2 className="animate-spin" />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full hidden bg-blue-700 lg:flex items-center justify-center">
        <Image
          src="/logo.svg"
          alt="logo"
          width={300}
          height={300}
          className="bg-blue-700 text-white fill-current"
        />
      </div>
    </div>
  );
}
