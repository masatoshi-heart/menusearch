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

function searchSubItem(text, menuArray) {
    menuArray.forEach(function (element) {
        if ("subItems" in element) {
            searchSubItem(text, element.subItems);
            return;
        }
        if (element.label.toLowerCase().indexOf(text.toLowerCase()) != -1) {
            searchResult.push(element);
        }
    });
}

menuSearch('株');
console.log(searchResult);
