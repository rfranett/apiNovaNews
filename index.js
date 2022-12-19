const express = require('express');
const app = express();

//rota
// method http -crud = (create,read,update,delete)
// GET -pega uma info
// POST - cria uma info
// PUT - altera parte da info
// DELETE - apaga uma info
// name
// function (callback)


app.get("/soma", (req, res) => {
  const soma = 1+ 1 ;

  res.send(soma)
});

app.listen(3000);