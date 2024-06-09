import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Coffee } from '../../models/coffee.model';



@Component({
  selector: 'app-coffee-desc',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './coffee-desc.component.html',
  styleUrl: './coffee-desc.component.scss'
})
export class CoffeeDescComponent {
  coffee:Coffee | undefined
  coffeeId:any
  ingredient:string=""
  constructor(private call:HttpService, private route: ActivatedRoute){
    this.route.paramMap.subscribe(params => {
      this.coffeeId=params.get('id')
    });
  }


  ngAfterViewInit(){
    this.call.getSimpleCoffee(Number(this.coffeeId)).subscribe({
      next:res=>{
        this.coffee=res as Coffee
    
      },
      error:e=>console.log(e)
    })
  }
}
