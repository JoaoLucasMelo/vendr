import { ProxyState } from "../AppState.js";

class VendingService {

buyDoritos(){
  ProxyState.customerMoney -= ProxyState.snacks[0].price
  ProxyState.snacks[0].qtavaiable --
}

}

export const vendingService = new VendingService();

