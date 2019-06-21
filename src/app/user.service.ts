import { Injectable } from '@angular/core';
import { UsuarioModel } from './model/usuario.model';
import { Observable } from 'rxjs/Observable';
import { restResponse } from './model/restResponse.model';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';



@Injectable()
export class UserService {
  private isUserLoggedIn;
  private username;

  constructor(private http:HttpClient) {
    this.isUserLoggedIn = false;
  }

  

  isAuthenicated(){
    console.log("isAuth", this.isUserLoggedIn)
    const promise = new Promise(
      (resolve, reject) =>{
        setTimeout(()=>{
          resolve(this.setUserLoggedIn)
        }, 2000);
      }
    );
    return promise;
  }

  setUserLoggedIn(){
    this.isUserLoggedIn = true;
    //this.username = usuario.firstName; 
  }

  setUserLoggedOut(){
    this.isUserLoggedIn = false;
  }

  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }

  public autenticaUsuario(usuario: UsuarioModel): Observable<restResponse>{
        return this.http.post<restResponse>("http://localhost:8080/autenticaUsuario", JSON.stringify(usuario));
  }


}
