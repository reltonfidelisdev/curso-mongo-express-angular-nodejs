import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css']
})
export class InsertProductComponent implements OnInit {
  productForm: FormGroup;
  titulo = 'Criar Produto';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _ProductService: ProductService,
              private aRouter: ActivatedRoute) {
    this.productForm = this.fb.group({
      product: ['', Validators.required],
      category: ['', Validators.required],
      pizzaria: ['', Validators.required],
      price: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.isEdit();
  }
  createProduct(){

    const PRODUTO: Product = {
      name: this.productForm.get('product')?.value,
      category: this.productForm.get('category')?.value,
      pizzaria: this.productForm.get('pizzaria')?.value,
      price: this.productForm.get('price')?.value,
    }

    if(this.id !== null){
      //editamos produto
      this._ProductService.editProduct(this.id, PRODUTO).subscribe(data =>{
        this.toastr.info('O produto foi atualizado com sucesso!', 'Atualização de Produtos');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.productForm.reset();
      })

    }else {
      // criamos produto
      console.log(PRODUTO);
      this._ProductService.insertProduct(PRODUTO).subscribe(data => {
      this.toastr.success('O produto foi cadastrado com sucesso!', 'Cadastro de Produtos');
      this.router.navigate(['/']);
      }, error => {
        console.log('error');
        this.productForm.reset();
      })
    }
  }

  isEdit(){
    if(this.id !== null){
      this.titulo = 'Editar Produto';
      this._ProductService.getProduct(this.id).subscribe(data => {
        this.productForm.setValue({
          product: data.name,
          category: data.category,
          pizzaria: data.pizzaria,
          price: data.price,
        })
      })
    }
  }
}
