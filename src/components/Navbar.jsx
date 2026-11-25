
"use client";

import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/login");
    router.refresh();
  };

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link href="/" className="text-2xl font-bold text-[#142B4A]">
          Urban<span className="text-[#2563EB]">Connect</span>
        </Link>

        {session && (
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="/">Home</Link>
            <Link href="/upcoming-events">Upcoming Events</Link>
            <Link href="/dashboard">Dashboard</Link>
          </div>
        )}

        {!isPending && (
          session ? (
            <div className="flex items-center gap-3">
              <span className="hidden sm:block text-sm text-gray-600">
                {session.user.name}
              </span>

              <Button onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <Link href="/login">
              <Button className="bg-[#142B4A]">
                Login
              </Button>
            </Link>
          )
        )}

      </div>
    </nav>
  );
}
