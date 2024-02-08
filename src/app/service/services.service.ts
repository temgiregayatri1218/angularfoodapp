import { Injectable } from '@angular/core';
import { foods } from './models/foods';
import { Tag } from './models/Tags';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  getalltag():Tag[]
  {
    return [{name:'All',count:12},
  {name:'FastFood', count:4},
  {name:'Pizza', count:3},
  {name:'Lunch', count:6},
  {name:'SlowFood', count:7},
  {name:'Soup', count:2}
]; 
  }
 
}
