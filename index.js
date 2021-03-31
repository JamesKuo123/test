const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const postApis = require('./routes/api/post');
app.use('/api/posts', postApis);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(`${__dirname}/public/`));
    app.get(/.*/, (req, res) => {
        res.sendFile(`${__dirname}/public/index.html`);
    });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is working on port ${port}`);
});