const express = require('express')
const app = express()
const PORT = 6969;


const userRoutes = require('./Routes/User.js')
const commentRoutes = require('./Routes/Comment.js')


app.use('/users', userRoutes)
app.use('/comments', commentRoutes)


app.listen(PORT, () => {
    console.log(`server is running`)
})
