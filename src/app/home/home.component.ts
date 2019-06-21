import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = 'anony';  
  title = 'SAI';
  constructor(private user: UserService) { }

  ngOnInit() {
    //this.name = this.user.username; 
    //  console.log('HOME El usuario está logueado?', this.user.getUserLoggedIn());
    
  }

}
