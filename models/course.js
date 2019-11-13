// Kelsie Dibben 10/31/19

const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true,
    unique: true
  },
  schoolNumber: {
    type: String,
    minlength: 2,
    maxlength: 2,
    required: true,
  },
  courseNumber: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    minlength: 4,
    maxlength: 50,
    required: true,
    unique: true
  },
  inSpring: {
    type: Boolean,
    required: true
  },
  inSummer: {
    type: Boolean,
    required: true
  },
  inFall: {
    type: Boolean,
    required: true
  }

})
module.exports = mongoose.model('Course', CourseSchema)
