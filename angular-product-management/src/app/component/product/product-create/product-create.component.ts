import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../../../service/product/product.service';
import {CategoryService} from '../../../service/category/category.service';
import {Category} from '../../../model/category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  isSubmitted = false;
  productCreateForm: FormGroup;
  categories: Category[] = [];

  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.productCreateForm = this.fb.group({
      name: [''],
      price: [0],
      description: [''],
      category: []
    });
    this.getAllCategories();
  }

  submit() {
    const product = this.productCreateForm.value;
    product.category = {
      id: product.category
    };
    this.productService.saveProduct(product).subscribe(
      () => {
        this.productCreateForm.reset();
        alert('Added new product!');
      }, e => {
        console.log(e);
      }
    );
  }

  getAllCategories() {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }
}
