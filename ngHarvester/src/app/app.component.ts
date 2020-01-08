import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngHarvester';
  currentUser:string

  changeCurrentUser(ev){
    console.log(ev)
    this.currentUser = ev
  }
}
