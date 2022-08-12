const express = require('express');
const router = express.Router();
const swaggerui = require('swagger-ui-express');
const swaggerdocument = require('../swagger.json')
const { GetWeatherCity, GetForecastCity,GetdailyData } = require('../controllers/apiController')

router.get('/weather/getCity/', GetWeatherCity);
router.get('/forecast/getCity', GetForecastCity);
router.get('/forecast/daily', GetdailyData)

router.use('/api-docs', swaggerui.serve);
router.get('/api-docs', swaggerui.setup(swaggerdocument));

module.exports = router;