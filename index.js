require('dotenv').config();

const express = require('express');

const server = express();
server.get('/api/users', (req, res) => {
    res.json([{id:1, username:'foo',},
    {id:2, username:'foo1',},
    {id:3, username:'foo2',}])
})

const port = process.env.PORT || 9000;


server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});






