import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-slate-500">
      <h1 className="text-3xl font-bold text-neutral-100">Hi!</h1>
      <div className="flex mt-8 gap-4">
        <Link href="/sign-in">
          <Button>Sign In</Button>
        </Link>

        <Link href="/sign-up">
          <Button>Sign Up</Button>
        </Link>
      </div>
    </div>
  );
}
