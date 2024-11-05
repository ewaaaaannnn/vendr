import { AppState } from "../AppState.js"
import { vendingService } from "../services/VendingService.js"





export class VendingController {
  constructor() {
    console.log('vending works')
    this.drawMoney()
  }



  drawMoney() {
    const moneyElm = document.getElementById('money-count')
    moneyElm.innerText = AppState.money.toFixed(2)
  }



  addMoney() {
    vendingService.addMoney()
    this.drawMoney()
  }



  buyItems() {

  }




}