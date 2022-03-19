import { Component, OnInit } from '@angular/core';
import { Common } from 'src/app/enums/common.enum';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dresses = Common.Dresses
  trousers = Common.Trousers
  shorts = Common.Shorts
  constructor() { }

  ngOnInit(): void {
  }

}
