import { Snack } from './models/Snacks.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  money = 0
  snacks = [
    new Snack({
      name: 'Tacos',
      price: 9,
      imgUrl: 'https://plus.unsplash.com/premium_photo-1661730329741-b3bf77019b39?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }),
    new Snack({
      name: 'Hot Dog',
      price: 5,
      imgUrl: 'https://plus.unsplash.com/premium_photo-1684706282813-201f3afb35b6?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }),
    new Snack({
      name: 'Hamburger',
      price: 7,
      imgUrl: 'https://plus.unsplash.com/premium_photo-1683619761468-b06992704398?q=80&w=1265&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }),
    new Snack({
      name: 'Chicken Strips',
      price: 8,
      imgUrl: 'https://plus.unsplash.com/premium_photo-1683139918895-06f8f3b9939e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }),
    new Snack({
      name: 'Milkshake',
      price: 3,
      imgUrl: 'https://plus.unsplash.com/premium_photo-1695927469061-4c307d53c7a5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }),
    new Snack({
      name: 'Brownie',
      price: 2,
      imgUrl: 'https://plus.unsplash.com/premium_photo-1663840175543-6eb0f4a25401?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }),
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())