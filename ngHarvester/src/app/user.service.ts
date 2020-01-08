import { Injectable, EventEmitter, Output } from '@angular/core';
import { User, Repo, Aggregate } from './interfaces'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userChangedSource = new Subject<Aggregate>() 
  public getUser$ = this.userChangedSource.asObservable()

  private userErrorSource = new Subject<Response>() 
  public getError$ = this.userErrorSource.asObservable()

  constructor(private http:HttpClient ) { }

  // OPGAVE 2: REMOTE DATA
  setUser(user:string):void { 
    this.http.get<Aggregate>(API_URL+user)
      .subscribe(data => {
        this.userChangedSource.next(data)
      },
      error => this.userErrorSource.next(error)
      ) 
  }
}

const API_URL = "http://localhost:5000/getrepos/"
