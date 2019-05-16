import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { AlbumService } from '../../album.service';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.scss']
})
export class AddAlbumComponent implements OnInit {

  albumForm: FormGroup;

  constructor(private fb : FormBuilder, private aS : AlbumService) { }

  ngOnInit() {
    this.albumForm = this.fb.group({
      name : new FormControl('', [
      Validators.required,
      Validators.minLength(5)
      ]),
    })
  }

  onSubmit() {
    console.log(this.albumForm.value['name'])
    }

  get name() {
    return this.albumForm.get('name');
    }
    

}
