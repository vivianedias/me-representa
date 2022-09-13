import NextAuth from 'next-auth'
import EmailProvider from "next-auth/providers/email";
import TwitterProvider from "next-auth/providers/twitter";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

const options = {
  providers: [
    EmailProvider({
      server: {
        port: 465,
        host: "smtp.sendgrid.net",
        secure: true,
        auth: {
          user: "apikey",
          pass: process.env.SENDGRID_API_KEY,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: "2.0",
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
};

const NextAuthHandler = (req, res) => NextAuth(req, res, options)

export default NextAuthHandler