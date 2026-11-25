
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";
import clientPromise from "./mongodb";

const client = await clientPromise;

export const auth = betterAuth({
  appName: "Urban Connect",

  baseURL: process.env.BETTER_AUTH_URL,

  database: mongodbAdapter(client.db("urban_connect"), {
    client,
  }),

  emailAndPassword: {
    enabled: true,
    minPasswordLength: 6,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },

  plugins: [jwt()],

  trustedOrigins: [
    "http://localhost:3000",
  ],
});

