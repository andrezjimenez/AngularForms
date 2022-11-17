import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  form = new FormGroup ({
    name: new FormControl('',[Validators.required, Validators.maxLength(2)]),
    email: new FormControl(''),
    phone:new FormControl(''),
    color:new FormControl(''),
    date:new FormControl(''),
    number:new FormControl(''),
    category: new FormControl('category-1'),
    tag: new FormControl(''),
    agree:new FormControl (false),
    gender:new FormControl(''),
    zone:new FormControl(''),
    preferences:new FormControl(''),
  } );

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


  constructor() { }

  get nameField(){
    return this.form.get('name');
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


  

}
