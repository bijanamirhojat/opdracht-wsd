import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service'
import { Observable } from 'rxjs';
import { Aggregate } from '../interfaces';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() userChanged:EventEmitter<string> = new EventEmitter()
  test:Observable<Aggregate>

  constructor(private userService:UserService) { }


  ngOnInit() {
  }

  getRepos(event) {
    this.userService.setUser(event.target.value)
  }

}
