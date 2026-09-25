const express = require('express');
const path = require('path');
const userRouter = require('./routes/user');
const blogRouter = require('./routes/blog');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { checkAuthenticationCookie } = require('./middlewares/authentication');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;
const Blog = require('./models/blog');

app.set('view engine', 'ejs');

// Middleware to parse the request body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.resolve("./public")));
app.use(checkAuthenticationCookie("token"));

app.get('/', (req, res) => {
    return res.redirect('/home');
});

// connect to the database
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('mongodb connection established');
    })
    .catch(err => console.log(err.message));

// Home route
app.get('/home', async (req, res) => {
    const allBlogs = await Blog.find({}).sort({createdAt: -1});
    return res.render('home', {
        user: req.user,
        blogs: allBlogs
     });
})

// user routes
app.use('/user', userRouter);

// blog routes
app.use('/blog', blogRouter);

// server configuration
const server = app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`);
})

server.on('error', (err)=> {
    console.log(`error: ${err.message}`);
});