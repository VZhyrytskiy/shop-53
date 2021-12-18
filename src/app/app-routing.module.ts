import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shop',
    pathMatch: 'full',
  },
  {
    path: 'shop',
    loadChildren: () => import('./modules/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./modules/cart/cart.module').then((m) => m.CartModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
