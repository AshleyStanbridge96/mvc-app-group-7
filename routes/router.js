/**
 * @router.js - manages all routing
 *
 * router.get when assigning to a single request
 * router.use when deferring to a controller
 *
 * @requires express
 */

const express = require('express')

console.log('START routing')
const router = express.Router()

// Manage top-level request first
router.get('/', (req, res, next) => {
  console.log('Request to /')
  res.sendFile('index.html')
})

router.get('/index', (req, res, next) => {
  console.log('Request to /index')
  res.sendFile('index.html')
})

// Defer path requests to a particular controller
router.use('/stu', require('../controllers/student.js'))
router.use('/crs', require('../controllers/course.js'))
router.use('/inst', require('../controllers/instructor.js'))
router.use('/sec', require('../controllers/section.js'))

// catch 404 and forward to error handler
router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

// error handler
router.use((err, req, res, next) => {
  // render the error page
  res.status(err.status || 500)
  res.render('error', { status: err.status, message: err.message })
})

console.log('END routing')
module.exports = router
