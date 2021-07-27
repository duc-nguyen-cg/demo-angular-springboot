import {Component, OnInit} from '@angular/core';
import {RegisterService} from '../../service/register/register.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isSubmitted = false;
  userRegisterForm: FormGroup;

  constructor(private fb: FormBuilder,
              private registerService: RegisterService,
              private router: Router) {
  }

  ngOnInit() {
    this.userRegisterForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  register() {
    const user = this.userRegisterForm.value;
    this.registerService.register(user).subscribe(
      () => {
        this.userRegisterForm.reset();
        alert('Registered successfully!');
        this.router.navigateByUrl('/login');
      }, e => {
        console.log(e);
    });
  }
}
