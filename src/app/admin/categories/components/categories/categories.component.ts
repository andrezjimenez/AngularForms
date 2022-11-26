import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators,FormBuilder, FormGroup  } from '@angular/forms';
import { CategoriesService } from './../../../../core/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
