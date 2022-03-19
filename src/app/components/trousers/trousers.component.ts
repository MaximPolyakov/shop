import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trousers',
  templateUrl: './trousers.component.html',
  styleUrls: ['./trousers.component.scss']
})
export class TrousersComponent implements OnInit {

  trousers = [
    {
      name: 'Trousers 1',
      price: '10000',
      desc: 'Trousers 1 desc',
      desc_full: 'Trousers 1 full desc',
      href: 'assets/goods/trousers/trousers001.jpg'
    },
    {
      name: 'Trousers 2',
      price: '20000',
      desc: 'Trousers 2 desc',
      desc_full: 'Trousers 2 full desc',
      href: 'assets/goods/trousers/trousers002.jpg'
    },
    {
      name: 'Trousers 3',
      price: '30000',
      desc: 'Trousers 3 desc',
      desc_full: 'Trousers 3 full desc',
      href: 'assets/goods/trousers/trousers003.jpg'
    }
  ]

  description = ''

  constructor() { }

  ngOnInit(): void {
  }

  getInfo(info: any) {
    this.description = info.desc_full
  }

}
