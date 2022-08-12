const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/apiRoutes')
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors());
app.use('/getapi', routes);

let port = process.env.PORT || 8001
app.listen(port, () => {
    console.log(`server is running at ${port}`)

})
