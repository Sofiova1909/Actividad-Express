const express = require('express');
const app = express();
require("dotenv/config")
const port = process.env.PUERTO || 3000;

//endpoint raiz
app.get("/", function(req, res){
res.send("Hola aprendiento express")
})


app.listen(port, () => {
    console.log(`Servidor http://localhost:${port}`);
});
