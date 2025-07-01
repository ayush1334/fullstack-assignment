const express = require('express')
const app = express();
const port = 3000;

const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200 
}

app.use(cors(corsOptions));

const router = require('./router');

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
