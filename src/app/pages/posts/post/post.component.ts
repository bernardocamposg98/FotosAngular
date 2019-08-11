import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postRemoto;
  @Output() clickpost = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClickHijo() {
    //console.log(this.postRemoto.id);
    this.clickpost.emit(this.postRemoto.id);
  }
}
