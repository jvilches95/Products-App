import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { StarsComponent } from '../stars/stars.component';
import { ConvertToSpacesPipe } from 'src/app/pipes/convert-to-spaces.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail/product-detail.guard';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    StarsComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id',canActivate: [ProductDetailGuard], component: ProductDetailComponent},
    ])
  ]
})
export class ProductsModule { }
