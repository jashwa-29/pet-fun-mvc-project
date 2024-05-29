const express = require('express')
const route = express.Router()
const servicefile = require('../services/services')
const controlfile = require('../controller/controller')

route.get('/', servicefile.indexpage)
route.get('/thankyou', servicefile.thankspage)
route.post('/api/post', controlfile.create)
module.exports = route