import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  photosRemove: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.photosRemove = this.dataService.getPhotos();
    //this.postsRemove = this.dataService.getPosts();
  }

}
