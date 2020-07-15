/**
 * File: homePage.js.js
 * Autor: Lucas Barros
 * Data: 13/07/2020
 */


class HomePage {
    // Define os elementos da tela
    get inputSearch() { return $('input[name="q"]') }

    //Metodos dos elementos de ação
    pesquisar(search){
        this.inputSearch.waitForDisplayed();
        this.inputSearch.setValue(search);
        browser.keys('Enter');
    }

    open(){
        browser.url('/')
    }
}
module.exports = HomePage;