# Next.js Authentication - AuthJS / NextAuth for Role-Based Security

[[日本語版]](https://github.com/daikiejp/learn_next-auth/blob/master/README_JP.md)

This is a project tutorial based on the [freeCodeCamp Channel](https://www.youtube.com/watch?v=MNm1XhDjX1s) with some additional features added like use Prisma instead mongoose and TypeScript support.

## Features

- Use NextJS 14
- NexAuth Providers (Github and Google)
- NextAuth Credentials (Email and Password with mongoDB)
- Prisma ORM support
- TypeScript support
- Minor fixes and Tailwind CSS changes

## Getting Started

1. Create an OAuth App for **Github** here: [https://github.com/settings/developers](https://github.com/settings/developers) and copy the `Client ID` and `Client Secret` in a safe place.
2. For **Google** Login go to: [https://console.cloud.google.com/](https://console.cloud.google.com/) then `Api & Services`, and `Credentials`, then click `Create OAuth client ID` and select `Web application` put your localhost redirect URIs and continue like in the video.
3. Create an account in [mongodb.com](mongodb.com) follow the instructions like in the video and copy the connection url. In addition at the end of the url you need add the name of your database like this: `mongodb://<USER>:<PASSWORD>@XXX.mongo.net/<YOUR-DATABASE-NAME-HERE>`
4. Generate your own `NEXTAUTH_SECRET` env variable with `openssl rand -base64 32` in the console.
5. Add your Github Email into `ADMIN_EMAIL` env variable in order to create new users.

> Note: For Google OAuth you must need create a Project before create a `Oauth App` just create a project and follow the instructions.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

In order to deploy your project on Vercel you need add this: `  "postinstall": "prisma generate"` inside `scripts` in your `package.json`. This project already have, but in the case you are doing on your own.

Second is put all the .env variables to Vercel in the Settings.

Ready to go :-)

## Notes

Since I am learning Typescript maybe some errors or bad syntax code occurs. The project is tested and free of errors, but keep in mind everybody is learning. If something is wrong please report it in the [GitHub Issues](https://github.com/daikiejp/learn_next-auth/issues).

Feel free to contribute or ask questions. This repository maybe will keep continue updating.
