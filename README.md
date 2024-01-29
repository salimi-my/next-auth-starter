# [Auth](https://auth.salimi.my) &middot; [![Author Salimi](https://img.shields.io/badge/Author-Salimi-%3C%3E)](https://www.linkedin.com/in/mohamad-salimi/)

This is a complete authentication example app built with Next.js 14 and Auth.js using the latest server actions. Sign in & sign up can use credentials or oauth providers with Google or GitHub. Authentication includes password reset, email verification, two factor authentication & role gate.

## Next.js authentication starter

- Light / dark / system mode
- PostgreSQL, Neon & Prisma for database
- NextAuth.js v5 or Auth.js for authentication
- React Email for email templating
- Resend for sending email
- Using Next.js 14 Server Action

## Tech/framework used

- Next.js 14
- Shadcn/ui
- NextAuth.js v5 / Auth.js
- Tailwind CSS
- TypeScript
- PostgreSQL
- Neon
- Prisma
- React Email
- Resend

## Starting the project

Open the [.env.example](/.env.example) and fill in your Prisma, Auth & Resend Configurations then save it as .env the run the following command:

```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```

## Demo

Hosted privately on personal DigitalOcean Droplet. [Click here](https://auth.salimi.my) to visit.
<br>
Direct link: `https://auth.salimi.my`

## Screenshots

#### Homepage

![Homepage](/screenshots/screenshot-1.png)

#### Sign in

![Sign in](/screenshots/screenshot-2.png)

#### Sign up

![Sign up](/screenshots/screenshot-3.png)

#### Settings

![Settings](/screenshots/screenshot-4.png)
