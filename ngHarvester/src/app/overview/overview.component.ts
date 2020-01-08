import { Component, OnInit, Input }  from '@angular/core';
import {User, Repo } from '../interfaces'
import { UserService } from '../user.service'

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})


export class OverviewComponent implements OnInit {
  user:User
  repos:Repo[]
  error:string = 'geen user'
  @Input() username:string

  constructor(private userService:UserService) { }
   
  ngOnInit() { 
    this.userService.getUser$.subscribe( data => { 
      if (data[0].repos !== undefined ) { 
        this.user = data[0].persondata
        this.repos = data[0].repos
        this.error=''
      } else {
        this.error = 'Fout; data had niet het verwachte formaat. Check de console.'
        console.log(data)
      }
    },
    error => this.error = error)

    this.userService.getError$.subscribe ( error => {
      if (error.status == 404) {
        this.error = 'Die gebruiker bestaat niet'
      }
    }) 
  } 
}