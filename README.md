# Authentication Using Node.js, Sessions, and Cookies

This is the refactored and cleaned code from the **"Understanding Authentication in Node.js using Sessions and Cookies"** project.

In this project, I aimed to keep things simple and focus on solidifying the concepts behind using Sessions and Cookies for Authentication. The code has been refactored from the original version in the video to make it more readable and easier to review.

## Features

- **Login and Registration**: Implemented using EJS for templating and Express.js for server-side logic.
- **Session Management**: Authentication is handled using sessions, ensuring secure and persistent login states across different routes.
- **Cookies**: Cookies are utilized for session tracking, enabling a seamless user experience.
- **MongoDB Integration**: User data, including login credentials and session information, is stored in a MongoDB database for persistence and easy data management.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework used for building the server and handling routing.
- **EJS**: Templating engine used for rendering dynamic HTML pages.
- **Express-Session**: Middleware used for managing sessions.
- **Cookies**: Used for storing session identifiers on the client side.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js, used to interact with the MongoDB database.
