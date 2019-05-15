
import { NgModule } from '@angular/core';
// directives standards d'Angular comme ngFor, ngIf, ...
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';

@NgModule({
  declarations: [AlbumComponent],
  imports: [
    CommonModule
  ],
  // tous les components exportables à l'extérieur dans les autres modules
  exports : [ AlbumComponent ] 
})
export class AdminModule { }