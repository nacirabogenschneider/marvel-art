import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


import Heros from '../../assets/json/character.json'

@Component({
  selector: 'CardList',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  search: string | undefined;
  public heros: any=Heros;
  character: any=this.heros
  
  onChange(value: string){
    this.search=value
    this.character=this.heros.filter((item: any)=>item.name.toLowerCase().includes(value.toLocaleLowerCase()))
    console.log(this.character)
  }
  ngOnInit(): void {
  }
  
}

