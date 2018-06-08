import { Component, OnInit } from '@angular/core';

import { Products } from '../../assets/classes/products/products';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {
  plans = Products; 
  
  constructor() { }

  ngOnInit() {
  }

}
