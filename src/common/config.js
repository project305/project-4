import NextAuth from "next-auth/next";
import { Providers } from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GIT_HUB_ID,
      clientSecret: process.env.GIT_HUB_SECRATE,
    }),
  ],
});
