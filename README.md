# 🚀 AI Mock Interview Platform

**React | Node.js | MongoDB | Vite**

---

## 🌟 Overview

A full-stack AI-powered mock interview platform that simulates real interviews with an AI interviewer named **"Natalie"**.

It features:

* Voice conversations
* Code evaluation
* Resume analysis
* Personalized questions
* Instant feedback
* Interview history tracking

---

## ✨ Features

* 🔐 User Authentication (JWT-based)
* 📄 Resume Upload & Analysis (PDF parsing + AI insights)
* 🎯 Role-Based Interviews (Software Engineer, Data Scientist, etc.)
* 🎤 Live Voice Conversations (STT via AssemblyAI, TTS via Murf.ai)
* 💻 Code Editor (Monaco Editor with submission/evaluation)
* 🧠 AI-Powered (Google Gemini for questions, feedback, scoring)
* 📊 Detailed Feedback & Scores
* 📈 Interview History (CRUD operations)
* 📱 Responsive UI (React Router, Tailwind-like CSS)

---

## 📁 File Structure

```
AI Mock Interview Platform Prefilled Code/
├── client/                          # React + Vite Frontend
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx
│       ├── App.css
│       ├── main.jsx
│       ├── components/
│       │   ├── AudioPlayer/
│       │   ├── CodeEditor/
│       │   ├── ConversationalMic/
│       │   ├── InterviewCard/
│       │   ├── Navbar/
│       │   ├── ProtectedRoute/
│       │   └── ScoreCard/
│       ├── constants/
│       │   ├── difficulty.js
│       │   ├── roles.js
│       │   └── scoreColors.js
│       ├── context/
│       │   └── AuthContext.jsx
│       ├── pages/
│       │   ├── FeedbackPage/
│       │   ├── HistoryPage/
│       │   ├── HomePage/
│       │   ├── InterviewPage/
│       │   └── InterviewSetupPage/
│       └── services/
│           ├── api.js
│           ├── authService.js
│           ├── historyService.js
│           └── interviewService.js

├── server/                          # Node.js + Express Backend
│   ├── package.json
│   ├── server.js
│   └── src/
│       ├── app.js
│       ├── config/
│       │   ├── db.config.js
│       │   └── gemini.config.js
│       ├── constants/
│       │   └── prompts.js
│       ├── controllers/
│       │   ├── auth.controller.js
│       │   ├── history.controller.js
│       │   ├── interview.controller.js
│       │   └── resume.controller.js
│       ├── middleware/
│       │   ├── auth.middleware.js
│       │   ├── error.middleware.js
│       │   └── upload.middleware.js
│       ├── models/
│       │   ├── Interview.model.js
│       │   ├── Resume.model.js
│       │   └── User.model.js
│       ├── routes/
│       │   ├── auth.routes.js
│       │   ├── history.routes.js
│       │   ├── interview.routes.js
│       │   ├── resume.routes.js
│       │   └── index.js
│       ├── services/
│       │   ├── assemblyai.service.js
│       │   ├── auth.service.js
│       │   ├── gemini.service.js
│       │   ├── history.service.js
│       │   ├── interview.service.js
│       │   ├── murf.service.js
│       │   └── resume.service.js
│       └── utils/
│           ├── jwt.utils.js
│           └── prompts.utils.js
```

---

## 🛠️ Tech Stack

### Frontend

* React 19 + React Router 7
* Vite 6
* Monaco Editor
* react-hot-toast

### Backend

* Node.js 20 + Express 5
* MongoDB 7 + Mongoose 9
* JWT Authentication
* Multer (file uploads)

### AI/ML Services

| Service       | Purpose                         | Env Variable       |
| ------------- | ------------------------------- | ------------------ |
| Google Gemini | Questions, evaluation, feedback | GEMINI_API_KEY     |
| AssemblyAI    | Speech-to-Text                  | ASSEMBLYAI_API_KEY |
| Murf.ai       | Text-to-Speech                  | MURF_API_KEY       |

---

## 🚀 Quick Start

### 📌 Prerequisites

* Node.js 20+
* MongoDB (Local or Atlas)
* API Keys (Gemini, AssemblyAI, Murf.ai)
* Git


#### Client

```bash
cd client
npm install
```

#### Server

```bash
cd ../server
npm install
```

---

### 2️⃣ Environment Setup

#### server/.env

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/ai-mock-interview
JWT_SECRET=your-super-secret-jwt-key
GEMINI_API_KEY=your_gemini_key
ASSEMBLYAI_API_KEY=your_assemblyai_key
MURF_API_KEY=your_murf_key
```

#### client/.env

```env
VITE_API_URL=http://localhost:5000/api
```

---

### 3️⃣ Run Development Servers

#### Terminal 1 (Backend)

```bash
cd server
npm run dev
```

#### Terminal 2 (Frontend)

```bash
cd client
npm run dev
```

---

### 4️⃣ Usage

* Register / Login
* Upload resume + select role & difficulty
* Start interview (voice / text / code)
* Receive AI feedback
* Save and view interview history

---

## 🌐 API Endpoints

| Method | Endpoint                 | Description         | Auth |
| ------ | ------------------------ | ------------------- | ---- |
| POST   | /api/auth/register       | User registration   | ❌    |
| POST   | /api/auth/login          | User login          | ❌    |
| POST   | /api/interview/start     | Start interview     | ✅    |
| POST   | /api/interview/:id/speak | Submit voice answer | ✅    |
| POST   | /api/interview/:id/code  | Submit code         | ✅    |
| POST   | /api/interview/:id/end   | End interview       | ✅    |
| GET    | /api/history             | Get history         | ✅    |
| DELETE | /api/history/:id         | Delete interview    | ✅    |

---

## 🤖 AI Workflow

1. Resume Analysis → Personalized questions
2. Voice Input → AssemblyAI → Gemini evaluation
3. Code Submission → Gemini review
4. Feedback Generation → Scores + suggestions
5. TTS Response → Murf.ai voice output

---

## 🧪 Testing

```bash
# Client
cd client
npm test

# Server
npm test
```

---

## 🔧 Environment Variables

Refer to `.env` examples above. Required for production.

---

## 📝 License

MIT License — free to use and modify.

---

## 🙌 Contributing

* Fork the repository
* Create a feature branch
* Submit a pull request

---

## 💡 Support

If you like this project:

* ⭐ Star the repo
* 🍴 Fork it
* 🛠️ Contribute

---

## ❤️ Built With Passion

Built to help developers **practice interviews smarter using AI**.
