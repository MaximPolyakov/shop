import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dresses',
  templateUrl: './dresses.component.html',
  styleUrls: ['./dresses.component.scss']
})
export class DressesComponent implements OnInit {

  dresses = [
    {
      name: 'Dress 1',
      price: '10000',
      desc: 'Dress 1 desc',
      desc_full: 'Dress 1 full desc',
      href: 'assets/goods/dresses/dress001.jpg'
    },
    {
      name: 'Dress 2',
      price: '20000',
      desc: 'Dress 2 desc',
      desc_full: 'Dress 2 full desc',
      href: 'assets/goods/dresses/dress002.jpg'
    },
    {
      name: 'Dress 3',
      price: '30000',
      desc: 'Dress 3 desc',
      desc_full: 'Dress 3 full desc',
      href: 'assets/goods/dresses/dress003.jpg'
    }
  ]

  
  constructor() { }

  ngOnInit(): void {
  }

}
