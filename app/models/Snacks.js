
export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }




  get snackCards() {
    return `<div class="col-md-3 card border d-flex align-items-center">
          <h3>${this.name}</h3>
          <hr>
          <img class="card-images"
            src="${this.imgUrl}"
            alt="">
          <h3>${this.price}</h3>
          <button class="btn btn-warning">Buy Now</button>
        </div>`
  }



}