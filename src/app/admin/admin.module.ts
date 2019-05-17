import { NgModule } from '@angular/core';
import { AlbumComponent } from './album/album.component';
// shareModule permet de partager components, services, directive et pipe
import { ShareModule } from '../share/share.module';
import { AddAlbumComponent } from './add-album/add-album.component';
import { Routes, RouterModule } from '@angular/router';
import { GuardService } from '../guard.service';
import { DeleteAlbumComponent } from './delete-album/delete-album.component';

const adminRoutes: Routes = [
  { path: 'admin/add', canActivate: [GuardService], component: AddAlbumComponent },
  { path: 'admin/delete/:id', canActivate: [GuardService], component: DeleteAlbumComponent }
]

@NgModule({
  declarations: [AlbumComponent, AddAlbumComponent, DeleteAlbumComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(adminRoutes) // route dans un sous-module
  ],
  // tous les components exportables à l'extérieur dans les autres modules
  exports: [AlbumComponent]
})
export class AdminModule { }