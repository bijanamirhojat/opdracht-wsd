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
    this.http.get<Aggregate>(FLASK_GET_URL+user)
      .subscribe(data => {
        this.userChangedSource.next(data)
      },
      error => {
        if (error.status = 404) {
        this.http.get<Aggregate>(SPRING_URL+user)
                .subscribe(data => {
                  this.userChangedSource.next(data)
                  this.saveData(data)
                },
                error => {
                  this.userErrorSource.next(error)
                  console.log("geen gebruiker gevonden")
                }
                )
              }
      })
  }

  getUserData(user:string):User {
    let val = this.filterData(user)
    if (val.length>0) return val[0]['persondata']
    return null
  }

  private filterData(username:string):any { 
    let val = data.filter ( e => {
      if (e.persondata.username === username) return e
    })
    return val
  }

  private saveData(data:Aggregate):void {
    console.log(data)
    console.log ("tried to save data")
    this.http.post(FLASK_SAVE_URL, data).subscribe( data => console.log(data) )
  
  }
}


const data = [
  {"repos":[{"forks":"1","reponame":"ReaderML","programmingLanguage":"TeX","description":"Reader voor machine learning in thema 4.1","stars":"2"},{"forks":"0","reponame":"cv","programmingLanguage":"HTML","description":"Curriculum Vitae","stars":"0"},{"forks":"15312","reponame":"node","programmingLanguage":"JavaScript","description":"Node.js JavaScript runtime","stars":"0"},{"forks":"0","reponame":"ng-demo","programmingLanguage":"TypeScript","description":"Demo die gebruikt werd tijdens het college","stars":"0"},{"forks":"10","reponame":"tweedekamer","programmingLanguage":"Java","description":"Awesome demo voor ITANN 15 maart","stars":"0"},{"forks":"2","reponame":"OOP3","programmingLanguage":"Java","description":"Voorbeeldcode en uitwerkingen voor OOP3 (thema 2.3)","stars":"4"},{"forks":"0","reponame":"ITANN","programmingLanguage":"Java","description":"Voorbeeldcode voor de leergang programmeren van ITANN","stars":"0"},{"forks":"0","reponame":"Thema2.4","programmingLanguage":"TypeScript","description":"Voorbeeldcode voor thema 2.4","stars":"1"},{"forks":"0","reponame":"trump","programmingLanguage":"Python","description":"A graphical representation of the Trump White House using neo4j","stars":"0"},{"forks":"6","reponame":"boterkaaseieren","programmingLanguage":"Java","description":"Command-line boter kaas en eieren.","stars":"3"},{"forks":"16","reponame":"zuul","programmingLanguage":"Java","description":"","stars":"0"},{"forks":"1","reponame":"practicum.2.3","programmingLanguage":"Java","description":"Voorbeeldcode die tijdens de practica van thema 2.3 is besproken.","stars":"0"},{"forks":"0","reponame":"Yfke","programmingLanguage":"Assembly","description":"","stars":"0"}],"persondata":{"avatar":"https://avatars0.githubusercontent.com/u/5617184?s\u003d88\u0026v\u003d4","username":"bart314","repoCount":"13","name":"Bart Barnard"}},
  {"repos":[{"forks":"22201","reponame":"You-Dont-Know-JS","programmingLanguage":"","description":"A book series on JavaScript. @YDKJS on twitter.","stars":"111035"},{"forks":"24","reponame":"CAF","programmingLanguage":"JavaScript","description":"Cancelable Async Flows (CAF)","stars":"744"},{"forks":"79","reponame":"native-promise-only","programmingLanguage":"JavaScript","description":"A polyfill for native ES6 Promises as close as possible (no extensions) to the strict spec definitions.","stars":"667"},{"forks":"1369","reponame":"Functional-Light-JS","programmingLanguage":"JavaScript","description":"Pragmatic, balanced FP in JavaScript. @FLJSBook on twitter.","stars":"11904"},{"forks":"0","reponame":"Incomplete-JS","programmingLanguage":"","description":"\"The Incomplete Guide to JavaScript\" (book). @IncompleteJS on twitter.","stars":"180"},{"forks":"32","reponame":"TNG-Hooks","programmingLanguage":"JavaScript","description":"Provides React-inspired \u0027hooks\u0027 like useState(..) for stand-alone functions","stars":"820"},{"forks":"3","reponame":"revocable-queue","programmingLanguage":"JavaScript","description":"Specialized async queue data structure, supports revocation of values","stars":"159"},{"forks":"7","reponame":"TypL","programmingLanguage":"JavaScript","description":"The JavaScript Type Linter","stars":"169"},{"forks":"69","reponame":"A-Tale-Of-Three-Lists","programmingLanguage":"JavaScript","description":"Comparing various async patterns for a single demo","stars":"619"},{"forks":"318","reponame":"LABjs","programmingLanguage":"HTML","description":"Loading And Blocking JavaScript: On-demand parallel loader for JavaScript with execution order dependencies","stars":"2191"},{"forks":"19","reponame":"FPO","programmingLanguage":"JavaScript","description":"FP library for JavaScript. Supports named-argument style methods.","stars":"376"},{"forks":"1","reponame":"eslint-plugin-proper-ternary","programmingLanguage":"JavaScript","description":"ESLint rules to ensure proper usage of ternary/conditional expressions","stars":"57"},{"forks":"5","reponame":"eslint-plugin-proper-arrows","programmingLanguage":"JavaScript","description":"ESLint rules to ensure proper arrow function definitions","stars":"198"},{"forks":"9","reponame":"fasy","programmingLanguage":"JavaScript","description":"FP iterators that are both eager and asynchronous","stars":"388"},{"forks":"128","reponame":"asynquence","programmingLanguage":"JavaScript","description":"Asynchronous flow control (promises, generators, observables, CSP, etc)","stars":"1566"},{"forks":"4","reponame":"getify.github.io","programmingLanguage":"JavaScript","description":"","stars":"20"},{"forks":"1","reponame":"eslint-plugin-arrow-require-this","programmingLanguage":"JavaScript","description":"DEPRECATED: ESLint rule to require arrow functions to reference the \u0027this\u0027 keyword","stars":"30"},{"forks":"86","reponame":"JSON.minify","programmingLanguage":"","description":"Simple minifier for JSON to remove comments and whitespace","stars":"335"},{"forks":"4","reponame":"node-static-alias","programmingLanguage":"JavaScript","description":"Serve static file which is not requested file. (e.g. `file.min.js` is requested, serve `file.js`)","stars":"5"},{"forks":"1","reponame":"santa-connect-app","programmingLanguage":"JavaScript","description":"Santa Connect: keeping track of your kids\u0027 nice/naughty status","stars":"5"},{"forks":"2","reponame":"Mock-DOM-Resources","programmingLanguage":"JavaScript","description":"A mock of (parts of) the DOM API to simulate resource preloading and loading","stars":"20"},{"forks":"1","reponame":"stable-timers","programmingLanguage":"JavaScript","description":"timers with less race conditions","stars":"36"},{"forks":"7","reponame":"deePool","programmingLanguage":"JavaScript","description":"highly-efficient pool for JavaScript objects","stars":"84"},{"forks":"4","reponame":"pong-around-workshop","programmingLanguage":"","description":"Workshop files for building a pong-variant game in JS and \u003ccanvas\u003e","stars":"10"},{"forks":"6","reponame":"tic-tac-toe-workshop","programmingLanguage":"","description":"Workshop files for building tic-tac-toe in JS and \u003ccanvas\u003e","stars":"22"},{"forks":"18","reponame":"make-a-game","programmingLanguage":"JavaScript","description":"some project files for a tutorial on making a simple web game","stars":"19"},{"forks":"9","reponame":"BikechainJS","programmingLanguage":"C++","description":"JavaScript VM engine (powered by V8); server-side environment modules; server-side synchronous web app controllers","stars":"60"},{"forks":"17","reponame":"cloud-sweeper","programmingLanguage":"JavaScript","description":"A casual game built for the web.","stars":"86"},{"forks":"7","reponame":"ScanTree","programmingLanguage":"JavaScript","description":"Scan a JS file tree to build an ordered and grouped dependency listing","stars":"47"},{"forks":"1","reponame":"remote-csp-channel","programmingLanguage":"JavaScript","description":"Remote bridge for CSP channels","stars":"54"}],"persondata":{"avatar":"https://avatars1.githubusercontent.com/u/150330?s\u003d88\u0026v\u003d4","username":"getify","repoCount":"30","name":"Kyle Simpson"}},
  {"repos":[{"forks":"143","reponame":"python-boilerpipe","programmingLanguage":"Python","description":"Python interface to Boilerpipe, Boilerplate Removal and Fulltext Extraction from HTML pages","stars":"446"},{"forks":"118","reponame":"pynsq","programmingLanguage":"Python","description":"The official Python client library for NSQ","stars":"0"},{"forks":"2182","reponame":"nsq","programmingLanguage":"Go","description":"A realtime distributed messaging platform","stars":"1"},{"forks":"14","reponame":"aptos","programmingLanguage":"Python","description":"☀ A tool for validating data using JSON Schema and converting JSON Schema documents into different data-interchange formats","stars":"0"},{"forks":"5","reponame":"libesm","programmingLanguage":"C","description":"C library for efficient string matching with Aho-Corasick","stars":"0"},{"forks":"12","reponame":"json-spec","programmingLanguage":"Python","description":"Implements some tools for JSON","stars":"0"},{"forks":"19","reponame":"nsq-py","programmingLanguage":"Python","description":"Hacking on Python NSQ Bindings","stars":"0"},{"forks":"11","reponame":"aionsq","programmingLanguage":"Python","description":"asyncio (PEP 3156) nsq (message queue) client.","stars":"0"},{"forks":"26","reponame":"esmre","programmingLanguage":"Python","description":"Python extension module for accelerating regular expressions using libesm","stars":"1"},{"forks":"188","reponame":"aioredis","programmingLanguage":"Python","description":"asyncio (PEP 3156) Redis support","stars":"0"},{"forks":"53","reponame":"jusText","programmingLanguage":"Python","description":"Heuristic based boilerplate removal tool","stars":"0"},{"forks":"34","reponame":"rumor","programmingLanguage":"Python","description":"Nonparametric timeseries classification for Twitter trending topic detection (MEng thesis)","stars":"0"},{"forks":"0","reponame":"librdf","programmingLanguage":"PHP","description":"Wrapper for the PHP bindings of the Redland RDF libraries","stars":"2"}],"persondata":{"avatar":"https://avatars1.githubusercontent.com/u/36168?s\u003d88\u0026v\u003d4","username":"misja","repoCount":"13","name":"Misja Hoebe"}} 
]
const API_URL = "http://localhost:5000/getrepos/"
const FLASK_GET_URL = "http://localhost:5000/getall/"
const FLASK_SAVE_URL = "http://localhost:5000/makerepos"
const SPRING_URL = "http://localhost:8080/getdata/"
