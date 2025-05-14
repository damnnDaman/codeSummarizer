import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.post('/api/explain', async (req, res) => {
  const { code } = req.body;
  if (!code) {
    return res.status(400).json({ error: 'Missing code in request body.' });
  }

  try {
    const hfRes = await fetch(
      'https://jk12p-codeexplainer.hf.space/run/predict/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: [ "print"] }),
      }
    );

    if (!hfRes.ok) {
      throw new Error(`CodeExplainer returned ${hfRes.status}`);
    }

    const { data } = await hfRes.json();
    const explanation = Array.isArray(data) ? data[0] : null;

    if (!explanation) {
      throw new Error('No explanation in response.');
    }

    res.json({ explanation });
  } catch (err) {
    console.error('Error fetching explanation:', err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend listening on http://localhost:${PORT}`);
});