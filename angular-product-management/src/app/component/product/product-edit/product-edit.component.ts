import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../../service/product/product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Category} from '../../../model/category';
import {CategoryService} from '../../../service/category/category.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  isSubmitted = false;
  productEditForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });
  id: number;
  categories: Category[] = [];

  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.id = +paramMap.get('id');
        this.getAllCategories();
        this.getProduct(this.id);
      }
    );
  }

  ngOnInit() {
  }

  getAllCategories() {
    return this.categoryService.getAll().subscribe(
      categories => this.categories = categories
    );
  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(
      product => {
        this.productEditForm = this.fb.group({
          id: [product.id],
          name: [product.name],
          price: [product.price],
          description: [product.description],
          category: [product.category.id]
        });
      }
    );
  }

  updateProduct(id: number) {
    const product = this.productEditForm.value;
    product.category = {
      id: product.category
    };
    this.productService.updateProduct(id, product).subscribe(
      () => {
        alert('Updated product');
      },
      e => {
        console.log(e);
      }
    );
  }
}
