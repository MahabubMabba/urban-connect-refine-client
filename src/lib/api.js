
import { authClient } from "./auth-client";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiRequest(path, options = {}) {
  const { data, error } = await authClient.token();

  if (error || !data?.token) {
    throw new Error("Please login first");
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data.token}`,
      ...options.headers,
    },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Something went wrong");
  }

  return result;
}
