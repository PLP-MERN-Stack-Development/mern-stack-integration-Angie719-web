# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


MERN Blog Frontend

This is the frontend of the MERN Blog application, built with React and Vite. It provides a user interface to interact with the backend API, including viewing, creating, editing, and deleting blog posts and categories.

📂 Project Structure
client/
├── public/             # Static files
├── src/
│   ├── assets/         # Images, logos, etc.
│   ├── components/     # Reusable UI components
│   ├── context/        # React context providers (PostContext, AuthContext)
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page-level components (Home, PostDetail, CreatePost)
│   ├── services/       # API service functions
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # React DOM rendering entry point
│   └── index.css       # Global CSS
├── package.json        # Project dependencies
└── vite.config.js      # Vite configuration

⚙️ Features

React + Vite for fast development

State management with React Context API

Custom hooks for API calls

CRUD operations for posts and categories

User authentication (login/register)

Optimistic UI updates for better user experience

Loading and error handling states

Responsive layout

🛠️ Prerequisites

Node.js v18+

npm or yarn

Backend server running (see server/README.md)