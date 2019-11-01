
// Tyler Jacobson 10/31/19

const mongoose = require('mongoose')

const DeveloperSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true,
    unique: true
  },
  sectionNumber: {
    type: String,
    length: 2,
    require: true
  },
  days: {
    type: String,
    minlength: 1,
    maxlength: 5,
    require: true
  },
  startTime: {
    type: Number,
    minlength: 3,
    maxlength: 4,
    required: true
  },
  roomNumber: {
    type: String,
    minlength: 7,
    maxlength: 9,
    required: true
  },
  instructorId: {
    type: Number,
    required: true
  },
  courseId: {
    type: Number,
    require: true
  }

})
module.exports = mongoose.model('Developer', DeveloperSchema)
