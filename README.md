# MERN Blog - Live Deployment


A full-stack MERN blog application deployed to production with CI/CD pipeline and monitoring.


## 🚀 Live Applications


- **Frontend**: https://my-blog-sigma-gules.vercel.app/
- **Backend API**: https://mern-stack-integration-angie719-web.onrender.com/
- **Health Check**: https://mern-stack-integration-angie719-web.onrender.com/health


## 📋 Features


- ✅ Create, read, update, and delete blog posts
- ✅ Search and filter posts
- ✅ Responsive design
- ✅ Production deployment
- ✅ CI/CD pipeline
- ✅ Health monitoring


## 🛠️ Tech Stack


- **Frontend**: React, Vite, React Router
- **Backend**: Node.js, Express.js, MongoDB
- **Deployment**: Vercel (frontend), Render (backend)
- **CI/CD**: GitHub Actions
- **Database**: MongoDB Atlas


## 🏗️ Architecture


```
User → Vercel (React) → Render (Express API) → MongoDB Atlas
```


## 📁 Project Structure


```
├── client/                 # React frontend
├── server/                 # Express backend
├── .github/workflows/      # CI/CD pipelines
├── DEPLOYMENT.md           # Maintenance guide
└── README.md
```


## 🚀 Deployment


### Backend (Render)
- Automatic deployment from GitHub
- Environment variables configured
- HTTPS/SSL enabled
- Health monitoring


### Frontend (Vercel)
- Automatic deployment from GitHub
- Environment variables configured
- HTTPS/SSL enabled
- Static asset optimization


## 🔄 CI/CD Pipeline


GitHub Actions automatically:
- Runs tests on every push
- Builds both frontend and backend
- Deploys to production on success


## 📊 Monitoring


- Health check endpoint with system metrics
- Automatic error tracking
- Performance monitoring
- Uptime monitoring via platform dashboards


## 🛠️ Local Development


```bash
# Backend
cd server
npm install
npm run dev


# Frontend  
cd client
npm install
npm run dev
```


## 📞 API Endpoints


- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create new post
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post
- `GET /api/categories` - Get categories


## 🔧 Environment Variables


See `.env.example` files in both client and server directories for required variables.


## 📝 Maintenance


Regular maintenance tasks and deployment procedures documented in `DEPLOYMENT.md`.


---


**Deployed with ❤️ using modern DevOps practices**
