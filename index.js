/* Carregando o express */
const express = require('express');

/* instancio o express e carregando a biblioteca do express dentro dessa const app. */
const app = express();

app.listen(3080,() => {
    console.log('Página salva com sucesso nodemon!');
})

/* Lista de games. */

let games = [ 
    {title: "Sea of thieves", studio:"Rare", year: 2018, price: 50},
    {title: "WOW", studio:"Blizzard", year: 2010, price: 70},
    {title: "Valorant", studio: "Riot Games", year: 2020, price: 0},
    {title: "COD", studio: "Activision", year: 2019, price: 60},
    {title: "GTA V", studio: "Rockstar Games", year: 2013, price: 40},
    {title: "Minecraft", studio: "Mojang Studios", year: 2011, price: 30},
    {title: "God of War", studio: "Santa Monica Studio", year: 2018, price: 50},
    {title: "Resident Evil 2", studio: "Capcom", year: 2019, price: 40},
    {title: "Soul Reaver", studio: "Crystal Dynamics", year: 1999, price: 20},
    {title: "Call of Dragons", studio: " Farlight Games", year: 2023, price: 0},
    {title: "Call of Duty: Ghosts", studio: "Activision", year: 2013, price: 50}

]

// Rota para acessar a lista de games. O método get é utilizado para acessar os dados, 
// e o endpoint é a raiz do servidor, ou seja, '/'. A função de callback
//  recebe dois parâmetros: req (request) e res (response).
//  Dentro da função, utilizamos res.json() 
// para enviar a lista de games como resposta em formato JSON.
app .get('/', (req, res) => {
    res.json(games);
})