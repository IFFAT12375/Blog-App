# Y|OG Blog Application

A server-rendered blog application built with Node.js, Express, MongoDB, and EJS. Users can create accounts, publish blog posts, view profiles, and delete their own posts.

## Requirements

- Node.js 20 or newer
- npm
- MongoDB running locally on `mongodb://127.0.0.1:27017`

## Getting started

```bash
git clone https://github.com/yogeshkanwade21/Nodejs-Blog-App.git
cd Nodejs-Blog-App
npm install
npm run dev
```

The application runs at http://localhost:8000/home.

To run without the file watcher:

```bash
npm start
```

## Available routes

| Route | Purpose |
| --- | --- |
| `/home` | View recent blog posts |
| `/user/signup` | Create an account |
| `/user/signin` | Sign in |
| `/user/profile/:userId` | View a user profile |
| `/blog/add-blog` | Create a blog post |

## Authentication

Authentication uses signed HTTP cookies. JWT handling is provided by `jose`, which is compatible with current Node.js releases, including Node.js 26.

## Notes

- Start MongoDB before starting the application.
- Uploaded images are stored under `public/uploads`.
- The default development port is `8000`.
