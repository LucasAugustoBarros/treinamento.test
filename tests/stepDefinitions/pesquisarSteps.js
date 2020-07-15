/**
 * File: pesquisarSteps.js
 * Autor: Lucas Barros
 * Data: 13/07/2020
 */
const { Given, When, Then } = require('cucumber');


const HomePage = require('../pages/homePage');
const ResultPage = require('../pages/resultPage');

const homePage = new HomePage();
const resultPage = new ResultPage();

Given(/^eu estou na tela de pesquisa do Google$/, () => {
    homePage.open();
});

When(/^eu digito os dados da pesquisa "([^"]*)"$/, (search) => {
    homePage.pesquisar(search);
});

Then(/^eu visualizo o resultado da pesquisa "([^"]*)"$/, (message) => {
    let result = resultPage.resultado();
    console.log(result);
});