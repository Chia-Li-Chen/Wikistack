const PORT = 3000;

const morgan = require("morgan");
const express = require("express");
const app = express();
const layout = require("./views/layout");
const { db, Page, User } = require('./models');

const staticMiddleware = express.static(__dirname + "./views");
app.use(staticMiddleware);

app.use(morgan('dev'));

app.get("/", ((req, res) => {
  res.send(layout(''));
  }));

  db.authenticate().
  then(() => {
    console.log('connected to the database');
  })

  const init = async() => {
    await db.sync({force: true});
    app.listen(PORT, () => {
      console.log(`App listening in port ${PORT}`);
    });
  }

init();



