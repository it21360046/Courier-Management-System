const express = require('express')
const orderRoutes = require('./routes/orderRoutes')
const connectDatabase = require('./config/dbConfig')
const cors = require('cors')
require('dotenv').config()

const app = express()

connectDatabase()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/courier-mate/orders',orderRoutes)


const port = process.env.PORT

app.listen(port,()=>{
    console.log(`server is up and running on port ${port}`);
})