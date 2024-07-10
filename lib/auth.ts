import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./db";
import { db as prisma } from "@/lib/db";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db as any),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "exemple@email.com",
        },
        password: { label: "Password", type: "password" },
        userName: { label: "Name", type: "text", placeholder: "Seu Nome" },
      },
      async authorize(credentials, req): Promise<any> {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Dados de login necessários");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        // caso usuario tenha feito registro por outro provider sem ser credencial, possivelmente nao terá password armazenado
        if (!user || !user.password) {
          throw new Error("Verifique seus dados e tente novamente");
        }

        const matchPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!matchPassword) {
          throw new Error("Senha Incorreta");
        }

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.SECRET,
  debug: process.env.NODE_ENV === "development",
  pages:{
    signIn: '/login',
  }
};