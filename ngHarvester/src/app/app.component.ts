import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngHarvester';
  currentUser:string
  addrepo:string

  changeCurrentUser(ev){
    console.log(ev)
    this.currentUser = ev
  }

  add(event) {
    //console.log('in app component')
    console.log(event)
    this.addrepo = event
  }

  addRepo() {
    return this.addrepo
  }
}
