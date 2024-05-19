const express = require('express')

const app = express();

const port = process.env.PORT || 3000

app.get('/',(req , res) => {
    res.send(`server is runnning on port ${port}`)
})

// USERS //

app.get('/api/users',(req,res) => {
   users =  [
        {
          "id": 1,
          "name": "Sakpal Amit",
          "age": 19,
          "role": "backend"
        },
        {
          "id": 2,
          "name": "Darshan dhakan",
          "age": 21,
          "role": "frontend"
        },
        {
          "id": 3,
          "name": "Dhiren bhandare",
          "age": 26,
          "role": "fullstack"
        }
      ]

      res.send(users)
})

app.listen(port,()=> {
    console.log(`server is running on port ${port}`)
})
