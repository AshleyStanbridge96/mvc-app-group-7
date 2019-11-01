// Ashley Stanbridge 10/31/2019

const mongoose = require('mongoose')

// Changed DeveloperSchema to InstructorSchema
const InstructorSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true,
    unique: true
  },
  given: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'Given name'
  },
  family: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'Family name'
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    unique: true
  },
  salary: {
    type: Number,
    min: 10000,
    max: 100000,
    required: false
  },
  github: {
    type: String,
    minlength: 4,
    maxlength: 100,
    required: false,
    default: 'http://github.com'
  }
})
module.exports = mongoose.model('Instructor', InstructorSchema)
