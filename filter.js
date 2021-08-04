var fs = require('fs');
var menu = JSON.parse(fs.readFileSync('./menu_sample.json', 'utf-8'));
var searchResult = [];

function menuSearch(text) {
    var onlyMenu = menu.filter(function (menuItem) {
        if (!("isTitle" in menuItem))
            return true;
    });
    searchSubItem(text, onlyMenu);
}

function searchSubItem(text, element) {
    element.forEach(function (subelement) {
        if ("subItems" in subelement) {
            searchSubItem(text, subelement.subItems);
            return;
        }
        if (subelement.label.toLowerCase().indexOf(text.toLowerCase()) != -1) {
            searchResult.push(subelement);
        }
    });
}

menuSearch('Dash');
console.log(searchResult);
