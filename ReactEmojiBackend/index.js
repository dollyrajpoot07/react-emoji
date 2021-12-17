const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

const votes = {}; //simulated DB

app.post("/selection", (req, res) => {
  const emoji = req.body.emoji;
  const text = req.body.text;

  votes[emoji] = votes[emoji] ? votes[emoji] + 1 : 1;

  res.status(200).json({ success: true, data: votes });
});

app.get('/emojis', (req, res) => {
    const emojis = [
        {
            emoji : '❤️',
            text : 'Heart'
        },
        {
            emoji : '🔥',
            text : 'Fire'
        },
        {
            emoji : '🥺',
            text : 'Please'
        },
        {
            emoji : '😂',
            text : 'Laughing'
        }
    ];

    res.status(200).json({
        success : true,
        data : emojis
    });
})

app.listen(port, () => {
  console.log(`ReactEmojiBackend app is listening at http://localhost:${port}`);
});
