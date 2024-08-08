// Importing necessary modules and packages
const express = require("express")
const app = express()
const database = require("./config/database")
const dotenv = require("dotenv")

// Setting up port number
const PORT = process.env.PORT || 4000


// Listening to the server
app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`)
})

// End of code.
