import { AppState } from "../AppState.js"


class VendingService {
  addMoney() {
    AppState.money += .50
    console.log('Coins In', AppState.money)
  }
}


export const vendingService = new VendingService()