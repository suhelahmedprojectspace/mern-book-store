import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import Bookrouter from './routes/Bookrouter.js'
import bodyParser from 'body-parser'
const app = express()


app.use(cors())

app.use(bodyParser.json({ limit: '20mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }))

app.use('/book', Bookrouter)
const url = 'mongodb+srv://sahelahmed:SahelAhmed@cluster0.hicv9.mongodb.net/Blogs?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`successfully connect on port ${PORT}`))).catch(err => console.log(err.message))