import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bs-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './bs-card.component.html',
  styleUrl: './bs-card.component.scss'
})
export class BsCardComponent {
@Input() coffeetitle:string=""
@Input() coffeedescription:string=""
@Input() coffeeimage:string=""
@Input() coffeeid:string=""
@Input() coffeeingredients:any=[]
ingredient:string=""
}
