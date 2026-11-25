
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#142B4A] text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-2xl font-bold">
              Urban<span className="text-orange-400">Connect</span>
            </h2>

            <p className="text-gray-300 text-sm mt-4 leading-6">
              Bringing people together to create positive changes
              in our communities through social events.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>

            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <Link href="/">Home</Link>
              <Link href="/upcoming-events">Upcoming Events</Link>
              <Link href="/dashboard">Dashboard</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300 text-sm">
              Have questions? Get in touch with us.
            </p>
          </div>

        </div>

        <div className="border-t border-gray-600 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-300">
            © 2026 Urban Connect. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
