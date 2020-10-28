const express = require('express');
const bodyParser = require('body-parser');
const uploadFile = require('express-fileupload');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(uploadFile({
    createParentPath:true
}))

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

require('./controllers/authController')(app);
require('./controllers/projectController')(app);

app.listen(4000);