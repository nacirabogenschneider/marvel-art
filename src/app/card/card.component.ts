import { HeroService } from './../services/hero.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'Card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Input('hero') hero: any;
  @Input('imgUrl') imgUrl: any;
  toggleProperty = false;
  heroDescription: any; 
  constructor(private service :HeroService){}
  ngOnInit(): void {
    this.service.getHeroDesciption(this.hero.id).subscribe(response=>{
      this.heroDescription = response
    }, error=>{
      alert('an unexpected error occured');
      console.log(error)
    });
  }
  toggle() {
    this.toggleProperty = !this.toggleProperty;
  }
  // onDetailClick(id: Number){
    
  // }

}
