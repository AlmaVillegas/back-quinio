import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import * as dotenv from 'dotenv';
dotenv.config()

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
    res.send('Hello world');
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log('listening on port '+ app.get('port'));
});


