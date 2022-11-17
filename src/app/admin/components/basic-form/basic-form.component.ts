import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  form: FormGroup;

  // nameField = new FormControl('',[Validators.required, Validators.maxLength(2)]);
  // emailField = new FormControl('');
  // phoneField = new FormControl('');

  // colorField = new FormControl('');
  // dateField = new FormControl('');
  // numberField = new FormControl('');
  // categoryField = new FormControl('category-1');
  // tagField = new FormControl('');

  // agreefield = new FormControl (false);

  // genderField = new FormControl ('');
  // zoneField = new FormControl ('');
  // preferencesField = new FormControl ('');


  constructor(
    private formbuilder: FormBuilder
  ) { 
    this.buildForm();
  }

  get nameField(){
    return this.form.get('fullName').get('name');
  }
  get lastField(){
    return this.form.get('fullName').get('last');
  }
  get emailField(){
    return this.form.get('email');
  }
  get phoneField(){
    return this.form.get('phone');
  }
  get colorField(){
    return this.form.get('color');
  }
  get dateField(){
    return this.form.get('date');
  }
  get numberField(){
    return this.form.get('number');
  }
  get categoryField(){
    return this.form.get('category');
  }
  get tagField(){
    return this.form.get('tag');
  }
  get genderField(){
    return this.form.get('gender');
  }
  get zoneField(){
    return this.form.get('zone');
  }
  get preferencesField(){
    return this.form.get('preferences');
  }

  ngOnInit(): void {
    this.nameField.valueChanges
    .subscribe(value => {
      console.log(value);
    })
  }

  getNameValue (){
    console.log(this.nameField.value);
  }

  private buildForm () {
      this.form = this.formbuilder.group ({
      fullName:  this.formbuilder.group({
        name: ['' , [Validators.required, Validators.maxLength(2), Validators.pattern(/^[a-zA-Z]+$/)]],
        last: ['' , [Validators.required, Validators.maxLength(15), Validators.pattern(/^[a-zA-Z]+$/)]]
      }),
      email:  ['', [Validators.required, Validators.email] ],
      phone:  ['',Validators.required],
      color:  [''],
      date:   [''],
      number: [''],
      category: [''],
      tag:    [''],
      agree:  [false, Validators.requiredTrue],
      gender: [''],
      zone:   [''],
      preferences:[''],
    } );
  }

  save(event){
    if (this.form.valid){
      console.log(this.form.value)
    }else{
      this.form.markAllAsTouched();
    }
    
  }
  

}
