AI Mock Interview Platform 🚀
React Node.js MongoDB Vite

🌟 Overview
A full-stack AI-powered mock interview platform that simulates real interviews with an AI interviewer named "Natalie". Features voice conversations, code evaluation, resume analysis, personalized questions, instant feedback, and interview history.

✨ Features
🔐 User Authentication (JWT-based)
📄 Resume Upload & Analysis (PDF parsing + AI insights)
🎯 Role-Based Interviews (Software Engineer, Data Scientist, etc.)
🎤 Live Voice Conversations (STT via AssemblyAI, TTS via Murf.ai)
💻 Code Editor (Monaco Editor with submission/evaluation)
🧠 AI-Powered (Google Gemini for questions, feedback, scoring)
📊 Detailed Feedback & Scores
📈 Interview History (CRUD operations)
📱 Responsive UI (React Router, Tailwind-like CSS)
📁 File Structure
AI Mock Interview Platform Prefilled Code/
├── client/                          # React + Vite Frontend
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx
│       ├── App.css
│       ├── main.jsx
│       ├── components/              # Reusable UI Components
│       │   ├── AudioPlayer/
│       │   ├── CodeEditor/
│       │   ├── ConversationalMic/
│       │   ├── InterviewCard/
│       │   ├── Navbar/
│       │   ├── ProtectedRoute/
│       │   └── ScoreCard/
│       ├── constants/               # App constants
│       │   ├── difficulty.js
│       │   ├── roles.js
│       │   └── scoreColors.js
│       ├── context/                 # React Context
│       │   └── AuthContext.jsx
│       ├── pages/                   # Page components
│       │   ├── FeedbackPage/
│       │   ├── HistoryPage/
│       │   ├── HomePage/
│       │   ├── InterviewPage/
│       │   └── InterviewSetupPage/
│       └── services/                # API calls
│           ├── api.js
│           ├── authService.js
│           ├── historyService.js
│           └── interviewService.js
├── server/                          # Node.js + Express Backend
│   ├── .gitignore
│   ├── package.json
│   ├── server.js                    # Entry point
│   └── src/
│       ├── app.js                   # Express app config
│       ├── config/                  # Configs
│       │   ├── db.config.js
│       │   └── gemini.config.js
│       ├── constants/               # Prompts & constants
│       │   └── prompts.js
│       ├── controllers/             # Route handlers
│       │   ├── auth.controller.js
│       │   ├── history.controller.js
│       │   ├── interview.controller.js
│       │   └── resume.controller.js
│       ├── middleware/              # Custom middleware
│       │   ├── auth.middleware.js
│       │   ├── error.middleware.js
│       │   └── upload.middleware.js
│       ├── models/                  # Mongoose schemas
│       │   ├── Interview.model.js
│       │   ├── Resume.model.js
│       │   └── User.model.js
│       ├── routes/                  # API routes
│       │   ├── auth.routes.js
│       │   ├── history.routes.js
│       │   ├── interview.routes.js
│       │   ├── resume.routes.js
│       │   └── index.js
│       ├── services/                # Business logic
│       │   ├── assemblyai.service.js
│       │   ├── auth.service.js
│       │   ├── gemini.service.js
│       │   ├── history.service.js
│       │   ├── interview.service.js
│       │   ├── murf.service.js
│       │   └── resume.service.js
│       └── utils/                   # Helpers
│           ├── jwt.utils.js
│           └── prompts.utils.js
🛠️ Tech Stack
Frontend
React 19 + React Router 7
Vite 6 (build tool)
Monaco Editor (code editing)
react-hot-toast (notifications)
Backend
Node.js 20 + Express 5
MongoDB 7 + Mongoose 9
JWT (auth)
Multer (file uploads)
AI/ML Services
Service	Purpose	API Key Env Var
Google Gemini	Question generation, evaluation, feedback	GEMINI_API_KEY
AssemblyAI	Speech-to-Text (transcription)	ASSEMBLYAI_API_KEY
Murf.ai	Text-to-Speech (AI voice)	MURF_API_KEY
🚀 Quick Start
Prerequisites
Node.js 20+
MongoDB (local or Atlas)
API Keys: Gemini, AssemblyAI, Murf.ai
Git
1. Clone & Install
git clone https://github.com/Nitish567478/AI-Mock-Interview-Assistant
cd "AI Mock Interview Platform Prefilled Code"
Client:

cd client
npm install
Server:

cd ../server
npm install
2. Environment Setup
Copy .env.example to .env in both client/ and server/ (create if missing):

server/.env:

NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/ai-mock-interview
JWT_SECRET=your-super-secret-jwt-key
GEMINI_API_KEY=your_gemini_key
ASSEMBLYAI_API_KEY=your_assemblyai_key
MURF_API_KEY=your_murf_key
client/.env:

VITE_API_URL=http://localhost:5000/api
3. Run Development Servers
Terminal 1 (Server):

cd server
npm run dev
# Server running on http://localhost:5000
Terminal 2 (Client):

cd client
npm run dev
# Client running on http://localhost:5173
4. Usage
Register/Login
Upload resume + select role/difficulty
Start interview (voice/text/code)
Get AI feedback & save to history
🌐 API Endpoints
Method	Endpoint	Description	Auth
POST	/api/auth/register	User registration	-
POST	/api/auth/login	User login	-
POST	/api/interview/start	Start new interview	✅
POST	/api/interview/:id/speak	Submit voice answer	✅
POST	/api/interview/:id/code	Submit code	✅
POST	/api/interview/:id/end	End interview	✅
GET	/api/history	Get interview history	✅
DELETE	/api/history/:id	Delete interview	✅
🤖 AI Workflow
Resume Analysis → Personalized questions
Voice Input → AssemblyAI transcribes → Gemini evaluates
Code Submission → Gemini reviews
Feedback Generation → Scores + improvement tips
TTS Response → Murf.ai generates Natalie's voice
🧪 Testing
# Client (Vite test runner if configured)
cd client
npm test

# Server (add Jest/Supertest)
npm test
🔧 Environment Variables
See .env examples above. Required for production.

📝 License
MIT License - feel free to use and modify!

🙌 Contributing
Fork the repo
Create feature branch
Submit PR
Questions? Open an issue!
