/**
*  Course controller
*  Handles requests related to developer resources.
*
* @author Group7
*
*/
const express = require('express')
const api = express.Router()
const Model = require('../models/course.js')
const find = require('lodash.find')
const notfoundstring = 'Could not find course with id='

// RESPOND WITH JSON DATA  --------------------------------------------

// GET all JSON
api.get('/findall', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const data = req.app.locals.course.query
  res.send(JSON.stringify(data))
})

// GET one JSON by ID
api.get('/findone/:id', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const id = parseInt(req.params.id)
  const data = req.app.locals.course.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.send(JSON.stringify(item))
})

// RESPOND WITH VIEWS  --------------------------------------------

// GET to this controller base URI (the default)
api.get('/', (req, res) => {
  res.render('index.html', {
    developers: req.app.locals.developers.query
  })
})

// GET create
api.get('/create', (req, res) => {
  res.render('course/create', {
    developers: req.app.locals.developers.query,
    developer: new Model()
  })
})

// GET /delete/:id
api.get('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const data = req.app.locals.developers.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.render('course/delete', {
    developer: item
  })
})

// GET /details/:id
api.get('/details/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const data = req.app.locals.developers.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.render('course/details', {
    developer: item
  })
})

// GET one
api.get('/edit/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const data = req.app.locals.developers.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.render('course/edit', {
    developer: item
  })
})

// later

// RESPOND WITH DATA MODIFICATIONS  -------------------------------

// later

module.exports = api
