const express = require('express')

const app = express();

const port = process.env.PORT || 3000

app.get('/',(req , res) => {
    res.send(`server is runnning on port ${port}`)
})



app.listen(port,()=> {
    console.log(`server is running on port ${port}`)
})