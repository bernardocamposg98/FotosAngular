import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

postsRemove: any;

  posts = [
    {
      titulo: 'Titulo 1',
      cuerpo: 'Buenos dias'
    },
    {
      titulo: 'Titulo 2',
      cuerpo: 'Buenos tardes'
    },
    {
      titulo: 'Titulo 3',
      cuerpo: 'Buenos noches'
    }
  ];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.postsRemove = this.dataService.getPosts();
    /*this.dataService.getPosts().subscribe(posts => {
      console.log(posts);
    });*/
  }

  onClickPadre(id) {
    console.log(id);
  }

}
