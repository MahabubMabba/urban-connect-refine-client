
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#142B4A]">
          Urban<span className="text-[#2563EB]">Connect</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link href="/upcoming-events" className="hover:text-blue-600">
            Upcoming Events
          </Link>

          <Link href="/dashboard" className="hover:text-blue-600">
            Dashboard
          </Link>
        </div>

        {/* Login Button */}
        <Link href="/login">
          <Button className="bg-[#142B4A] hover:bg-[#2563EB]">
            Login
          </Button>
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
