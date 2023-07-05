import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GIT_HUB_ID,
      clientSecret: process.env.GIT_HUB_SECRATE,
    }),
  ],
});
