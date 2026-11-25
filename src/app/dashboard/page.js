
import Link from "next/link";
import {
  CalendarDays,
  Users,
  UserRound,
  Plus,
  ArrowRight,
} from "lucide-react";

export default function Dashboard() {
  return (
    <main className="bg-[#F4F6FA] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Dashboard Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-[#142B4A]">
            Dashboard
          </h1>
          <p className="text-gray-500 mt-2">
            Manage your events and account information.
          </p>
        </div>

        {/* Dashboard Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white p-6 rounded-xl border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Created Events</p>
                <h2 className="text-3xl font-bold text-[#142B4A] mt-2">
                  0
                </h2>
              </div>
              <CalendarDays size={30} className="text-blue-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Joined Events</p>
                <h2 className="text-3xl font-bold text-[#142B4A] mt-2">
                  0
                </h2>
              </div>
              <Users size={30} className="text-orange-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Account</p>
                <h2 className="text-xl font-bold text-[#142B4A] mt-2">
                  My Profile
                </h2>
              </div>
              <UserRound size={30} className="text-green-600" />
            </div>
          </div>

        </div>

        {/* Dashboard Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Manage Events */}
          <div className="bg-white p-7 rounded-xl border">
            <div className="flex items-center gap-3 mb-4">
              <CalendarDays className="text-blue-600" size={24} />
              <h2 className="text-xl font-semibold text-[#142B4A]">
                Manage Events
              </h2>
            </div>

            <p className="text-gray-500 text-sm leading-6 mb-6">
              View, update and delete the events you have created.
            </p>

            <Link
              href="/dashboard/manage-events"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
            >
              Manage Events <ArrowRight size={18} />
            </Link>
          </div>

          {/* Joined Events */}
          <div className="bg-white p-7 rounded-xl border">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-orange-500" size={24} />
              <h2 className="text-xl font-semibold text-[#142B4A]">
                Joined Events
              </h2>
            </div>

            <p className="text-gray-500 text-sm leading-6 mb-6">
              Check all the community events you have joined.
            </p>

            <Link
              href="/dashboard/joined-events"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
            >
              View Joined Events <ArrowRight size={18} />
            </Link>
          </div>

          {/* Profile */}
          <div className="bg-white p-7 rounded-xl border">
            <div className="flex items-center gap-3 mb-4">
              <UserRound className="text-green-600" size={24} />
              <h2 className="text-xl font-semibold text-[#142B4A]">
                My Profile
              </h2>
            </div>

            <p className="text-gray-500 text-sm leading-6 mb-6">
              View and update your personal account information.
            </p>

            <Link
              href="/dashboard/profile"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
            >
              Update Profile <ArrowRight size={18} />
            </Link>
          </div>

          {/* Create Event */}
          <div className="bg-[#142B4A] p-7 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <Plus className="text-orange-400" size={24} />
              <h2 className="text-xl font-semibold text-white">
                Create New Event
              </h2>
            </div>

            <p className="text-gray-300 text-sm leading-6 mb-6">
              Start a new community event and bring people together.
            </p>

            <Link
              href="/create-event"
              className="inline-flex items-center gap-2 bg-white text-[#142B4A] px-5 py-2.5 rounded-lg font-medium hover:bg-orange-400 transition"
            >
              Create Event <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}
