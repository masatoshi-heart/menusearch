const fs = require('fs');

const menu = JSON.parse(fs.readFileSync('./menu_sample.json', 'utf-8'));

var searchResult = [];

function menuSearch( text: string ) {
  let onlyMenu = menu.filter(menuItem => {
    if(!("isTitle" in menuItem)) return true
  });
  searchSubItem(text, onlyMenu);
}

function searchSubItem(text: string, element: any[]){
  element.forEach(subelement => {
    if("subItems" in subelement){
      searchSubItem(text, subelement.subItems);
      return
    };
    if(subelement.label.toLowerCase().indexOf(text.toLowerCase()) != -1){
      searchResult.push(subelement);
    };
  })
}

menuSearch('a')
console.log(searchResult);

