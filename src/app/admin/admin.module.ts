import { NgModule } from '@angular/core';
import { AlbumComponent } from './album/album.component';
// shareModule permet de partager components, services, directive et pipe
import { ShareModule } from '../share/share.module';
import { AddAlbumComponent } from './add-album/add-album.component';
import { Routes, RouterModule } from '@angular/router';
import { GuardService } from '../guard.service';
import { DeleteAlbumComponent } from './delete-album/delete-album.component';
import { UpdateAlbumComponent } from './update-album/update-album.component';

const adminRoutes: Routes = [
  {
    path:
      'admin/add',
    canActivate: [GuardService],
    component: AddAlbumComponent
  },
  {
    path: 'admin/delete/:id',
    canActivate: [GuardService],
    component: DeleteAlbumComponent
  },
  {
    path: 'admin/udpate/:id',
    canActivate: [GuardService],
    component: UpdateAlbumComponent
  }
]

@NgModule({
  declarations: [AlbumComponent, AddAlbumComponent, DeleteAlbumComponent, UpdateAlbumComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(adminRoutes) // route dans un sous-module
  ],
  // tous les components exportables à l'extérieur dans les autres modules
  exports: [AlbumComponent]
})
export class AdminModule { }