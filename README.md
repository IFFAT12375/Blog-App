# Y|OG Blog Application

A small blogging app built with Node.js, Express, MongoDB, and EJS. Users can sign up, publish posts with cover images, comment on posts, and manage their own content.

## Live Demo

[blog-app-env.eba-pcrwh5m6.ap-south-1.elasticbeanstalk.com](http://blog-app-env.eba-pcrwh5m6.ap-south-1.elasticbeanstalk.com/home)

## Why I Built It

I wanted a simple place to write and publish posts without the overhead of a large CMS. The app covers the basics of a complete Node.js application: authentication, database storage, file uploads, server-rendered pages, and deployment on AWS Elastic Beanstalk.

## Features

- User registration and sign in
- Create blog posts with cover images
- View profiles and recent posts
- Comment on posts
- Delete your own posts

## Run Locally

You need Node.js 20+, npm, and MongoDB.

```bash
git clone https://github.com/yogeshkanwade21/Nodejs-Blog-App.git
cd Nodejs-Blog-App
npm install
```

Create a `.env` file in the project root:

```env
PORT=8000
MONGO_URL=mongodb://127.0.0.1:27017/blog-app
```

Start the app:

```bash
npm run dev
```

Open [http://localhost:8000/home](http://localhost:8000/home).

Use `npm start` to run without Nodemon.

## Main Routes

| Route | Description |
| --- | --- |
| `/home` | Recent posts |
| `/user/signup` | Create an account |
| `/user/signin` | Sign in |
| `/user/profile/:userId` | User profile |
| `/blog/add-new` | Create a post |
| `/blog/:blogId` | View a post and comments |

Uploaded cover images are stored in `public/blogCoverImages`. Keep database credentials in `.env` and do not commit that file.
