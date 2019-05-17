import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlbumService } from 'src/app/album.service';

@Component({
  selector: 'app-delete-album',
  templateUrl: './delete-album.component.html',
  styleUrls: ['./delete-album.component.scss']
})
export class DeleteAlbumComponent implements OnInit {

  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private aS : AlbumService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.aS.deleteAlbum(id).subscribe(() => {
      this.router.navigate(['/dashboard']);
    }, );

  }

}