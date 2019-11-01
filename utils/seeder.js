const Datastore = require('nedb') // set up a temporary (in memory) database
const developerData = require('../data/student.json') // read in data file

// inject Express app to configure it - EVERYTHING in through argument list

module.exports = (app) => {
  console.log('START data seeder.')
  const db = {} // empty object to hold all collections

  db.student = new Datastore() // new object property
  db.student.loadDatabase() // call the loadDatabase method

  // insert the sample data into our datastore
  db.student.insert(developerData)

  // initialize app.locals (these objects are available to the controllers)
  app.locals.student = db.student.find(developerData)
  console.log(`${app.locals.student.query.length} developers seeded`)

  console.log('END Data Seeder. Sample data read and verified.')
}
