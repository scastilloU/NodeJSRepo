//Constantes globales

const express = require("express");
const app = express();
const port=8889;
const bodyParser = require("body-parser");
const ejs = require("ejs");

// generar ejs view
app.set("view engine","ejs");

//renderiar un URL encoded body
app.use(bodyParser.urlencoded({extended:false}))

// Parse JSON body  (API clients)
app.use(bodyParser.json());

//definir ruta URL definir enrutamiento
app.get("/", (req,res)=>{

    res.render("game");

});

app.post("/play",(req,res)=>{
    
    const playerGuess= parseInt(req.body.guess);
    // el servidor crea un numero random
    let pcRandom = Math.floor(Math.random()*10);
    let result;

    //le pedimos al servidor que analize la respuesta

    // si es igual
    if(playerGuess == pcRandom){
        resultText="Felicidades usted ha ganado!! :)"+" "+playerGuess;
        result=playerGuess;
    //si no es igual
    }else if(playerGuess!=pcRandom){
        resultText="Lo sentimos el numero que escogio no gano :("+" "+playerGuess;
        result=secretNumber;

    }

    // el servidor envia la respuesta al cliente
res.render("result",{result});
});

//node js esta escuchando por medio de un metodo que se llama listen

app.listen(port,()=>{
    console.log("El Servidor esta escuchando en el puerto"+port);
});

