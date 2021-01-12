import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'Card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Input('hero') hero: any;

  @Input('imgUrl') imgUrl: any;
  ngOnInit(): void {
  }

}
