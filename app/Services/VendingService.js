import { ProxyState } from "../AppState.js";

class VendingService {

buyDoritos(){
  let snacks = ProxyState.snacks
  ProxyState.customerMoney -= snacks[0].price
  snacks[0].qtavaiable --
  ProxyState.snacks = snacks
}
buyCookies(){
  let snacks = ProxyState.snacks
  ProxyState.customerMoney -= snacks[1].price
  snacks[1].qtavaiable --
  ProxyState.snacks = snacks
}
buyChocolate(){
  let snacks = ProxyState.snacks
  ProxyState.customerMoney -= snacks[2].price
  snacks[2].qtavaiable --
  ProxyState.snacks = snacks
}
buyCoke(){
  let drinks = ProxyState.drinks
  ProxyState.customerMoney -= drinks[0].price
  drinks[0].qtavaiable --
  ProxyState.drinks = drinks
}
buyOJ(){
  let drinks = ProxyState.drinks
  ProxyState.customerMoney -= drinks[1].price
  drinks[1].qtavaiable --
  ProxyState.drinks = drinks
}
buyFanta(){
  let drinks = ProxyState.drinks
  ProxyState.customerMoney -= drinks[2].price
  drinks[2].qtavaiable --
  ProxyState.drinks = drinks
}

addQuarters(){
  ProxyState.customerMoney += 0.25
}

}



export const vendingService = new VendingService();

