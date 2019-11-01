const Datastore = require('nedb') // set up a temporary (in memory) database
const developerData = require('../data/students.json') // read in data file
const courseData = require('../data/courses.json')
// inject Express app to configure it - EVERYTHING in through argument list

module.exports = (app) => {
  console.log('START data seeder.')
  const db = {} // empty object to hold all collections

  db.student = new Datastore() // new object property
  db.course = new Datastore() // new object property

  db.student.loadDatabase() // call the loadDatabase method
  db.course.loadDatabase() // call the loadDatabase method

  // insert the sample data into our datastore
  db.student.insert(developerData)
  db.course.insert(courseData)

  // initialize app.locals (these objects are available to the controllers)
  app.locals.student = db.student.find(developerData)
  console.log(`${app.locals.student.query.length} developers seeded`)

  app.locals.course = db.course.find(courseData)
  console.log(`${app.locals.course.query.length} developers seeded`)

  console.log('END Data Seeder. Sample data read and verified.')
}
