import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import { compareValidator } from '../shared/compare.directive';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.reactiveForm = this.fb.group({
      password: new FormControl('', Validators.required),
      passwordConfirm: new FormControl('', [
        Validators.required,
        compareValidator('password')
      ])
    });
  }

  get password() {
    return this.reactiveForm.get('password');
  }

  get passwordConfirm() {
    return this.reactiveForm.get('passwordConfirm');
  }
}
