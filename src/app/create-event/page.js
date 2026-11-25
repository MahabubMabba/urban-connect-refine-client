
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateEvent() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    eventType: "",
    thumbnail: "",
    location: "",
    eventDate: "",
    creatorEmail: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Event created successfully!");

        router.push("/upcoming-events");
      } else {
        alert("Failed to create event!");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <main className="bg-[#F4F6FA] min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-6">

        {/* Page Header */}
        <div className="text-center mb-10">
          <span className="text-[#2563EB] font-semibold text-sm">
            MAKE A DIFFERENCE
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-[#142B4A] mt-3">
            Create New Event
          </h1>

          <p className="text-gray-600 mt-3">
            Organize an event and bring your community together.
          </p>
        </div>

        {/* Create Event Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm p-6 md:p-10 space-y-6"
        >

          {/* Event Title */}
          <div>
            <label className="block text-[#142B4A] font-semibold mb-2">
              Event Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter event title"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-[#142B4A] font-semibold mb-2">
              Event Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your event..."
              rows="5"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Event Type */}
          <div>
            <label className="block text-[#142B4A] font-semibold mb-2">
              Event Type
            </label>

            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none bg-white focus:border-blue-500"
            >
              <option value="">Select Event Type</option>
              <option value="Cleanup">Cleanup</option>
              <option value="Plantation">Plantation</option>
              <option value="Donation">Donation</option>
              <option value="Awareness">Awareness</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Thumbnail URL */}
          <div>
            <label className="block text-[#142B4A] font-semibold mb-2">
              Event Thumbnail URL
            </label>

            <input
              type="url"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
              placeholder="Enter image URL"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-[#142B4A] font-semibold mb-2">
              Event Location
            </label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter event location"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Event Date */}
          <div>
            <label className="block text-[#142B4A] font-semibold mb-2">
              Event Date
            </label>

            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              min={new Date().toLocaleDateString("en-CA")}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Creator Email */}
          <div>
            <label className="block text-[#142B4A] font-semibold mb-2">
              Creator Email
            </label>

            <input
              type="email"
              name="creatorEmail"
              value={formData.creatorEmail}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2563EB] text-white py-3 rounded-lg font-semibold hover:bg-[#142B4A] transition disabled:bg-gray-400"
          >
            {loading ? "Creating Event..." : "Create Event"}
          </button>

        </form>
      </div>
    </main>
  );
}
