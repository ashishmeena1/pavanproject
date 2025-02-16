import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { type AuthOptions } from "next-auth"
import prisma from "./db"
import bcrypt from "bcrypt"


interface user {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    token?:string | null
}

const genertateJWT = (token:any) => {
     return "I"
}

export  const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),

    //this is custom sigin route
    CredentialsProvider({
      name: "credentials",
      id: "credentials",
      credentials: {
        email: { type: "email", label: "email", placeholder: "enter your email" },
        password: { type: "text", label: 'password', placeholder: "" }
      },
      authorize: async (credentials: any) => {
        try {
          if (process.env.LOCALHOST! === "TRUE") {
            return {
              id:"1",
              name:"test",
              email:"test@test",
              token:await genertateJWT({
                id:"1"
              })
            }
          }
          const { email, password } = await credentials;

          if (!email || !password) {
            throw new Error("all required feild should be filled")
          }

          const existinguser: { password: string, token: string, id: string, name: string | null } | null = await prisma.user.findFirst({
            where: {
              email
            },
            select: {
              password: true,
              token: true,
              id: true,
              name: true
            }
          })

          if (!existinguser) {
            throw new Error("there is no user with this email exits")
          }

          const  hashedPassword = await bcrypt.hash(credentials.password,10)

          if (existinguser && await bcrypt.compare(hashedPassword, existinguser.password)) {

            const token = await genertateJWT({
              id:existinguser.id
            })

            return {
              name:existinguser.name,
              id: existinguser.id,
              email:credentials.email,
              token
            }
          }
          throw new Error("password and email is not correct")
        }
        catch (error) {
          throw new Error("something went wrong")
        }
      }
    }),
  ],

  callbacks: {
    jwt: ({ user, token }) => {
      const newToken = token
      if (user) {
        newToken.id = user.id
        newToken.name = user.name
        newToken.jwttoken = (user as user).token
        return newToken
      }
      return token;
    }
  },
  secret: process.env.AUTH_SECRET
}