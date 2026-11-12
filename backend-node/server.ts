
import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import connectDB from './src/config/database';

const app = express();

app.use(cors());
app.use(express.json());

// Test API
app.get('/', (req, res) => {
  res.json({
    message: 'Multi-Tenant Backend Running Successfully'
  });
});

const startServer = async (): Promise<void> => {
  try {
    await connectDB();

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error('Server startup failed:', error);
    process.exit(1);
  }
};

startServer();
