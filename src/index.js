const express = require('express');
const bodyParser = require('body-parser');
const uploadFile = require('express-fileupload');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

app.use(uploadFile({
    createParentPath:true
}))

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use('/imagens', express.static(`./imagens`));

require('./controllers/authController')(app);
require('./controllers/projectController')(app);

app.listen(process.env.PORT || 4000);