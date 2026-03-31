import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import routes from './routes/index.js';
import { errorHandler, notFoundHandler } from './middleware/error.middleware.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---- Create the Express App ----
const app = express();

// ============================================
// MIDDLEWARE
// ============================================

// 1. CORS
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));

// 2. Body Parser
app.use(express.json({ limit: '10mb' }));

// 3. API Routes
app.use('/api', routes);

// 4. Serve React build
app.use(express.static(path.join(__dirname, '../../client/dist')));

// 5. Catch-all for frontend routing (non-API routes)
app.use((req, res, next) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  } else {
    next(); // continue to API routes
  }
});

// ============================================
// ERROR HANDLING
// ============================================

app.use(notFoundHandler);
app.use(errorHandler);

// Export the app
export default app;