import { HeroService } from './../services/hero.service';
import { Component, OnInit } from '@angular/core';
import Heros from '../../assets/json/character.json'

@Component({
  selector: 'CardList',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {  
  heros: any = Heros;
  db_heros: any;
  character: any;
  numberOfHeros: any= null;
  numberOfPages: number = this.numberOfHeros/100
  page: number=1;
  isActive: number=1;
  collection: Array<any> = [];
  constructor(private service: HeroService) {

  }  
  onChange(value: HTMLInputElement){
   
    if(value.value === undefined) return;
    if(value.value !== undefined){
    this.service.getHerosByName(value.value).subscribe(response=>{
      this.db_heros= response;
      }, error=>{
        alert('an unexpected error occured');
        console.log(error)
      });}
   
  }

  ngOnInit(): void {
   this.service.getHeros(1).subscribe(response=>{
    this.db_heros= response;
    }, error=>{
      alert('an unexpected error occured');
      console.log(error)
    });
    this.service.getNumberOfHeros().subscribe(response=>{
      this.numberOfHeros = response;
      }, error=>{
        alert('an unexpected error occured');
        console.log(error)
      });
  }

  onUpdate(id: Number, input: String){
    this.service.updateHeroDescription(id, input).subscribe(response=>{
    }, error=>{
      alert('an unexpected error occured');
      console.log(error)
    });
  }
 
  pageChange(clickedPage: number){
    this.page=clickedPage
    this.isActive= (clickedPage)
    this.service.getHeros(this.page).subscribe(response=>{
      this.db_heros= response;
      }, error=>{
        alert('an unexpected error occured');
        console.log(error)
      });
  }
}
