const express = require('express');
const { Sequelize } = require('sequelize');
const app = express()
const port = process.env.PORT || 3000;

const sequelize = new Sequelize('mydb', 'root', '111', {
  host: 'host.docker.internal',
  port: 4406,
  dialect: 'mysql',
});
sequelize.authenticate().then(() => console.log('Connect to mysql successfully!')).catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`, process.env.PORT)
})