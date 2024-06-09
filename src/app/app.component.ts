import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BsCardComponent } from "./components/bs-card/bs-card.component";
import { CoffeeDescComponent } from './components/coffee-desc/coffee-desc.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, BsCardComponent, CoffeeDescComponent,RouterModule]
})
export class AppComponent {
  

}
