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
// Serve frontend build (only if client/dist exists, for local dev)
// =======================
const clientBuildPath = path.join(__dirname, '../../client/dist');
if (process.env.NODE_ENV !== 'production') {
  app.use(express.static(clientBuildPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });
}

// =======================
// ERROR HANDLING
// =======================
app.use(notFoundHandler);
app.use(errorHandler);

export default app;