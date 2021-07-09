import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-listar-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  productArray: Product[] = [];

  constructor(private _productService: ProductService,
              private toastr: ToastrService,
              private _ProductService: ProductService) { }

  ngOnInit(): void {
    this.listProducts();
  }


  listProducts(){
    this._productService.getProducts().subscribe(data => {
      console.log(data);
      this.productArray = data;
    }, error => {
      console.log(error);
    })
  }

  deletProduct(id: any) {
    this._productService.deletProduct(id).subscribe(data => {
      this.toastr.error('Produto removido com sucesso!', 'Removendo Produto');
      this.listProducts();
    }, error => {
      console.log(error);
    })
  }


}
