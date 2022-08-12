const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/apiRoutes')
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors());
app.use('/getapi', routes);

app.listen(8001, () => {
    console.log("server is running at 8001")

})