import { Client } from "@gradio/client";
import express from 'express';
// import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello from the backend!');
  console.log('Hello from the backend!');
}
);


// app.post('/api/explain', async (req, res) => {
//   console.log('Received request to /api/explain');

//   // Example response to confirm the route is working
//   res.json({ message: 'Request received at /api/explain' });
//   // res.sendStatus(201);
// });

app.post('/api/explain', async (req, res) => {
  const code = "def: printf('Hello, World!')"; //req.body.code;"
  //const {code}  = req.body;
  if (!code) {
    return res.status(400).json({ error: 'Missing code in request body.' });
  }



// async function explainCode(code) {
  const client = await Client.connect("https://jk12p-codeexplainer.hf.space/");
  // api_name defaults to "/predict" and fn_index to 0 if there’s only one endpoint
  const [ explanation ] = await client.predict(code);
  console.log(explanation);
// }


  // const hfRes = await fetch(
  //   'https://jk12p-codeexplainer.hf.space/api/predict/',
  //   {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       data: [code],        // ← now this is the real snippet
  //       fn_index: 0            // ← include if your space needs it
  //     }),
  //   }
  // );
  // if (!hfRes.ok) {
  //   throw new Error(`Space returned ${hfRes.status}`);
  // }
  // console.log('Response from Hugging Face:', hfRes);
  // const { data } = await hfRes.json();

  // console.log('Response from Hugging Face:', data.JSON.stringify(data));

  // after you get `data` back…
// return res.json({ explanation: Array.isArray(data) ? data[0] : data });

});

app.listen(PORT, () => {
  console.log(`🚀 Backend listening on http://localhost:${PORT}`);
});