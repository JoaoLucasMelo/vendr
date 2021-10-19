import { Snacks } from "../Models/Snacks.js";


class AppState {


snacks = [
  doritos = new Snacks('Doritos', 'Chips', 2.00, 14),
  cookies = new Snacks('Gma Cookies', 'Cookies', 1.50, 9),
  chocolate = new Snacks('Peanut M&Ms', 'Chocolate', 1.75, 13)
]

customerMoney = 100

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
