import express from 'express'
const app = express()
const PORT = process.argv[2] | 8080

app.listen(PORT, ()=>{
    console.log(`server started on ${PORT}`)
})