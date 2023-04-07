const express = require('express')
const app = express()
const port = 5000

app.use(express.static('../ton-minting-tool/out'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})