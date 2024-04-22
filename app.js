import express from 'express';
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';
import mysql from 'mysql';

import 'dotenv/config';

const app = express();
const port = process.env.PORT || 5000;



app.listen(port, () => {
    console.log(`listening on port ${port}`);
})