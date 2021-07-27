import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../service/category/category.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  isSubmitted = false;
  categoryCreateForm: FormGroup = new FormGroup({
    name: new FormControl()
  });

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
  }

  submit() {
    const category = this.categoryCreateForm.value;
    this.categoryService.saveCategory(category).subscribe(
      () => {
        this.categoryCreateForm.reset();
        alert('Added new category!');
      }, e => console.log(e)
    );
  }
}
