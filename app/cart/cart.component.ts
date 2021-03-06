import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Order } from '../order';
import { Seed } from '../seed';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  seedSum: number;
  plantSum: number;
  planterSum: number;

  seedTotal: number
  plantTotal: number
  planterTotal: number
  totalPrice: number

  seedItems = this.cartService.getSeedItems();
  plantItems = this.cartService.getPlantItems();
  planterItems = this.cartService.getPlanterItems();

  seedItemQuantity: number = 1;
  plantItemQuantity: number = 1;
  planterItemQuantity: number = 1;

  order = {} as Order;
  constructor(private cartService: CartService) {
    if (this.seedItems.length != 0)
      this.seedSum = this.seedItems[0].seedPrice;
    else
      this.seedSum = 0;

    if (this.planterItems.length != 0)
      this.planterSum = this.planterItems[0].planterPrice;
    else
      this.planterSum = 0;

    if (this.plantItems.length != 0)
      this.plantSum = this.plantItems[0].plantPrice;
    else
      this.plantSum = 0;

    this.seedTotal = this.seedSum * this.seedItems.length;
    this.plantTotal = this.plantSum * this.plantItems.length;
    this.planterTotal = this.planterSum * this.planterItems.length;
    this.totalPrice = this.seedTotal + this.plantTotal + this.planterTotal;
  }
  ngOnInit() {


  }

  seedItemQ : number=0;
  updateSeedSum(event): void {

    
 if (this.seedItems.length != 0) {
    this.seedSum = this.seedItems
        .map(x => x.seedPrice)
        .reduce((a, b) => {
          return a + b;
        }); 
        
       
    }
    else
      this.seedSum = 0
      console.log(this.seedSum);
     this.seedItemQuantity = event;
     console.log(this.seedItemQuantity);
  this.seedTotal = this.seedSum * this.seedItemQuantity;
  console.log(this.seedTotal);
   this.updateTotalPrice();
  }
  
  updatePlantSum(event): void {
    if (this.plantItems.length != 0) {
      this.plantSum = this.plantItems
        .map(x => x.plantPrice)
        .reduce((a, b) => {
          return a + b;
        });
    }
    else
      this.plantSum = 0

    this.plantItemQuantity = event;
    this.plantTotal = this.plantSum * this.plantItemQuantity;
    this.updateTotalPrice();
  }
  updatePlanterSum(event): void {
    if (this.planterItems.length != 0) {
      this.planterSum = this.planterItems
        .map(x => x.planterPrice)
        .reduce((a, b) => {
          return a + b;
        });
    }
    else
      this.planterSum = 0

    this.planterItemQuantity = event;
    this.planterTotal = this.planterSum * this.planterItemQuantity;
    this.updateTotalPrice();
  }

  updateTotalPrice(): void {
    this.totalPrice = this.seedTotal + this.plantTotal + this.planterTotal;

  }

  onClickCheckout(): void {
    console.log("cart compo" + this.plantItemQuantity);
    this.order.plantQuantity = this.plantItemQuantity;
    this.order.planterQuantity = this.planterItemQuantity;
    this.order.seedQuantity = this.seedItemQuantity;
    this.order.totalCost = this.totalPrice;
    this.order.plant = this.plantItems;
    this.order.seed = this.seedItems;
    console.log("on checkout cart component", this.order.seed);
    this.order.planters = this.planterItems;
    this.order.quantity = this.order.plantQuantity + this.order.planterQuantity + this.order.seedQuantity; //changed
    this.cartService.onClickCheckout(this.order);
  }


}
