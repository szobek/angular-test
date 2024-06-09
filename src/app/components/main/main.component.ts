import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { BsCardComponent } from '../bs-card/bs-card.component';
import { Coffee } from '../../models/coffee.model';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BsCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  coffees: Coffee[] = []
  constructor(private call: HttpService) { }
  ngAfterViewInit() {
    this.call.getCoffees().subscribe({
      next: res => {
        this.coffees = res as Coffee[]
      },
      error: e => console.log(e)
    })

  }
}
