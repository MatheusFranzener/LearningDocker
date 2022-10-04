const express = require('express');
const app = express();

const port = process.env.PORT || 3000;  // vai pegar das variáveis de ambiente ou vai usar a porta 3000

app.listen(port, () => console.log("Porta --> ", port));

app.get("/", (req, res) => {
    res.send("Servidor rodando!");
});
