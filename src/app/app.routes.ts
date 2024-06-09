import { Routes } from '@angular/router';
import { CoffeeDescComponent } from './components/coffee-desc/coffee-desc.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    {path:'desc/:id',component: CoffeeDescComponent},
];
