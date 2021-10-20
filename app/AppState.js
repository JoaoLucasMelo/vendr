import { Drinks } from "./Models/Drinks.js";
import { Snacks } from "./Models/Snacks.js";
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
snacks = [
  new Snacks('Doritos', 'Chips', 2.00, 14),
  new Snacks('Grndma Cookies', 'Cookies', 1.50, 9),
   new Snacks('Peanut M&Ms', 'Chocolate', 1.75, 13)
]

drinks = [
  new Drinks('Coke', 'Soda', 1.75, 22),
  new Drinks('OJ', 'Juice', 2.00, 15),
  new Drinks('Fanta', 'Soda', 1.50, 10)

]


customerMoney = 0

}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})