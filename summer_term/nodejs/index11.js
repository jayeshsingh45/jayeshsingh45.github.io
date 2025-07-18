// get > localhost:8080/api/users/show
// post > localhost:8080/api/user/register
import express from 'express'

const express = require('express')
const app = express()
const port = 3000

app.get('/api/users/show', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/user/register', (req, res) => {
  res.send('Hello World!')
})


app.post('/api/user/login', (req, res) => {
  res.send('Hello World!')
})


app.get('/api/user/login', (req, res) => {
  res.send('Hello World!')
})


app.delete('/api/user/login', (req, res) => {
  res.send('Hello World!')
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
