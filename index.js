const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
app.use(cors());

const posts = require('./routes/api/post');
app.use('/api/posts', posts);
app.get(/.*/, (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server started on port ${port}`);
});