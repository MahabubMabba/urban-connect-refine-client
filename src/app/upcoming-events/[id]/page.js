
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function EventDetails() {
  const { id } = useParams();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  // Get Single Event
  useEffect(() => {
    fetch(`http://localhost:5000/events/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Event not found");
        }

        return response.json();
      })
      .then((data) => {
        setEvent(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  // Loading
  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading event...</p>
      </main>
    );
  }

  // Event Not Found
  if (!event) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-[#142B4A]">
          Event Not Found
        </h2>

        <Link
          href="/upcoming-events"
          className="mt-5 text-blue-600 hover:underline"
        >
          Back to Upcoming Events
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-[#F4F6FA] min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6">

        {/* Back Button */}
        <Link
          href="/upcoming-events"
          className="text-[#2563EB] font-medium hover:underline"
        >
          ← Back to Events
        </Link>

        {/* Event Details */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm mt-8">

          {/* Event Image */}
          <img
            src={event.thumbnail}
            alt={event.title}
            className="w-full h-64 md:h-96 object-cover"
          />

          <div className="p-6 md:p-10">

            {/* Event Type */}
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">
              {event.eventType}
            </span>

            {/* Event Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#142B4A] mt-5">
              {event.title}
            </h1>

            {/* Event Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

              <div className="bg-[#F4F6FA] p-5 rounded-xl">
                <p className="text-gray-500 text-sm">Event Location</p>
                <h3 className="text-lg font-semibold text-[#142B4A] mt-2">
                  {event.location}
                </h3>
              </div>

              <div className="bg-[#F4F6FA] p-5 rounded-xl">
                <p className="text-gray-500 text-sm">Event Date</p>
                <h3 className="text-lg font-semibold text-[#142B4A] mt-2">
                  {event.eventDate}
                </h3>
              </div>

            </div>

            {/* Description */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-[#142B4A]">
                About This Event
              </h2>

              <p className="text-gray-600 leading-8 mt-4 whitespace-pre-line">
                {event.description}
              </p>
            </div>

            {/* Join Button */}
            <div className="mt-10">
              <button
                disabled
                className="bg-gray-400 text-white px-8 py-3 rounded-lg font-semibold cursor-not-allowed"
              >
                Join Event (Authentication Coming Soon)
              </button>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
