# Todo App

A full-stack todo application built with Node.js, Express, MongoDB, and EJS. Features user authentication, session management, and a modern, responsive UI.

## Features

- ✅ User authentication (Sign up, Login, Logout)
- ✅ Create, read, update, and delete todos
- ✅ Mark todos as complete/incomplete
- ✅ Persistent storage with MongoDB
- ✅ Secure session management
- ✅ Modern, responsive design
- ✅ Flash messages for user feedback

## Tech Stack

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- Passport.js (Authentication)
- Express Session with MongoDB store

**Frontend:**
- EJS (Templating)
- Custom CSS with modern design
- Responsive layout

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account or local MongoDB installation
- npm or yarn package manager

## Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd todo-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the `config` directory:
```bash
touch config/.env
```

Add the following variables to `config/.env`:
```
PORT=8001
DB_STRING=mongodb+srv://username:password@cluster.mongodb.net/todoapp
SESSION_SECRET=your-super-long-random-string-here
```

**To generate a secure SESSION_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

4. **Configure MongoDB**
- Sign up for [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create a new cluster
- Get your connection string and add it to `DB_STRING` in `.env`
- Whitelist your IP address in MongoDB Atlas

## Running the Application

**Development mode (with auto-restart):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The application will be available at `http://localhost:8001`

## Project Structure

```
todo-app/
├── config/
│   ├── .env              # Environment variables
│   ├── database.js       # MongoDB connection
│   └── passport.js       # Passport authentication config
├── models/
│   ├── User.js           # User model
│   └── Todo.js           # Todo model
├── routes/
│   ├── main.js           # Authentication routes
│   └── todos.js          # Todo CRUD routes
├── views/
│   ├── index.ejs         # Landing page
│   ├── login.ejs         # Login page
│   ├── signup.ejs        # Signup page
│   └── todos.ejs         # Todo list page
├── public/
│   └── style.css         # Custom styles
├── server.js             # Main application file
├── package.json
└── README.md
```

## Deployment to Render

1. **Push your code to GitHub** (make sure `.env` is in `.gitignore`)

2. **Create a new Web Service on Render:**
   - Connect your GitHub repository
   - Select your branch
   - Build Command: `npm install`
   - Start Command: `npm start`

3. **Add Environment Variables in Render:**
   ```
   DB_STRING=your-mongodb-connection-string
   SESSION_SECRET=your-secure-secret
   NODE_ENV=production
   ```

4. **Deploy!** Render will automatically deploy your app.

## Usage

1. **Sign Up:** Create a new account
2. **Login:** Access your personal todo list
3. **Add Todos:** Create new tasks
4. **Complete Todos:** Click on a todo to mark it complete/incomplete
5. **Delete Todos:** Remove completed or unwanted tasks
6. **Logout:** Securely end your session

## Security Features

- Password hashing with bcrypt
- Secure session management with HTTP-only cookies
- CSRF protection via express-session
- Environment variable protection
- MongoDB injection prevention with Mongoose

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Your Name - [Your GitHub Profile](https://github.com/absar22)

## Acknowledgments

- Built as part of learning full-stack web development
- Inspired by modern todo applications
- Thanks to the open-source community

---

**Need help?** Open an issue or contact me at your absarahmad137@gmail.com