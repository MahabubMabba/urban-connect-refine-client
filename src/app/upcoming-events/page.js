
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [eventType, setEventType] = useState("All");

  // Get Upcoming Events
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Failed to load events:", error);
        setLoading(false);
      });
  }, []);

  // Filter Events
  const filteredEvents = events.filter((event) => {
    const matchSearch =
      event.title?.toLowerCase().includes(search.toLowerCase()) ||
      event.location?.toLowerCase().includes(search.toLowerCase());

    const matchType =
      eventType === "All" || event.eventType === eventType;

    return matchSearch && matchType;
  });

  return (
    <main className="bg-[#F4F6FA] min-h-screen">
      {/* Page Header */}
      <section className="bg-[#142B4A] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-orange-400 font-semibold text-sm">
            MAKE A DIFFERENCE
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mt-4">
            Upcoming Events
          </h1>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto leading-7">
            Explore community events, connect with people, and take part
            in activities that create positive changes.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 justify-between mb-10">
          <input
            type="text"
            placeholder="Search by event name or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:max-w-md px-5 py-3 rounded-lg border border-gray-300 outline-none focus:border-blue-500"
          />

          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="px-5 py-3 rounded-lg border border-gray-300 outline-none bg-white"
          >
            <option value="All">All Event Types</option>
            <option value="Cleanup">Cleanup</option>
            <option value="Plantation">Plantation</option>
            <option value="Donation">Donation</option>
            <option value="Awareness">Awareness</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Event Count */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#142B4A]">
            Available Events ({filteredEvents.length})
          </h2>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              Loading events...
            </p>
          </div>
        ) : filteredEvents.length > 0 ? (

          /* Event Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event._id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                <img
                  src={event.thumbnail}
                  alt={event.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {event.eventType}
                  </span>

                  <h3 className="text-xl font-bold text-[#142B4A] mt-4">
                    {event.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-3">
                    Location: {event.location}
                  </p>

                  <p className="text-gray-500 text-sm mt-2">
                    Date: {event.eventDate}
                  </p>

                  <Link
                    href={`/upcoming-events/${event._id}`}
                    className="block text-center bg-[#2563EB] text-white py-3 rounded-lg mt-6 font-medium hover:bg-[#142B4A] transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

        ) : (
          /* No Events */
          <div className="bg-white rounded-2xl p-12 text-center">
            <h3 className="text-xl font-semibold text-[#142B4A]">
              No Events Found
            </h3>

            <p className="text-gray-500 mt-3">
              Try changing your search or event category.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
