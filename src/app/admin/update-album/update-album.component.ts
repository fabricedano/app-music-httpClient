import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/album.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Album } from 'src/app/albums';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-update-album',
  templateUrl: './update-album.component.html',
  styleUrls: ['./update-album.component.scss']
})
export class UpdateAlbumComponent implements OnInit {

  updateFormAlbum: FormGroup;
  messageError: string;
  album: Album;

  constructor(
    private route: ActivatedRoute,
    private aS: AlbumService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    // id récupérer dans l'url
    const id = this.route.snapshot.paramMap.get('id');

    // 1 initialiser l'objet
    this.initAlbum();

    // 2 s'inscrire à la mise à jour de l'objet en fonction de l'id
    this.aS.getAlbum(id).subscribe(
      album => {
        // hydrate l'objet updateFormAlbum
        // met les données dans le formulaire
        this.updateFormAlbum.patchValue(album);
      }
    );

    const proposition = 100;

    this.updateFormAlbum.get('proposition').valueChanges.pipe(
      map(proposition => {
        return {
          pTTC: Math.floor(proposition * 1.05), pHT: proposition, pInit: proposition
        }
      })
    ).subscribe(
      p => {
        const priceTTC = p.pTTC < proposition ? "Error..." : p.pTTC;

        // hydratation des données de ton formulaire de manière dynamique
        this.updateFormAlbum.controls['price'].setValue(p.pInit);
        this.updateFormAlbum.controls['priceHT'].setValue(p.pHT);
        this.updateFormAlbum.controls['priceTTC'].setValue(priceTTC);
      }
    );

  }

  initAlbum() {

    // FormControl
    // utilisez les validators suivants pattern, max, required, minLength(5)
    this.updateFormAlbum = this.fb.group(
      {
        id: '',
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(5)
        ]),
        title: new FormControl('', [
          Validators.required,
        ]),
        ref: new FormControl('', [
          Validators.required,
          Validators.pattern("[a-zA-Z0-9\_]{5}") // regex pour vérifire une syntaxe
        ]),
        duration: new FormControl('', [
          Validators.required,
          Validators.max(960)
        ]),
        description: '',
        status: '',
        price: 0,
        priceTTC: 0,
        priceHT: 0,
        proposition: new FormControl('', [
          Validators.required,
          Validators.min(100),
        ]),
      }
    );
  }

  // getter pour récupérer les messages d'erreur dans le formulaire cote html
  get name() { return this.updateFormAlbum.get('name'); }
  get title() { return this.updateFormAlbum.get('title'); }
  get ref() { return this.updateFormAlbum.get('ref'); }
  get duration() { return this.updateFormAlbum.get('duration'); }
  get description() { return this.updateFormAlbum.get('description'); }
  // get price() { return this.updateFormAlbum.get('price'); }
  get proposition() { return this.updateFormAlbum.get('proposition'); }
  get priceTTC() { return this.updateFormAlbum.get('priceTTC'); }

  onSubmit() {
    const album: Album = this.updateFormAlbum.value;

    this.aS.updateAlbum(album.id, album).subscribe(
      () => {
        this.router.navigate(['/dashboard'], {
          queryParams: {
            message: `Success update album ${album.title}`
          }
        });
      }
    )
  }

}