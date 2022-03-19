import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shorts',
  templateUrl: './shorts.component.html',
  styleUrls: ['./shorts.component.scss']
})
export class ShortsComponent implements OnInit {

  shorts = [
    {
      name: 'Shorts 1',
      price: '10000',
      desc: 'Shorts 1 desc',
      desc_full: 'Shorts 1 full desc',
      href: 'assets/goods/shorts/shorts001.jpg'
    },
    {
      name: 'Shorts 2',
      price: '20000',
      desc: 'Shorts 2 desc',
      desc_full: 'Shorts 2 full desc',
      href: 'assets/goods/shorts/shorts002.jpg'
    },
    {
      name: 'Shorts 3',
      price: '30000',
      desc: 'Shorts 3 desc',
      desc_full: 'Shorts 3 full desc',
      href: 'assets/goods/shorts/shorts003.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
