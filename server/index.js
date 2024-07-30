const express = require('express');
const app = express();
const cors = require("cors");
// require say moudle
const say = require('say');

// require body parser to hahlde the user inputs
const bodyParser = require('body-parser');

// useing body parser middlewares to handle the user intput streams.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "UPDATE", "DELETE"],
    })
);


app.post('/speak', (req, res) => {
    const {text} = req.body;
    // below 1.0 is the speed which can be increased
    say.speak(text, 'Alex', 1.0, (err) => {
        if (err) {
            return res.json({ message: err, error: true });
        }
        return res.json({ message: 'Text spoken.', error: false });
    });
});

app.listen(4000, () => {
    console.log('app is running over port:' + 4000);
});