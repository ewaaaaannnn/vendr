import { AppState } from "../AppState.js"






export class SnacksController {
  constructor() {

  }



  drawSnacks() {
    const snacks = AppState.snacks
    let snackCards = ''
    snacks.forEach(snacks => snackCards += snacks.card)
    const snacksElem = document.getElementById('snack-catalog')
    snacksElem.innerHTML = snackCards
  }
}