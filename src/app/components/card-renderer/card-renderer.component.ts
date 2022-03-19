import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-renderer',
  templateUrl: './card-renderer.component.html',
  styleUrls: ['./card-renderer.component.scss']
})
export class CardRendererComponent implements OnInit {

  @Input() inputData: any;
  @Output() transferData = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  showInfo(info: any) {
    this.transferData.emit(info)
  }

}
