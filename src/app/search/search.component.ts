import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchItem:string='';
  searchm:string='';
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>
      {
        if(params['search'])
          this.searchm=params['search'];
        console.log("this is from the search component ts");
        console.log(this.searchm);
      });

  }
  searchdata()
  {
    console.log("this serach function works");
      if(this.searchItem)
      {
      }
  }

}
