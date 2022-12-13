/* 

Capture 10 items para compor a lista de um supermercado.

Apos capturar os 10 items, imprima-os, separando por virgula

*/

let items = [];

for(let item = 0; item < 10; item++) {
  let itemName = prompt("Digite o item " + (item + 1));

  item[item] = itemName;
} 

alert(items)
