const { urlencoded } = require('body-parser')
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3600


//for content-type: urlencoded
app.get(express.urlencoded())


//for content-type: json
app.get(express.json())


//for serving static files
app.get(urlencoded())

app.get("/", (req, res) => {
    res.send("learning about middleware")
})

app.listen(PORT, () => {
    console.log(`server is running!`)
})
