import { OK } from './../model/httpstatus';
import { UserService } from '../user.service';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UsuarioModel} from '../model/usuario.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  private usuario: UsuarioModel;
  private isValid: boolean = true;
  private message: string = "";

  constructor(private router:Router, private userService:UserService) { 
   
    if(sessionStorage.getItem("usuario")){
      this.usuario = JSON.parse(sessionStorage.getItem("usuario"));
    }else{
      this.usuario = new UsuarioModel();
    }

    //this.usuario = new UsuarioModel();
  }

  ngOnInit() {
     }

     loginUser(e){
      //Validar obigatoriedad de campos
      this.isValid = true;
      
      //Se debe consumir el servicio Post del backend para autenticar el usuario
      if(this.isValid){
        this.userService.autenticaUsuario(this.usuario).subscribe(res =>{
          if(res.responseCode == OK){
             this.userService.setUserLoggedIn();
              this.router.navigate(['home']);
          }else{
            this.message = res.message;
            this.isValid = false;
          }
        });
      }else{
        this.router.navigate(['/']);
        this.message = "Los campos marcados con * son obligatorios";
      }
    }
  }
