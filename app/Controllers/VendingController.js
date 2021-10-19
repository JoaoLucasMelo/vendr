import { ProxyState } from "../AppState.js";
import { vendingService } from "../Services/VendingService.js";
//Private



//Public
export class VendingController {
constructor(){
console.log('controller is working')
}
buyDoritos(){
vendingService.buyDoritos()
}

}









