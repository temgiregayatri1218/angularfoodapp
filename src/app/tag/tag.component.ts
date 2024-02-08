import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../service/models/Tags';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  
  @Input()
  foodPage?:string[];
  @Input()
  justifyContent?:'center';
  constructor(private food:ServicesService) { }
  tags:Tag[]=[];
  ngOnInit(): void {
    this.tags=this.food.getalltag();
  }


}
