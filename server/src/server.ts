import express from 'express';

const app = express();

app.use(express.json());

app.get('/users', (request, response) => {

  return response.json({ message: 'Hello world' });

})

app.listen(3333); // método responsável por app ouvir as requisicoes http
