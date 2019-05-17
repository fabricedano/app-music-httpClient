import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/album.service';
import { Album, Position } from 'src/app/albums';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  albums: Observable<Album[]>;
  changePerpage: number;
  message: string;
  showModal: boolean = false;
  albumId: string | number;

  constructor(
    private aS: AlbumService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // nombre d'albums par page dans l'administration
    // en fonction des variables d'environement
    this.changePerpage = environment.perPageAdmin;
  }

  ngOnInit() {
    this.albums = this.aS.paginate(0, this.changePerpage);

    this.route.queryParamMap
      .pipe(
        map(params => params.get('message') || null)
      )
      .subscribe(message => this.message = message);
  }

  paginateParent($event: { start: number, end: number }) {
    const { start, end } = $event;

    this.albums = this.aS.paginate(start, end);
  }

  destroy(album) {
    this.router.navigate(['/admin/delete/' + album.id]);
  }

}