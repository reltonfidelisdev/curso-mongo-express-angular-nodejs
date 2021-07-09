import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Componentes
import { ListProductsComponent } from './components/list-product/list-products.component';
import { InsertProductComponent } from './components/insert-product/insert-product.component';
const routes: Routes = [
    { path: '', component: ListProductsComponent},
    { path: 'insert-product', component: InsertProductComponent},
    { path: 'edit-product/:id', component: InsertProductComponent},    { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
