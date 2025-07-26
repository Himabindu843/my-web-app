const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/chat', (req, res) => {
  const userMessage = req.body.message.toLowerCase();

  let botReply = "I'm still learning to respond better! 😊";

  if (userMessage.includes("java")) {
    botReply = "Java is a popular, object-oriented programming language used for web, mobile, and desktop applications.";
  } else if (userMessage.includes("trend")) {
    botReply = "Current tech trends include AI, Web3, cloud computing, and edge computing!";
  } else if (userMessage.includes("ai") || userMessage.includes("artificial intelligence")) {
    botReply = "AI is the simulation of human intelligence in machines that are programmed to think and learn.";
  }

  res.json({ reply: botReply });
});

app.listen(PORT, () => {
  console.log(`✅ Backend is running on http://localhost:${PORT}`);
});
