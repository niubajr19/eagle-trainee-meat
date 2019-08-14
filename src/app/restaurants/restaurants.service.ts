<<<<<<< HEAD
<<<<<<< HEAD
import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Restaurant } from "./restaurant/restaurant.model"

import{ErrorHandler} from '../app.error-handler'
import {MEAT_API}from '../app.api'

=======
=======
>>>>>>> 9a32c15754656c973d8f9b8037e511fe9247e539
import { Restaurant } from "./restaurant/restaurant.model";
import{Injectable} from '@angular/core';
import{Http}from '@angular/http';
import{MEAT_API} from "../app.api";
import 'rxjs/add/operator/map'
import { Observable } from "rxjs/Observable";
<<<<<<< HEAD
>>>>>>> 9a32c15754656c973d8f9b8037e511fe9247e539
=======
>>>>>>> 9a32c15754656c973d8f9b8037e511fe9247e539
@Injectable()
export class RestaurantsService{
    
  constructor(private http:Http){}

<<<<<<< HEAD
<<<<<<< HEAD
    constructor(private http:Http){}
=======
    restaurants(): Observable<Restaurant[]>{
      return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
>>>>>>> 9a32c15754656c973d8f9b8037e511fe9247e539

    restaurants():Observable<Restaurant[]>{   
      return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
     }
     restaurantById(id:string ) : Observable<Restaurant>{
       return this.http.get(`${MEAT_API}/restaurants/${id}`)
       .map(response => response.json())
       .catch(ErrorHandler.handleError)
     }
=======
    restaurants(): Observable<Restaurant[]>{
      return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
>>>>>>> 9a32c15754656c973d8f9b8037e511fe9247e539

<<<<<<< HEAD

=======
>>>>>>> 9a32c15754656c973d8f9b8037e511fe9247e539
    }
  }