const { request, response } = require('express');
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    console.log(request.query);
    return response.send('teste');
});

app.get('/usuario/:id', (request, response) => {
    console.log(request.params);
    return response.send('teste');
});

app.get('/produto', (request, response) => {
    console.log(request.body);
    return response.json({
        nome: 'Lucas',
        idade: 19
    });
});


app.listen(3333); 