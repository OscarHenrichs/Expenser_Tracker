const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

//Conecta ao Banco de dados
const connectDB = require('./config/db.js');

//Faz o dotenv saber onde fica o config file
dotenv.config({
	path: './config/config.env',
});

//Faz a conecção
connectDB();

//Routes
const transactions = require('./routes/transactions.js');

//Express Init
const app = express();

app.use(express.json());

if(process.env.NODE_ENV === "development") {
	app.use(morgan('dev'));
}

//Call Routes
app.use('/api/v1/transactions', transactions);

//Criar uma váriavel para acessar o dotenv
const PORT = process.env.PORT;

//Express listen
app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
);
