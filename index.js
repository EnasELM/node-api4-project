require("dotenv").config();

const express = require("express");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(cors());

server.get("/api/hello", (req, res) => {
  res.json({ message: "api is here!!" })
})

server.use('*', (req ,res) => {
    res.send(`<h1>hello</h1>`)
})   

server.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(err.status || 500).json({
    message: `Horror in the router: ${err.message}`,
    stack: err.stack,
  });
});

const port = process.env.PORT || 9000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
