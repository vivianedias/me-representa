import NextAuth from 'next-auth'
import EmailProvider from "next-auth/providers/email";
import TwitterProvider from "next-auth/providers/twitter";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import sgMail from "@sendgrid/mail";
import clientPromise from "../../../lib/mongodb";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const options = {
  providers: [
    EmailProvider({
      server: {
        port: 465,
        host: "smtp.sendgrid.net",
        secure: true,
        tls: {
          rejectUnauthorized: false,
        },
      },
      from: process.env.EMAIL_FROM,
      async sendVerificationRequest({
        identifier: email,
        url,
        provider: { from },
      }) {
        const msg = {
          to: email,
          from,
          templateId: process.env.SENDGRID_CONFIRMATION_TEMPLATE_ID,
          dynamicTemplateData: {
            link: url,
          },
        };

        try {
          await sgMail.send(msg);
        } catch (error) {
          console.error(error);

          if (error.response) {
            console.error(error.response.body);
          }
        }
      },
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