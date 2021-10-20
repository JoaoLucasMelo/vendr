import { ProxyState } from "../AppState.js";
import { vendingService } from "../Services/VendingService.js";
//Private


function _draw(){
  _List()
  document.getElementById('funds').innerText = `$${ProxyState.customerMoney}`
}


function _List() {
  let list = ['listDoritos', 'listCookies', 'listChocolate', 'listCoke', 'listOJ', 'listFanta'];
  for (let i = 0; i < list.length; i++)

  document.getElementById(list[i]).innerText = ``
}


//Public
export class VendingController {
  
constructor(){
console.log('controller is working')

ProxyState.on('snacks', _draw)
ProxyState.on('drinks', _draw)

}
addQuarters(){
  vendingService.addQuarters()
  document.getElementById('funds').innerText = `$${ProxyState.customerMoney}`
}
showDoritos(){
  document.getElementById('listDoritos').innerText = `Price: $${ProxyState.snacks[0].price} there are ${ProxyState.snacks[0].qtavaiable} products still avaiable.`
}
buyDoritos(){
  if( ProxyState.customerMoney >= ProxyState.snacks[0].price){
vendingService.buyDoritos()
  } else{
    window.alert('Insufficient Funds!')
  }
}
showCookies(){
  document.getElementById('listCookies').innerText = `Price: $${ProxyState.snacks[1].price} there are ${ProxyState.snacks[1].qtavaiable} products still avaiable.`
}
buyCookies(){
  if( ProxyState.customerMoney >= ProxyState.snacks[1].price){
    vendingService.buyCookies()
  } else{
    window.alert('Insufficient Funds!')
}
}
showChocolate(){
  document.getElementById('listChocolate').innerText = `Price: $${ProxyState.snacks[2].price} there are ${ProxyState.snacks[2].qtavaiable} products still avaiable.`
}
buyChocolate(){
  if( ProxyState.customerMoney >= ProxyState.snacks[2].price){
    vendingService.buyChocolate()
  } else{
    window.alert('Insufficient Funds!')
}
}
showCoke(){
  document.getElementById('listCoke').innerText = `Price: $${ProxyState.drinks[0].price} there are ${ProxyState.drinks[0].qtavaiable} products still avaiable.`
}
buyCoke(){
  if( ProxyState.customerMoney >= ProxyState.drinks[0].price){
    vendingService.buyCoke()
  } else{
    window.alert('Insufficient Funds!')
}
}
showOJ(){
  document.getElementById('listOJ').innerText = `Price: $${ProxyState.drinks[1].price} there are ${ProxyState.drinks[1].qtavaiable} products still avaiable.`
}
buyOJ(){
  if( ProxyState.customerMoney >= ProxyState.drinks[1].price){
    vendingService.buyOJ()
  } else{
    window.alert('Insufficient Funds!')
}
}
showFanta(){
  document.getElementById('listFanta').innerText = `Price: $${ProxyState.drinks[2].price} there are ${ProxyState.drinks[2].qtavaiable} products still avaiable.`
}
buyFanta(){
  if( ProxyState.customerMoney >= ProxyState.drinks[2].price){
    vendingService.buyFanta()
  } else{
    window.alert('Insufficient Funds!')
}
}

}








