import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from './product';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  pageTitle = "Product List";
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMsg : string = '';
  sub!: Subscription;
  
  private _listFilter = '';

  get listFilter(){
    return this._listFilter;
  }

  set listFilter(value){
    this._listFilter = value;
    console.log('In Setter', value);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];

  products : IProduct[]= []

  constructor(private productService: ProductService){}

  performFilter(filterBy: string){
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product)=>
    product.productName.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage(){
this.showImage = !this.showImage;
  }

  ngOnInit(): void {
   this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMsg = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  onRatingClicked(message:string){
    this.pageTitle = 'Product List ' + message;
  }

}
