import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private url: string ='http://localhost:5000/api/'
  private headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjEwNTU3NTc3fQ.-mvr5Ab2P_6MIBtDRUh3dNwkG9SasXvfWgGMO7kkPFs'
  }
  private httpOptions = {
    headers: new HttpHeaders(this.headerDict)
  };
  constructor(private http: HttpClient) { }
  getHeros(page:Number){
   return this.http.get(`${this.url}heros/page/${page}`, this.httpOptions)
  }
  getHeroDesciption(heroId: Number){
    return this.http.get(`${this.url}heros-description/${heroId}`, this.httpOptions)
   }
   deleteHeroDescription(heroId: Number){
    return this.http.delete(`${this.url}heros-description/${heroId}`, this.httpOptions)
   }

  updateHeroDescription(heroId: Number, description: String){
    return this.http.patch(`${this.url}heros-description/${heroId}`, JSON.stringify({description: description}), this.httpOptions) 

  } 
  getHerosByName(name: String){
    return this.http.get(`${this.url}heros/search/${name}`, this.httpOptions)
  }
  getHeroById(heroId: Number){
    return this.http.get(`${this.url}heros/${heroId}`, this.httpOptions)
   }
  getNumberOfHeros(){
    return this.http.get(`${this.url}heros/count`, this.httpOptions) 
  }
}
