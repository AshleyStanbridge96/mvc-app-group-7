// Tyler Jacobson 10/31/19

const mongoose = require('mongoose')

const DeveloperSchema = new mongoose.Schema({

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
  gpa: {
    type: Number,
    minLegth: 1,
    maxLength: 4,
    required: true
  },
  github: {
    type: String,
    minlength: 4,
    maxlength: 100,
    required: false,
    default: 'http://github.com'
  },
  website: {
    type: String,
    minlength: 4,
    maxlength: 100,
    required: false,
    default: 'http://soemwebsite.com'
  },
  sectionId: {
    type: Number,
    minLength: 1,
    maxLength: 5,
    required: true
  }

})
module.exports = mongoose.model('student', DeveloperSchema)
