import { ActivatedRoute, RouterModule } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  
  heroDescription: any;
  constructor(private service :HeroService, private route: ActivatedRoute){}
  hero: any =null;

  ngOnInit(): void {
    let id: any | null = this.route.snapshot.paramMap.get('id')

    this.service.getHeroById(id).subscribe(
      response=>{
        this.hero = response
      },
      (error: Response)=>{
        if (error.status === 404) alert('No Hero found')
        else{
          alert('an unexpected error occured');
          console.log(error)
        }
      });
      this.service.getHeroDesciption(id).subscribe(
        response=>{
          this.heroDescription = response
        },
        (error: Response)=>{
          if (error.status === 404) alert('No Hero Description found')
          else{
            alert('an unexpected error occured');
            console.log(error)
          }
      });
  }
}



