import { Component, OnInit } from '@angular/core';
import{Restaurant} from './restaurant/restaurant.model';
import { RestaurantsService } from '../restaurants/restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants:Restaurant[]
  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.restaurants()
<<<<<<< HEAD
<<<<<<< HEAD
    .subscribe(restaurants => this.restaurants = restaurants);
=======
    .subscribe(restaurants => this.restaurants   = restaurants);
>>>>>>> 9a32c15754656c973d8f9b8037e511fe9247e539
=======
    .subscribe(restaurants => this.restaurants   = restaurants);
>>>>>>> 9a32c15754656c973d8f9b8037e511fe9247e539
  }


}
