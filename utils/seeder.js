const Datastore = require('nedb') // set up a temporary (in memory) database

const studentData = require('../data/students.json') // read in data file
const courseData = require('../data/courses.json')
const instructorData = require('../data/instructors.json')
const sectionData = require('../data/sections.json')
// inject Express app to configure it - EVERYTHING in through argument list

module.exports = (app) => {
  console.log('START data seeder.')
  const db = {} // empty object to hold all collections

  db.student = new Datastore() // new object property
  db.course = new Datastore() // new object property
  db.instructor = new Datastore() //new object property
  db.section = new Datastore() //new object property

  db.student.loadDatabase() // call the loadDatabase method
  db.course.loadDatabase() // call the loadDatabase method
  db.instructor.loadDatabase() //call the loadDatabase method
  db.section.loadDatabase() //call the loadDatabase method

  // insert the sample data into our datastore
  db.student.insert(studentData)
  db.course.insert(courseData)
  db.instructor.insert(instructorData)
  db.section.insert(sectionData)

  // initialize app.locals (these objects are available to the controllers)

  app.locals.student = db.student.find(studentData)
  console.log(`${app.locals.student.query.length} students seeded`)

  app.locals.course = db.course.find(courseData)
  console.log(`${app.locals.course.query.length} courses seeded`)

  app.locals.instructor = db.instructor.find(instructorData)
  console.log(`${app.locals.course.query.length} instructors seeded`)

  app.locals.section = db.section.find(sectionData)
  console.log(`${app.locals.course.query.length} sections seeded`)


  console.log('END Data Seeder. Sample data read and verified.')
}
