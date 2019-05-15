import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


// Importez les modules nécessaires pour l'authentification
import firebase from '../environments/firebase'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authState: boolean = false;

  constructor( private router: Router) {
    firebase.auth().onAuthStateChanged( user => {
      this._authState = user ? true : false;
    })
  }

  get authState(): boolean {
    return this._authState;
  }

  // méthode d'authentification
  auth(email: string, password: string): Promise<any> {
  return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  logout() {
    firebase.auth().signOut().then(
      () => this.router.navigate(['/albums'], { queryParams: { message: 'Success logout' } })
    );
  }
}
  