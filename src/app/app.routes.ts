import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
{
    path:'',
    component:HeaderComponent
},
{
    path:'',
    component:ProductsComponent
}
];
