// server/src/app.js
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import routes from './routes/index.js';
import { errorHandler, notFoundHandler } from './middleware/error.middleware.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// =======================
// MIDDLEWARE
// =======================

// CORS for frontend
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));

// JSON parsing
app.use(express.json({ limit: '10mb' }));

// API routes under /api
app.use('/api', routes);

// =======================
// ERROR HANDLING
// =======================
app.use(notFoundHandler);
app.use(errorHandler);

export default app;