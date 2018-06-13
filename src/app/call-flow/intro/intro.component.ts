import { Component, OnInit, Input } from '@angular/core';

import { ClientInfo } from '../../assets/classes/clients/client-info';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  @Input() client: ClientInfo;

  constructor() { }

  ngOnInit() {
  }

}
