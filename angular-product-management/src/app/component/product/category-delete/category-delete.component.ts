import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../../service/category/category.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  isSubmitted = false;
  categoryDeleteForm: FormGroup = new FormGroup({
    name: new FormControl()
  });
  id: number;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
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
      (category) => {
        this.categoryDeleteForm = new FormGroup({
          name: new FormControl(category.name)
        });
      });
  }

  deleteCategory() {
    this.categoryService.deleteCategory(this.id).subscribe(
      () => this.router.navigate(['/products/categories']),
      e => console.log(e)
   );
  }
}
