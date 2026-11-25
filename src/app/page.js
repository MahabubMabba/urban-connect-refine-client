
import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="bg-[#F4F6FA]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div>
              <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-2 rounded-full mb-6">
                Together for a Better Community
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#142B4A] leading-tight">
                Make a Difference
                <span className="text-[#2563EB]"> Together.</span>
              </h1>

              <p className="text-gray-600 text-base md:text-lg leading-8 mt-6 max-w-lg">
                Connect with people, join meaningful events, and take action
                to create positive changes in your community.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/upcoming-events"
                  className="bg-[#2563EB] text-white px-7 py-3 rounded-lg font-medium hover:bg-[#142B4A] transition"
                >
                  Explore Events
                </Link>

                <Link
                  href="/register"
                  className="border border-[#142B4A] text-[#142B4A] px-7 py-3 rounded-lg font-medium hover:bg-[#142B4A] hover:text-white transition"
                >
                  Get Started
                </Link>
              </div>

              <div className="flex gap-8 mt-12">
                <div>
                  <h3 className="text-2xl font-bold text-[#142B4A]">100+</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Community Members
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#142B4A]">20+</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Events Organized
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#142B4A]">10+</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Communities
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#142B4A] rounded-3xl p-8 md:p-10 text-white min-h-[350px] flex flex-col justify-between">
                <div>
                  <span className="text-orange-400 text-sm font-semibold">
                    BE PART OF THE CHANGE
                  </span>

                  <h2 className="text-3xl md:text-4xl font-bold mt-5 leading-snug">
                    Small Actions.
                    <br />
                    Big Impact.
                  </h2>

                  <p className="text-gray-300 mt-4 leading-7 max-w-sm">
                    Every small contribution can make our community a better place.
                  </p>
                </div>

                <div className="flex justify-between items-end mt-10">
                  <div>
                    <p className="text-sm text-gray-400">
                      Your community
                    </p>
                    <p className="text-lg font-semibold mt-1">
                      Your Impact
                    </p>
                  </div>

                  <div className="bg-[#2563EB] rounded-2xl p-4">
                    <span className="text-3xl">✦</span>
                  </div>
                </div>
              </div>

              <div className="absolute -top-5 -right-3 md:-right-5 bg-orange-400 text-[#142B4A] px-5 py-3 rounded-xl font-semibold shadow-lg">
                Join the Movement
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#2563EB] font-semibold text-sm">
              WHAT WE DO
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#142B4A] mt-3">
              Make Your Community Better
            </h2>

            <p className="text-gray-600 mt-4 leading-7">
              Discover opportunities to connect, contribute, and create
              positive changes with people around you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Feature 1 */}
            <div className="p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
                🌍
              </div>

              <h3 className="text-xl font-bold text-[#142B4A] mt-6">
                Community Events
              </h3>

              <p className="text-gray-600 text-sm leading-7 mt-3">
                Discover local events and participate in activities that
                bring people together.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center text-2xl">
                🤝
              </div>

              <h3 className="text-xl font-bold text-[#142B4A] mt-6">
                Volunteer Together
              </h3>

              <p className="text-gray-600 text-sm leading-7 mt-3">
                Join volunteers, share your skills, and support meaningful
                community initiatives.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-2xl">
                🌱
              </div>

              <h3 className="text-xl font-bold text-[#142B4A] mt-6">
                Make Real Impact
              </h3>

              <p className="text-gray-600 text-sm leading-7 mt-3">
                Turn small actions into meaningful changes for a cleaner,
                healthier, and better community.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
