import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/album.service';
import { Album } from 'src/app/albums';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  albums: Album[] = [];

  constructor(private aS: AlbumService) { }

  ngOnInit() {
    this.aS.getAlbums().subscribe(
      albums => this.albums = albums
    );
  }

}