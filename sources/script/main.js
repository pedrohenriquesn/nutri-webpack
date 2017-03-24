const sayHello = require('./say-hello');
const mapdata = require('./mapData');
var $ = require('jquery')

import css from '../style/main.css';

Array.prototype.concatAll = function() {
    let result = []
    this.forEach(itens =>
        result = result.concat(itens)
    )
    return result
}

$(function(){
    $('<div id="message">')
        .text('JQuery is load')
        .appendTo('body')
});

const selectAlimentos = mapdata.alimentos
    .filter(nutri => nutri.kcal <= 10)
    .map(nutri => ({nome: nutri.alimento, kcal: nutri.kcal}))
    .concatAll();

const selectSpecific = mapdata.alimentos
    .filter(nutri => nutri.alimento.toLowerCase().indexOf('arroz') != -1)
    .map(nutri => ({nome: nutri.alimento, kcal: nutri.kcal}))
    .concatAll();

console.log(JSON.stringify(selectSpecific, null, 4))

sayHello('TypeScript', document.querySelector('h2'));