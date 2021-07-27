import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../../service/category/category.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  isSubmitted = false;
  id: number;
  categoryEditForm: FormGroup = new FormGroup({
    name: new FormControl()
  });

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.id = +paramMap.get('id');
        this.getCategory(this.id);
      }
    );
  }

  ngOnInit() {
  }

  getCategory(id: number) {
    return this.categoryService.findById(id).subscribe(
      category => {
        this.categoryEditForm = new FormGroup({
          name: new FormControl(category.name)
        });
      }
    );
  }

  editCategory() {
    const category = this.categoryEditForm.value;
    this.categoryService.updateCategory(this.id, category).subscribe(
      () => alert('Updated category!'),
      e => console.log(e)
    );
  }
}
