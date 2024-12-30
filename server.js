const express = require("express")
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const app = express()
const PORT = process.env.PORT || 1221
//const router = require("./routes/childrenRoutes")


app.use(cors(corsOptions))+
app.use(express.json())
app.get('/', (req, res) => {
    res.send("🕎🍩חודש טוב ומבורך!!")
})


app.use('/api/children', require('./routes/childrenRoutes'))
app.use('/api/people', require('./routes/peopleRoutes'))


app.listen(PORT, () => {
    console.log(`running in server ${PORT}`)
})