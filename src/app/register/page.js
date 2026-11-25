
"use client";

import Link from "next/link";
import { useState } from "react";
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!/[A-Z]/.test(password)) {
      toast.error("Password needs an uppercase letter");
      return;
    }

    if (!/[a-z]/.test(password)) {
      toast.error("Password needs a lowercase letter");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    const { error } = await signUp.email({
      name,
      email,
      password,
      image: photoURL,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Registration failed");
      return;
    }

    toast.success("Account created successfully");
    router.push("/");
    router.refresh();
  };

  return (
    <main className="min-h-screen bg-[#F4F6FA] flex items-center justify-center px-5 py-12">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl border">

        <h1 className="text-3xl font-bold text-[#142B4A] text-center">
          Create Account
        </h1>

        <p className="text-gray-500 text-center mt-2 mb-8">
          Join the Urban Connect community
        </p>

        <form onSubmit={handleRegister} className="space-y-4">

          <input
            required
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            type="email"
            required
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            type="url"
            placeholder="Profile Photo URL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          />

          <button
            disabled={loading}
            className="w-full bg-[#142B4A] text-white py-3 rounded-lg hover:bg-blue-600"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>

      </div>
    </main>
  );
}
